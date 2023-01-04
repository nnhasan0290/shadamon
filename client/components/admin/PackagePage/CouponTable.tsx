import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Divider,
  InputNumber,
  InputRef,
  Select,
  Switch,
  Tag,
  Typography,
} from "antd";
import { Button, Form, Input, Popconfirm, Table } from "antd";
import type { FormInstance } from "antd/es/form";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { getAllSubCatAction } from "../../../redux/actions/Admin/packageAction";

const EditableContext = React.createContext<FormInstance<any> | null>(null);

interface Item {
  key: string;
  totalPost: number;
  couponCode: string;
  discAmount: number;
  validDays: number;
  status: string;
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

  const [switchForm] = Form.useForm();

  // category api call...
  const dispatch = useAppDispatch();
  const { getAllSubCat } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(getAllSubCatAction());
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
      const switchFrm = await switchForm.validateFields();
      values.status = switchFrm.status === undefined ? true : switchFrm.status;
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };

  let childNode = children;
  let inputNode;
  switch (dataIndex) {
    case "couponCode":
      inputNode = <Input ref={inputRef} onPressEnter={save} onBlur={save} />;
      break;
    default:
      inputNode = (
        <InputNumber
          className="w-full"
          controls={false}
          ref={inputRef}
          onPressEnter={save}
          onBlur={save}
        />
      );
      break;
  }
  if (editable && dataIndex !== "status") {
    childNode = editing ? (
      <Form.Item
        style={{ margin: 0, width: "100%" }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        {inputNode}
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24 }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  } else if (dataIndex === "status") {
    childNode = (
      <Form form={switchForm}>
        <Form.Item name={"status"} >
          <Switch
            ref={inputRef}
            className="bg-gray-400"
            defaultChecked
            onChange={(e: any) => {
              save();
            }}
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
          />
        </Form.Item>
      </Form>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

type EditableTableProps = Parameters<typeof Table>[0];

interface DataType {
  key: React.Key;
  totalPost: number;
  couponCode: string;
  discAmount: number;
  validDays: number;
}

type ColumnTypes = Exclude<EditableTableProps["columns"], undefined>;

const CouponTable = ({ setState }: any) => {
  const [dataSource, setDataSource] = useState<DataType[]>([
    {
      key: 0,
      totalPost: 0,
      couponCode: "code",
      discAmount: 0,
      validDays: 0,
    },
  ]);

  const [count, setCount] = useState(2);

  const handleDelete = (key: React.Key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };

  const defaultColumns: any = [
    {
      title: "TotalPost",
      dataIndex: "totalPost",
      editable: true,
      width: "20%",
      align: "center"
    },
    {
      title: "Code",
      align: "center",
      dataIndex: "couponCode",
      editable: true,
      width: "15%",
    },
    {
      title: "Dis.Amnt",
      align: "center",
      dataIndex: "discAmount",
      editable: true,
      width: "15%",
    },
    {
      title: "Valid",
      align: "center",
      dataIndex: "validDays",
      editable: true,
      width: "15%",
    },
    {
      title: "Status",
      align: "center",
      dataIndex: "status",
      editable: true,
      width: "100px",
    },
    {
      title: "Delete",
      width: "10%",
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
  const [formValues, setFormValues] = useState<any>([]);

  const handleAdd = () => {
    const newData: DataType = {
      key: count,
      totalPost: 0,
      couponCode: "code",
      discAmount: 0,
      validDays: 0,
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
    setFormValues(newData);

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
    <Form
      onFinish={(values: any) => console.log(formValues)}
      className="overflow-hidden"
    >
      <div className="flex justify-between items-center">
        <Typography>Category Wise Sort Item Price</Typography>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </div>
      <div className="">
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
    </Form>
  );
};

export default CouponTable;
