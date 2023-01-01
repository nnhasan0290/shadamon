import { Divider, Form, Input, Select, Table, Typography } from "antd";
import { BiPlus } from "react-icons/bi";
import EachPackageTable from "./EachPackageTable";
const { Option } = Select;

export default function ({ record }: any) {
  const [form] = Form.useForm();
  return (
    <Form form={form} className="flex flex-wrap justify-between basis-full">
      <div className="flex gap-2 items-center font-bold">
        <span className="p-1 text-white bg-gray-700 rounded-full">
          <BiPlus />
        </span>
        <h4>Create Bundle Package</h4>
      </div>
      <Divider className="my-2" />

      {/* inputs =============== */}
      <div className="flex w-full">
        <div className="  basis-1/2 ">
          <div className=" gap-1 justify-between flex">
            <Form.Item name={"name"}>
              <Input placeholder="Name" />
            </Form.Item>
            <Form.Item name={"oldPrice"}>
              <Input placeholder="Old Price" />
            </Form.Item>
            <Form.Item name={"newPrice"}>
              <Input placeholder="New Price" />
            </Form.Item>
            <Form.Item name={"valid"}>
              <Input placeholder="Valid" />
            </Form.Item>
            <Form.Item name={"postAccess"}>
              <Input placeholder="Post Access" />
            </Form.Item>
          </div>
          <div>
            <EachPackageTable/>
            <EachPackageTable/>
            <EachPackageTable/>
          </div>
        </div>
        <div className="basis-1/2"></div>
      </div>
    </Form>
  );
}
