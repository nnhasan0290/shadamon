import { TextField } from "@mui/material";
import {
  Divider,
  Form,
  Input,
  InputNumber,
  Select,
  Table,
  Typography,
} from "antd";
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
              <TextField id="outlined-basic" label="Name" variant="outlined" />
            </Form.Item>
            <Form.Item name={"oldPrice"}>
              <TextField
                id="outlined-basic"
                label="Old Price"
                variant="outlined"
              />
            </Form.Item>
            <Form.Item name={"newPrice"}>
              <TextField
                id="outlined-basic"
                label="New Price"
                variant="outlined"
              />
            </Form.Item>
            <Form.Item name={"valid"}>
              <TextField id="outlined-basic" label="Valid" variant="outlined" />
            </Form.Item>
          </div>
          <div className="flex">
            <Form.Item name={"post"} className="w-[50px]">
              <TextField size="small" id="outlined-basic" label="Sell" variant="outlined"/>
            </Form.Item>
            <Form.Item name={"post"} className="w-[50px]">
              <TextField size="small" id="outlined-basic" label="bid" variant="outlined"/>
            </Form.Item>
            <Form.Item name={"post"} className="w-[50px]">
              <TextField size="small" id="outlined-basic" label="Post" variant="outlined"/>
            </Form.Item>
            <Form.Item name={"post"} className="w-[50px]">
              <TextField size="small" id="outlined-basic" label="Post" variant="outlined"/>
            </Form.Item>
            <Form.Item name={"post"} className="w-[50px]">
              <TextField size="small" id="outlined-basic" label="Post" variant="outlined"/>
            </Form.Item>
          </div>
          <div>
            <EachPackageTable />
            <EachPackageTable />
            <EachPackageTable />
          </div>
        </div>
        <div className="basis-1/2"></div>
      </div>
    </Form>
  );
}
