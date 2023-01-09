import {
  Button,
  Divider,
  Form,
  Input,
  InputNumber,
  message,
  Popconfirm,
  Select,
  Table,
} from "antd";
import { useEffect, useState } from "react";
import { BiTrash } from "react-icons/bi";
import {
  getAllSortsAction,
  getAllSubCatAction,
} from "../../../redux/actions/Admin/packageAction";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";

export default function ({ title, category, reach, click, coupons }: any) {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState<any>([{}]);
  const [messageApi, contextHolder] = message.useMessage();
  const {
    getAllSubCat: {
      res: { data },
    },
    allSorts,
  } = useAppSelector((state) => state);

  //useEffects -------------------------------------
  useEffect(() => {
    dispatch(getAllSubCatAction());
    dispatch(getAllSortsAction());
  }, []);

  //methods -------------------------------------------
  const save = async () => {
    try {
      const values = await form.validateFields();
      if (values) {
        messageApi.success("saved");
      }
      form.submit();
    } catch (error) {
      messageApi.error("Not Saved");
    }
  };
  return (
    <>
      <Divider>{title}</Divider>
      <Form
        onFinish={(values) => {
          let val = [];
          for (let key in values) {
            val.push(values[key]);
          }
          console.log(val);
        }}
        form={form}
      >
        {contextHolder}
        <Table size="small" pagination={false} dataSource={dataSource}>
          {category && (
            <Table.Column
              title="Categories"
              dataIndex={"subcategories"}
              render={(_: any, record: any, index) => (
                <>
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
                </>
              )}
            />
          )}
          {reach && (
            <Table.Column
              title="Reach"
              dataIndex="reach"
              render={(_: any, record: any, index) => (
                <Form.Item
                  name={[index, "reach"]}
                  rules={[
                    {
                      required: true,
                      message: `required.`,
                    },
                  ]}
                >
                  <InputNumber />
                </Form.Item>
              )}
            />
          )}
          {click && (
            <Table.Column
              title="Click"
              dataIndex={"click"}
              render={(_: any, record: any, index) => (
                <Form.Item
                  name={[index, "click"]}
                  rules={[
                    {
                      required: true,
                      message: `required.`,
                    },
                  ]}
                >
                  <InputNumber />
                </Form.Item>
              )}
            />
          )}
          {
            coupons && allSorts?.res?.data?.map((coupon:any) => (
              <Table.Column
              title={coupon.sortName}
              dataIndex={coupon.sortName}
              render={(_: any, record: any, index) => (
                <>
                <Form.Item hidden name={[index, "sorts", "sortId"]} key={coupon._id} initialValue={coupon._id}>
                  <Input/>
                </Form.Item>
                <Form.Item
                  name={[index, "sorts", "access"]}
                  rules={[
                    {
                      required: true,
                      message: `required.`,
                    },
                  ]}
                >
                  <InputNumber />
                </Form.Item>
                </>
              )}
            />
            ))
          }
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
                  setDataSource(prev);
                }}
              >
                <Button danger className="mb-[24px]">
                  <BiTrash />
                </Button>
              </Popconfirm>
            )}
          />
        </Table>
        <div className="flex gap-1 justify-end py-1">
          <Button onClick={save}>Save</Button>
          <Button
            onClick={() => {
              setDataSource([...dataSource, {}]);
            }}
            className=""
            type="primary"
          >
            Add
          </Button>
        </div>
      </Form>
    </>
  );
}
