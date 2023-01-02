import { InputLabel, MenuItem, TextField } from "@mui/material";
import {
  Button,
  Divider,
  Form,
  Input,
  InputNumber,
  Select,
  Table,
  Typography,
} from "antd";
import { Select as MuiSelect } from "@mui/material";
import { BiPlus } from "react-icons/bi";
import EachPackageTable from "./EachPackageTable";
import { useState } from "react";
const { Option } = Select;

export default function ({ record }: any) {
  const [form] = Form.useForm();
  const [average, setAverage] = useState("");

  //muit select change
  const muiAverageChange = (event: any) => {
    setAverage(event.target.value as string);
  };

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
              <TextField
                size="small"
                id="outlined-basic"
                label="Sell"
                variant="outlined"
              />
            </Form.Item>
            <Form.Item name={"post"} className="w-[50px]">
              <TextField
                size="small"
                id="outlined-basic"
                label="bid"
                variant="outlined"
              />
            </Form.Item>
            <Form.Item name={"post"} className="w-[50px]">
              <TextField
                size="small"
                id="outlined-basic"
                label="Post"
                variant="outlined"
              />
            </Form.Item>
            <Form.Item name={"post"} className="w-[50px]">
              <TextField
                size="small"
                id="outlined-basic"
                label="Post"
                variant="outlined"
              />
            </Form.Item>
            <Form.Item name={"post"} className="w-[50px]">
              <TextField
                size="small"
                id="outlined-basic"
                label="Post"
                variant="outlined"
              />
            </Form.Item>
          </div>
          <div>
            <EachPackageTable />
            <EachPackageTable />
            <EachPackageTable />
          </div>
          <Typography>Checked Feature Write-up</Typography>
          <div className="flex">
            <Form.Item>
              <Input placeholder="checked 1" />
            </Form.Item>
            <Form.Item>
              <Input placeholder="checked 2" />
            </Form.Item>
            <Form.Item>
              <Input placeholder="checked 3" />
            </Form.Item>
            <Form.Item>
              <Input placeholder="checked 4" />
            </Form.Item>
            <Form.Item>
              <Input placeholder="checked 5" />
            </Form.Item>
          </div>
          <Typography>Un Checked Feature Write-up</Typography>
          <div className="flex">
            <Form.Item>
              <Input placeholder="checked 1" />
            </Form.Item>
            <Form.Item>
              <Input placeholder="checked 2" />
            </Form.Item>
            <Form.Item>
              <Input placeholder="checked 3" />
            </Form.Item>
            <Form.Item>
              <Input placeholder="checked 4" />
            </Form.Item>
            <Form.Item>
              <Input placeholder="checked 5" />
            </Form.Item>
          </div>
          <div className="flex gap-1">
            <Form.Item>
              <TextField
                value={average}
                className="w-[180px]"
                onChange={(e) => setAverage(e.target.value)}
                select // tell TextField to render select
                label="Average/Cata wise"
              >
                <MenuItem key={1} value="test">
                  Test 1
                </MenuItem>
                <MenuItem key={2} value="test2">
                  Test 2
                </MenuItem>
              </TextField>
            </Form.Item>
            <Form.Item name={""}>
              <TextField
                id="outlined-basic"
                label="Best Suggestion"
                variant="outlined"
              />
            </Form.Item>
            <Form.Item name={""}>
              <TextField
                id="outlined-basic"
                label="Note"
                variant="outlined"
              />
            </Form.Item>
            <Form.Item name={""}>
              <TextField
                id="outlined-basic"
                label="Order"
                variant="outlined"
              />
            </Form.Item>
            <Form.Item>
              <TextField
                className="w-[100px]"
                select // tell TextField to render select
                label="Status"
              >
                <MenuItem key={1} value="test">
                  Test 1
                </MenuItem>
                <MenuItem key={2} value="test2">
                  Test 2
                </MenuItem>
              </TextField>
            </Form.Item>
          </div>
          <Form.Item className="">
            <Button htmlType="submit" className="w-full  bg-green-700  text-white">Save</Button>
          </Form.Item>
        </div>
        <div className="basis-1/2"></div>
      </div>
    </Form>
  );
}
