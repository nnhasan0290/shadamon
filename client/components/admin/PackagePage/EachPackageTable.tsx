import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import {
  Button,
  Divider,
  Form,
  Input,
  InputNumber,
  message,
  Popconfirm,
  Select,
  Switch,
  Table,
} from "antd";
import { useEffect, useState } from "react";
import { BiTrash } from "react-icons/bi";
import {
  createCouponAction,
  createPackageAction,
  getAllSortsAction,
  getAllSubCatAction,
} from "../../../redux/actions/Admin/packageAction";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";

export default function ({
  title,
  reach,
  click,
  coupons,
  setState,
  initialValue,
}: any) {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState<any>(initialValue);
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
    const values = await form.validateFields();

    form.submit();
  };
  return (
    <div className="">
      <Divider>{title}</Divider>
      <Form
        onBlur={save}
        onFinish={(values) => {
          let val = [];
          for (let key in values) {
            val.push(values[key]);
          }
          setState(val);
        }}
        form={form}
      >
        {contextHolder}
        <Table size="small" pagination={false} dataSource={dataSource} bordered>
          <Table.Column
            title="Categories"
            dataIndex={"subcategories"}
            render={(selected: any, record: any, index) => {
              return (
                <>
                  <Form.Item
                    name={[index, "subcategories"]}
                    rules={[
                      {
                        required: true,
                        message: `required.`,
                      },
                    ]}
                    initialValue={selected}
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
              );
            }}
          />
          {reach && (
            <Table.Column
              title="Reach"
              dataIndex="reach"
              render={(num: any, record: any, index) => (
                <Form.Item
                  name={[index, "reach"]}
                  rules={[
                    {
                      required: true,
                      message: `required.`,
                    },
                  ]}
                  initialValue={num}
                >
                  <InputNumber defaultValue={num} />
                </Form.Item>
              )}
            />
          )}
          {click && (
            <Table.Column
              title="Click"
              dataIndex={"click"}
              render={(click: any, record: any, index) => (
                <Form.Item
                  name={[index, "click"]}
                  rules={[
                    {
                      required: true,
                      message: `required.`,
                    },
                  ]}
                  initialValue={click}
                >
                  <InputNumber />
                </Form.Item>
              )}
            />
          )}
          {coupons &&
            allSorts?.res?.data?.map((coupon: any, idx: any) => (
              <Table.Column
                title={coupon.sortName}
                dataIndex={"sorts"}
                render={(copn: any, record: any, index) => (
                  <>
                    <Form.Item
                      hidden
                      name={[index, "sorts", "sortId"]}
                      key={coupon._id}
                      initialValue={coupon._id}
                    >
                      <Input />
                    </Form.Item>
                    {copn?.length && (
                      <Form.Item
                        hidden
                        name={[index, "sorts", "_id"]}
                        initialValue={copn[idx]._id}
                      >
                        <Input />
                      </Form.Item>
                    )}

                    <Form.Item
                      name={[index, "sorts", "access"]}
                      rules={[
                        {
                          required: true,
                          message: `required.`,
                        },
                      ]}
                      initialValue={copn?.length && copn[idx]?.access}
                    >
                      <InputNumber />
                    </Form.Item>
                  </>
                )}
              />
            ))}

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
    </div>
  );
}
