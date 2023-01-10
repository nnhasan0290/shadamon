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
  category,
  reach,
  click,
  coupons,
  price,
  minA,
  sName,
  couponCreate,
  setState,
  single,
  initialValue,
}: any) {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState<any>(initialValue);
  const [messageApi, contextHolder] = message.useMessage();
  console.log(dataSource, "datasource");
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

      if (!single && values) {
        messageApi.success("saved");
      }
      form.submit();
    } catch (error) {
      messageApi.error("Not Saved");
    }
  };
  return (
    <div className="">
      <Divider>{title}</Divider>
      <Form
        onFinish={(values) => {
          let val = [];
          for (let key in values) {
            val.push(values[key]);
          }
          if (!single) {
            setState(val);
          } else {
            if (couponCreate) {
              console.log(val[0]);
              dispatch(createCouponAction(val[0]));
            } else {
              const values = {
                single: val[0],
                name: "single",
                packageType: "single",
                packageStatus: "active",
              };
              console.log(values);
              dispatch(createPackageAction(values));
            }
          }
        }}
        form={form}
      >
        {contextHolder}
        <Table size="small" pagination={false} dataSource={dataSource} bordered>
          {category && (
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
          )}
          {sName && (
            <Table.Column
              title="sortName"
              dataIndex="sortName"
              render={(_: any, record: any, index) => (
                <Form.Item
                  name={[index, "sortId"]}
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
                    placeholder="sort Items"
                    getPopupContainer={(trigger) => trigger.parentNode}
                    showArrow={true}
                  >
                    {allSorts?.res?.data?.map((sort: any) => (
                      <Select.Option value={sort._id}>
                        {" "}
                        {sort.sortName}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              )}
            />
          )}
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
          {price && (
            <Table.Column
              title="Price"
              dataIndex={"price"}
              render={(_: any, record: any, index) => (
                <Form.Item
                  name={[index, "price"]}
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
          {minA && (
            <Table.Column
              title="MinA"
              dataIndex={"minAmount"}
              render={(_: any, record: any, index) => (
                <Form.Item
                  name={[index, "minAmount"]}
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
          {/* {coupons &&
            initialValue &&
            dataSource.sorts.map((coupon: any) => (
              <Table.Column
                title={coupon.sortName}
                dataIndex={"sorts"}
                render={(copn: any, record: any, index) => {
                  console.log(copn);
                  return (
                    <>
                      <Form.Item
                        hidden
                        name={[index, "sorts", "sortId"]}
                        key={coupon._id}
                        initialValue={coupon._id}
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item
                        name={[index, "sorts", "access"]}
                        rules={[
                          {
                            required: true,
                            message: `required.`,
                          },
                        ]}
                        initialValue={copn.access}
                      >
                        <InputNumber />
                      </Form.Item>
                    </>
                  );
                }}
              />
            ))} */}
          {coupons &&
            allSorts?.res?.data?.map((coupon: any) => (
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
            ))}
          {couponCreate && (
            <>
              <Table.Column
                title="Total Post"
                dataIndex={"totalPost"}
                render={(_: any, record: any, index) => (
                  <Form.Item
                    name={[index, "totalPost"]}
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
              <Table.Column
                title="InTime"
                dataIndex={"inTime"}
                render={(_: any, record: any, index) => (
                  <Form.Item
                    name={[index, "inTime"]}
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
              <Table.Column
                title="Code"
                dataIndex={"couponCode"}
                render={(_: any, record: any, index) => (
                  <Form.Item
                    name={[index, "couponCode"]}
                    rules={[
                      {
                        required: true,
                        message: `required.`,
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                )}
              />
              <Table.Column
                title="Dis Amount"
                dataIndex={"discAmount"}
                render={(_: any, record: any, index) => (
                  <Form.Item
                    name={[index, "discAmount"]}
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
              <Table.Column
                title="validDays"
                dataIndex={"validDays"}
                render={(_: any, record: any, index) => (
                  <Form.Item
                    name={[index, "validDays"]}
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
              <Table.Column
                title="status"
                dataIndex={"status"}
                render={(_: any, record: any, index) => (
                  <Form.Item
                    name={[index, "status"]}
                    rules={[
                      {
                        required: true,
                        message: `required.`,
                      },
                    ]}
                    initialValue={true}
                  >
                    <Switch
                      className="bg-gray-400"
                      defaultChecked
                      checkedChildren={<CheckOutlined />}
                      unCheckedChildren={<CloseOutlined />}
                    />
                  </Form.Item>
                )}
              />
            </>
          )}
          {!single && (
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
          )}
          {single && (
            <Table.Column
              title={"Save"}
              render={() => (
                <Button className="mb-[24px]" type="primary" onClick={save}>
                  Save
                </Button>
              )}
            />
          )}
        </Table>
        {!single && (
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
        )}
      </Form>
    </div>
  );
}
