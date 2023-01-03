import React, { useContext, useEffect, useRef, useState } from "react";
import { Divider, InputNumber, InputRef, Select, Tag, Typography } from "antd";
import { Button, Form, Input, Popconfirm, Table } from "antd";
import type { FormInstance } from "antd/es/form";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { getAllCategories } from "../../../redux/actions/Admin/categoryAction";
import {
  getAllSortsAction,
  getAllSubCatAction,
} from "../../../redux/actions/Admin/packageAction";

const EditableContext = React.createContext<FormInstance<any> | null>(null);

interface Item {
  key: string;
  subcategories: string[];
  coupons: [];
}

interface EditableRowProps {
  index: number;
}

const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm();

  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

interface EditableCellProps {
  title: React.ReactNode;
  editable: boolean;
  children: any;
  dataIndex: keyof Item;
  record: Item;
  handleSave: (record: Item) => void;
}

const EditableCell: React.FC<EditableCellProps> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef<any>(null);
  const form = useContext(EditableContext)!;
  const [cat, setCat] = useState<any>([]);

  // category api call...
  const dispatch = useAppDispatch();
  const {
    getAllSubCat,
    allSorts: {
      res: { data },
    },
  } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(getAllSubCatAction());
    dispatch(getAllSortsAction());
  }, []);

  useEffect(() => {
    if (editing) {
      inputRef.current!.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({ [dataIndex]: record[dataIndex] });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
       console.log(values);
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };

  let childNode = children;
  if (editable && dataIndex === "subcategories") {
    childNode = editing ? (
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `required.`,
          },
        ]}
      >
        <Select
          onChange={(val) => {
            setCat(val);
          }}
          showArrow={true}
          mode="tags"
          placeholder="categories"
          onBlur={save}
          getPopupContainer={(trigger) => trigger.parentNode}
          ref={inputRef}
        >
          {getAllSubCat?.res?.data?.map((cat: any, i: any) => (
            <Select.Option key={cat._id} value={cat._id}>
              {cat?.subCategoryName}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24 }}
        onClick={toggleEdit}
      >
          <Select
            className="w-full"
            getPopupContainer={(trigger) => trigger.parentNode}
            defaultValue={cat}
            mode="tags"
            placeholder="categories"
            onBlur={save}
            ref={inputRef}
          >
            {getAllSubCat?.res?.data?.map((cat: any, i: any) => (
              <Select.Option key={cat._id} value={cat._id}>
                {cat.subCategoryName}
              </Select.Option>
            ))}
          </Select>
      </div>
    );
  } else if (dataIndex === "coupons") {
    return (
      <td>
        {data?.map((each: any, i: any) => (
          <>
            <Form.Item
              hidden
              initialValue={each._id}
              name={["sorts", i, "sortsId"]}
            >
              <Input />
            </Form.Item>
            <Form.Item noStyle name={["sorts", i, "access"]}>
              <InputNumber placeholder={each.sortName} />
            </Form.Item>
          </>
        ))}
      </td>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

type EditableTableProps = Parameters<typeof Table>[0];

interface DataType {
  key: React.Key;
  subcategories: string[];
  coupons: [];
}

type ColumnTypes = Exclude<EditableTableProps["columns"], undefined>;

const StickerSortTable = ({ setState, tableTitle, title }: any) => {
  const [dataSource, setDataSource] = useState<DataType[]>([
    {
      key: 0,
      subcategories: [],
      coupons: [],
    },
  ]);

  const [count, setCount] = useState(2);

  const handleDelete = (key: React.Key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };

  const defaultColumns: any = [
    {
      title: "Categories",
      dataIndex: "subcategories",
      editable: true,
      width: "25%",
    },
    {
      title: "Coupons",
      dataIndex: "coupons",
      width: "50%",
      editable: true,
    },

    {
      title: "Delete",
      dataIndex: "",
      render: (_: any, record: { key: React.Key }) =>
        dataSource.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.key)}
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        ) : null,
    },
  ];

  const handleAdd = () => {
    const newData: DataType = {
      key: count,
      subcategories: [],
      coupons: [],
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };

  const handleSave = (row: DataType) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    console.log(newData);
    // setState(newData);
    setDataSource(newData);
  };

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  const columns = defaultColumns.map((col: any) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: DataType) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });

  return (
    <div>
      <Typography style={{ fontWeight: 600 }}>
        Category Wise Sort Itenm Access
      </Typography>
      <Table
        pagination={false}
        components={components}
        rowClassName={() => "editable-row"}
        bordered
        dataSource={dataSource}
        columns={columns as ColumnTypes}
      />
      <div className="w-full text-center">
        <Button
          onClick={handleAdd}
          type="primary"
          style={{ marginBottom: 16, marginTop: 5, marginLeft: "auto" }}
        >
          Add Package
        </Button>
      </div>
      <Divider />
    </div>
  );
};

export default StickerSortTable;
