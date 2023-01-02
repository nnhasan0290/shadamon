import { InputLabel, MenuItem, TextField } from "@mui/material";
import {
  Button,
  Divider,
  Form,
  Input,
  InputNumber,
  Select,
  Switch,
  Table,
  Typography,
} from "antd";
import { Select as MuiSelect } from "@mui/material";
import { BiPlus } from "react-icons/bi";
import EachPackageTable from "./EachPackageTable";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { getParentCategories } from "../../../redux/actions/Admin/categoryAction";
const { Option } = Select;

export default function ({ record }: any) {
  const [form] = Form.useForm();
  const [average, setAverage] = useState("");
  const dispatch = useAppDispatch();
  const { adminCat } = useAppSelector((state) => state);

  //get packages
  const [postPackage, setPostPackage] = useState([]);
  const [bidPackage, setBidPackage] = useState([]);
  const [sortPackage, setSortPackage] = useState([]);

  //muit select change

  useEffect(() => {
    dispatch(getParentCategories());
  }, []);

  return (
    <Form
      onFinish={(values) => {
        console.log(postPackage);
        console.log(values);
      }}
      form={form}
      className="flex flex-wrap justify-between basis-full"
    >
      <div className="flex gap-2 items-center font-bold">
        <span className="p-1 text-white bg-gray-700 rounded-full">
          <BiPlus />
        </span>
        <h4>Create Bundle Package</h4>
      </div>
      <Divider className="my-2" />

      {/* inputs =============== */}
      <div className="pr-3 border-r basis-1/2">
        <div className="flex gap-1 justify-between">
          <Form.Item name={"name"}>
            <TextField id="outlined-basic" label="Name" variant="outlined" />
          </Form.Item>
          <Form.Item name={"oldPrice"}>
            <TextField
              type={"number"}
              id="outlined-basic"
              label="Old Price"
              variant="outlined"
            />
          </Form.Item>
          <Form.Item name={"price"}>
            <TextField
              type="number"
              id="outlined-basic"
              label="New Price"
              variant="outlined"
            />
          </Form.Item>
          <Form.Item name={"validDays"}>
            <TextField
              type={"number"}
              id="outlined-basic"
              label="Valid"
              variant="outlined"
            />
          </Form.Item>
        </div>
        <div className="flex">
          {adminCat?.res?.data?.map((parent: any, i: any) => (
            <>
              <Form.Item
                initialValue={parent?._id}
                hidden
                name={["postAccess", i, "parentId"]}
              >
                <input />
              </Form.Item>
              <Form.Item
                name={["postAccess", i, "noOfPost"]}
                className="w-[70px]"
              >
                <TextField
                  type="number"
                  size="small"
                  id="outlined-basic"
                  label={parent?.name}
                  variant="outlined"
                />
              </Form.Item>
            </>
          ))}
        </div>
        <div>
          <EachPackageTable setState={setPostPackage} />
          <EachPackageTable setState={setBidPackage} />
          <EachPackageTable setState={setSortPackage} />
        </div>
        <Typography>Checked Feature Write-up</Typography>
        <div className="flex">
          <Form.Item name={["packageFeature", 0]}>
            <Input placeholder="checked 1" />
          </Form.Item>
          <Form.Item name={["packageFeature", 1]}>
            <Input placeholder="checked 2" />
          </Form.Item>
          <Form.Item name={["packageFeature", 2]}>
            <Input placeholder="checked 3" />
          </Form.Item>
          <Form.Item name={["packageFeature", 3]}>
            <Input placeholder="checked 4" />
          </Form.Item>
          <Form.Item name={["packageFeature", 4]}>
            <Input placeholder="checked 5" />
          </Form.Item>
        </div>
        <Typography>Un Checked Feature Write-up</Typography>
        <div className="flex">
          <Form.Item name={["uncheckFeature", 0]}>
            <Input placeholder="checked 1" />
          </Form.Item>
          <Form.Item name={["uncheckFeature", 1]}>
            <Input placeholder="checked 2" />
          </Form.Item>
          <Form.Item name={["uncheckFeature", 2]}>
            <Input placeholder="checked 3" />
          </Form.Item>
          <Form.Item name={["uncheckFeature", 3]}>
            <Input placeholder="checked 4" />
          </Form.Item>
          <Form.Item name={["uncheckFeature", 4]}>
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
            <TextField id="outlined-basic" label="Note" variant="outlined" />
          </Form.Item>
          <Form.Item name={""}>
            <TextField id="outlined-basic" label="Order" variant="outlined" />
          </Form.Item>
          <Form.Item>
            <TextField
              className="w-[100px]"
              select // tell TextField to render select
              label="Status"
            >
              <MenuItem key={1} value={"true"}>
                Active
              </MenuItem>
              <MenuItem key={2} value={"false"}>
                Inactive
              </MenuItem>
            </TextField>
          </Form.Item>
        </div>
        <Form.Item className="">
          <Button
            htmlType="submit"
            className="w-full text-white bg-green-700"
          >
            Save
          </Button>
        </Form.Item>
      </div>
      <div className="pl-3 basis-1/2">
        <EachPackageTable />
        <Divider />
        <div>
          <div className="flex gap-3 items-center">
            <Typography>Bonus Amount Setting</Typography>
            <Switch className="bg-gray-500" />
          </div>
          <EachPackageTable />
            <Typography>Vat</Typography>
          <Form className="flex gap-2">
            <Form.Item>
              <TextField
              size="small"
                id="outlined-basic"
                label="Added How many percent %"
                variant="outlined"
              />
            </Form.Item>
            <Form.Item>
              <TextField
              size="small"
                className="w-[100px]"
                select // tell TextField to render select
                label="Status"
              >
                <MenuItem key={1} value={"true"}>
                  Active
                </MenuItem>
                <MenuItem key={2} value={"false"}>
                  Inactive
                </MenuItem>
              </TextField>
            </Form.Item>
            <Form.Item className="flex justify-center items-center self-stretch rounded-md">
              <Button htmlType="submit" size="large" type="primary" className="">Save</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Form>
  );
}
