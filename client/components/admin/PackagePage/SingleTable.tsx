import {
  Button,
  Form,
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

export default function () {
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

  const save = async () => {
    const val = await form.validateFields();
    console.log(val);
    form.submit();
  };

  return (
    <div>
      <Form
        initialValues={dataSource}
        onFinish={(values: any) => {
          console.log(values);
        }}
        form={form}
      >
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
                  name={["subcategories"]}
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
            colSpan={2}
            title="Reach"
            dataIndex={"reach"}
            render={(num: any) => (
              <Form.Item name={"reach"} initialValue={num}>
                <InputNumber defaultValue={num} placeholder="In" />
              </Form.Item>
            )}
          />
          <Table.Column
            colSpan={0}
            render={() => (
              <Form.Item>
                {" "}
                <InputNumber placeholder="out" />{" "}
              </Form.Item>
            )}
          />

          <Table.Column
            colSpan={2}
            title="click"
            dataIndex={"click"}
            render={() => (
              <Form.Item name={"click"}>
                <InputNumber placeholder="In" />
              </Form.Item>
            )}
          />
          <Table.Column
            colSpan={0}
            render={() => (
              <Form.Item>
                {" "}
                <InputNumber placeholder="out" />{" "}
              </Form.Item>
            )}
          />
          <Table.Column
            colSpan={2}
            title={"Price"}
            render={() => (
              <Form.Item name={"price"}>
                {" "}
                <InputNumber placeholder="in" />{" "}
              </Form.Item>
            )}
          />
          <Table.Column
            colSpan={0}
            render={() => (
              <Form.Item name={"name"}>
                {" "}
                <InputNumber placeholder="out" />{" "}
              </Form.Item>
            )}
          />
          <Table.Column
            colSpan={2}
            title={"Min Amount"}
            render={() => (
              <Form.Item name={"minAmount"}>
                {" "}
                <InputNumber placeholder="in" />{" "}
              </Form.Item>
            )}
          />
          <Table.Column
            colSpan={0}
            render={() => (
              <Form.Item>
                {" "}
                <InputNumber placeholder="out" />{" "}
              </Form.Item>
            )}
          />
          <Table.Column
            title={"Save"}
            render={() => (
              <Button className="mb-[24px]" type="primary" onClick={save}>
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
