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
  createPackageAction,
  deletePackageAction,
  editPackageAction,
  getAllSortsAction,
  getAllSubCatAction,
} from "../../../redux/actions/Admin/packageAction";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";

export default function ({ initialVal }: any) {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState<any>(initialVal);
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
    dispatch(getAllSortsAction());
  }, []);

  const save = async (record: any, index: any) => {
    const val = await form.validateFields();
    console.log(dataSource[index]);
    if (dataSource[index]._id) {
      const values = {
        _id: dataSource[index]._id,
        sort: val[index],
        name: "sort",
        packageType: "sort",
        packageStatus: "active",
      };
      console.log(values, "id")
       dispatch(editPackageAction(values));
    } else {
      const values = {
        sort: val[index],
        name: "sort",
        packageType: "sort",
        packageStatus: "active",
      };
      console.log(values, "not id")
       dispatch(createPackageAction(values));
    }
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
            dataIndex={"sort"}
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
                  initialValue={selected && selected?.subcategories}
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
            dataIndex={"sort"}
            render={(num: any, record: any, index) => (
              <Form.Item name={[index, "sortId"]} initialValue={num?.sortId}>
                 <Select
                    showSearch={false}
                    mode="tags"
                    placeholder="Sorts"
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
          {/* <Table.Column
            title="Reach"
            dataIndex={"sort"}
            render={(num: any, record: any, index) => (
              <Form.Item name={[index, "reach"]} initialValue={num?.reach}>
                <InputNumber />
              </Form.Item>
            )}
          />

          <Table.Column
            title="click"
            dataIndex={"sort"}
            render={(num: any, record: any, index) => (
              <Form.Item name={[index, "click"]} initialValue={num?.click}>
                <InputNumber />
              </Form.Item>
            )}
          /> */}
          <Table.Column
            title={"Per Day Price"}
            dataIndex={"sort"}
            render={(num: any, record: any, index) => (
              <Form.Item name={[index, "price"]} initialValue={num?.price}>
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
                    (item) => item._id === record._id
                  );
                  prev.splice(index, 1);
                  setDataSource(prev);
                  if (dataSource[index]._id) {
                    dispatch(deletePackageAction(record._id));
                  }
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
