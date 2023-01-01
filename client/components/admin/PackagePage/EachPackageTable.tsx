import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Select,
  Table,
  Typography,
} from "antd";
import { BiPlus } from "react-icons/bi";

interface Item {
  key: string;
  name: string;
  age: number;
  address: string;
}

const originData: any = [];
// for (let i = 0; i < 1; i++) {
//   originData.push({
//     key: i.toString(),
//     name: `Edrward ${i}`,
//     age: 32,
//     address: `London Park no. ${i}`,
//     deleteAble: true,
//   });
// }

const EachPackageTable: React.FC = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [itemCount, setItemCount] = useState(1);
  const [editingKey, setEditingKey] = useState("");
  console.log(data);

  const isEditing = (record: Item) => record.key === editingKey;

  const edit = (record: Partial<Item> & { key: React.Key }) => {
    form.setFieldsValue({ name: "", age: "", address: "", ...record });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key: React.Key) => {
    try {
      const row = (await form.validateFields()) as Item;
      console.log(row);

      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push({...row, key:itemCount.toString()});
        setItemCount(itemCount + 1);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const columns = [
    {
      key: itemCount,
      dataIndex: "key",
      render: (key:any, record:any) => {
        console.log("key", key);
        return !key ?(
        <>
          {itemCount}
        </>
      ): (
        <span>{record.key}</span>
      )
    },
    },
    {
      title: "Categories",
      dataIndex: "categories",
      width: "25%",
      render: (arr: any) => {
        return !arr?.length ? (
          <Form.Item key={itemCount} name={"categories"}>
            <Select mode="tags">
              <Select.Option value="one">One</Select.Option>
              <Select.Option value="two">Two</Select.Option>
            </Select>
          </Form.Item>
        ): (
          <>
          {
            arr.map((each:any) => (
              <span>{each}</span>
            ))
          }
          </>
        );
      },
    },
    {
      title: "Reach",
      dataIndex: "reach",
      width: "15%",
      render: (num: any) => {
        return !num ? (
          <Form.Item key={itemCount} name={"reach"} initialValue={num && num}>
            <InputNumber defaultValue={num} />
          </Form.Item>
        ): (
          <p>{num}</p>
        )
      },
    },
    {
      title: "Click",
      dataIndex: "click",
      width: "30%",
      render: (num: any, record: any) => {
        return num ? (
          <p>{num}</p>
        ) : (
          <Form.Item key={itemCount} name={"click"} >
            <InputNumber  />
          </Form.Item>
        );
      },
    },
    {
      key: itemCount,
      title: "Edit/Save",
      width: '50%',
      render: (_: any, record: Item) => {
        return (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{ marginRight: 2 }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        );
      },
    },
  ];

  return (
    <Form form={form} component={false}>
      <Table
        bordered
        dataSource={[...data, { key: itemCount }]}
        columns={columns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

export default EachPackageTable;
