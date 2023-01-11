import {
  Button,
  Form,
  Input,
  InputNumber,
  message,
  Popconfirm,
  Select,
  Table,
} from "antd";
import { useEffect, useState } from "react";
import { BiPlus, BiTrash } from "react-icons/bi";
import {
  getAllSortsAction,
  getAllSubCatAction,
} from "../../../redux/actions/Admin/packageAction";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";

export default function ({ initialVal }: any) {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState<any>([{ reach: 5 }]);
  const [messageApi, contextHolder] = message.useMessage();

  //redux ------------------------------------
  const {
    getAllSubCat: {
      res: { data },
    },
    allSorts,
  } = useAppSelector((state) => state);

  //useEffects -------------------------------------
  useEffect(() => {
    dispatch(getAllSubCatAction());
    setDataSource([{ reach: 5, click: 3 }]);
  }, []);

  const save = async (record: any, index: any) => {
    const val = await form.validateFields();
    console.log(index, val);
    form.submit();
  };

  return (
    <div>
      <Form initialValues={dataSource} form={form}>
        <Table
          title={() => (
            <Button
              type={"primary"}
              className="flex gap-2 items-center"
              onClick={() => setDataSource([...dataSource, {}])}
            >
              <BiPlus /> Add New
            </Button>
          )}
          bordered
          dataSource={dataSource}
        >
          <Table.Column
            title="Categories"
            dataIndex={"subcategories"}
            render={(selected: any, record: any, index) => {
              return (
                <Form.Item
                  name={[index, "subcategories"]}
                  rules={[
                    {
                      required: true,
                      message: `required.`,
                    },
                  ]}
                >
                  <Select
                    showSearch={false}
                    mode="tags"
                    placeholder="categories"
                    getPopupContainer={(trigger) => trigger.parentNode}
                    showArrow={true}
                  >
                    {data?.map((cat: any) => (
                      <Select.Option value={cat._id}>
                        {" "}
                        {cat.subCategoryName}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              );
            }}
          />
          <Table.Column
            title="sorts"
            dataIndex={"sorts"}
            render={(num: any, record: any, index) => (
              <Form.Item name={[index, "sorts"]}>
                <Input />
              </Form.Item>
            )}
          />
          <Table.Column
            title="Reach"
            dataIndex={"reach"}
            render={(num: any, record: any, index) => (
              <Form.Item name={[index, "reach"]}>
                <InputNumber />
              </Form.Item>
            )}
          />

          <Table.Column
            title="click"
            dataIndex={"click"}
            render={(num: any, record: any, index) => (
              <Form.Item name={[index, "click"]}>
                <InputNumber />
              </Form.Item>
            )}
          />
          <Table.Column
            title={"Price"}
            render={(num: any, record: any, index) => (
              <Form.Item name={[index, "price"]}>
                <InputNumber />
              </Form.Item>
            )}
          />
          <Table.Column
            title={"Save"}
            render={(_: any, record: any, index) => (
              <Button
                className="mb-[24px]"
                type="primary"
                onClick={() => save(record, index)}
              >
                Save
              </Button>
            )}
          />
          <Table.Column
            title="Action"
            render={(_: any, record: any, index) => (
              <Popconfirm
                title="Sure to delete?"
                onConfirm={() => {
                  const prev = [...dataSource];
                  const index = prev.findIndex(
                    (item) => item.key === record.key
                  );
                  prev.splice(index, 1);
                  //   setDataSource(prev);
                }}
              >
                <Button danger className="mb-[24px]">
                  <BiTrash />
                </Button>
              </Popconfirm>
            )}
          />
        </Table>
      </Form>
    </div>
  );
}
