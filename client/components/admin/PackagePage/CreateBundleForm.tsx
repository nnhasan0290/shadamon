import { InputLabel, MenuItem, TextField } from "@mui/material";
import {
  Button,
  Divider,
  Form,
  Input,
  Select,
  Typography,
} from "antd";
import { BiPlus } from "react-icons/bi";
import EachPackageTable from "./EachPackageTable";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { getParentCategories } from "../../../redux/actions/Admin/categoryAction";
import { addVatAction, createPackageAction } from "../../../redux/actions/Admin/packageAction";

export default function ({ record }: any) {
  console.log(record);
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const { adminCat } = useAppSelector((state) => state);

  //get packages
  const [postPackage, setPostPackage] = useState([]);
  const [bidPackage, setBidPackage] = useState([]);
  const [sortPackage, setSortPackage] = useState([]);
  const [couponDetails, setCouponDetails] = useState([]);

  //muit select change

  useEffect(() => {
    dispatch(getParentCategories());
  }, []);

  return (
    <div className="max-w-[900px]">
      <div className="flex gap-2 items-center font-bold">
        <span className="p-1 text-white bg-gray-700 rounded-full">
          <BiPlus />
        </span>
        <h4>Create Bundle Package</h4>
      </div>
      <Divider className="my-2" />

      {/* inputs =============== */}
      <Form
      className=""
        form={form}
        onFinish={(values) => {
          values.bundle.post = postPackage;
          values.bundle.bidnOffer = bidPackage;
          values.bundle.stickersSort = sortPackage;
          console.log(values);
          dispatch(createPackageAction(values));
        }}
        initialValues={record}
      >
        <div className="flex gap-1 justify-between">
          <Form.Item
            hidden
            name={"packageType"}
            initialValue={"bundle"}
          ></Form.Item>
          <Form.Item name={"name"}>
            <TextField id="outlined-basic" label="Name" variant="outlined" />
          </Form.Item>
          <Form.Item name={["bundle", "oldPrice"]}>
            <TextField
              type={"number"}
              id="outlined-basic"
              label="Old Price"
              variant="outlined"
            />
          </Form.Item>
          <Form.Item name={["bundle", "price"]}>
            <TextField
              type="number"
              id="outlined-basic"
              label="New Price"
              variant="outlined"
            />
          </Form.Item>
          <Form.Item name={["bundle", "validDays"]}>
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
                name={["bundle", "postAccess", i, "parentId"]}
              >
                <input />
              </Form.Item>
              <Form.Item
                name={["bundle", "postAccess", i, "noOfPost"]}
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
          <EachPackageTable
            initialValue={record ? record?.bundle?.post : [{}]}
            setState={setPostPackage}
            title={"Category Wise Every Post reach and click and how many"}
            category={true} reach={true} click={true}
          />
          <EachPackageTable
           initialValue={record ? record?.bundle?.stickersSort : [{}]}
          setState={setSortPackage}
            title={"Category Wise Sort Item Access"}
            category={true} coupons={true}
          />
        </div>
        <Typography>Checked Feature Write-up</Typography>
        <div className="flex">
          <Form.Item name={["bundle", "packageFeature", 0]}>
            <Input placeholder="checked 1" />
          </Form.Item>
          <Form.Item name={["bundle", "packageFeature", 1]}>
            <Input placeholder="checked 2" />
          </Form.Item>
          <Form.Item name={["bundle", "packageFeature", 2]}>
            <Input placeholder="checked 3" />
          </Form.Item>
          <Form.Item name={["bundle", "packageFeature", 3]}>
            <Input placeholder="checked 4" />
          </Form.Item>
          <Form.Item name={["bundle", "packageFeature", 4]}>
            <Input placeholder="checked 5" />
          </Form.Item>
        </div>
        <Typography>Un Checked Feature Write-up</Typography>
        <div className="flex">
          <Form.Item name={["bundle", "uncheckFeature", 0]}>
            <Input placeholder="checked 1" />
          </Form.Item>
          <Form.Item name={["bundle", "uncheckFeature", 1]}>
            <Input placeholder="checked 2" />
          </Form.Item>
          <Form.Item name={["bundle", "uncheckFeature", 2]}>
            <Input placeholder="checked 3" />
          </Form.Item>
          <Form.Item name={["bundle", "uncheckFeature", 3]}>
            <Input placeholder="checked 4" />
          </Form.Item>
          <Form.Item name={["bundle", "uncheckFeature", 4]}>
            <Input placeholder="checked 5" />
          </Form.Item>
        </div>
        <div className="flex gap-1">
          {/* <Form.Item>
            <TextField
              className="w-[180px]"
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
          </Form.Item> */}
          <Form.Item name={["bundle", "bestSuggestion"]}>
            <TextField
              id="outlined-basic"
              label="Best Suggestion"
              variant="outlined"
            />
          </Form.Item>
          <Form.Item name={["bundle", "note"]}>
            <TextField id="outlined-basic" label="Note" variant="outlined" />
          </Form.Item>
          {/* <Form.Item name={""}>
            <TextField id="outlined-basic" label="Order" variant="outlined" />
          </Form.Item> */}
          <Form.Item name={"packageStatus"}>
            <TextField
              className="w-[100px]"
              select // tell TextField to render select
              label="Status"
            >
              <MenuItem key={1} value={"active"}>
                Active
              </MenuItem>
              <MenuItem key={2} value={"inactive"}>
                Inactive
              </MenuItem>
            </TextField>
          </Form.Item>
        </div>
        <Form.Item className="">
          <Button htmlType="submit" className="w-full text-white bg-green-700">
            Save
          </Button>
        </Form.Item>
      </Form>
      {/* <div className="overflow-hidden pl-3 basis-1/2">
        <EachPackageTable initialValue={[{}]} single={true} price={true} reach={true} click={true} minA={true} category={true} title="Single Package" />
        <EachPackageTable initialValue={[{}]} single={true} price={true} reach={true} click={true} sName={true} category={true} title="Category Wise Sort Item Price" />
        <EachPackageTable initialValue={[{}]} single={true}  setState={setCouponDetails}  couponCreate={true} title={"Create Coupon"}/>
        <Divider />
        <div>
          <Typography>Vat</Typography>
          <Form className="flex gap-2" onFinish={(values:any) => {
              values.addVat = parseInt(values.addVat);
            dispatch(addVatAction(values))
          }}>
            <Form.Item name={"addVat"}>
            <TextField
            size="small"
              type={"number"}
              id="outlined-basic"
              label="Vat Percentage"
              variant="outlined"
            />
            </Form.Item>
            <Form.Item name={"status"}>
              <TextField
                size="small"
                className="w-[100px]"
                select // tell TextField to render select
                label="Status"
              >
                <MenuItem key={1} value={"active"}>
                  Active
                </MenuItem>
                <MenuItem key={2} value={"inActive"}>
                  Inactive
                </MenuItem>
              </TextField>
            </Form.Item>
            
            <Form.Item className="flex justify-center items-center self-stretch rounded-md">
              <Button
                htmlType="submit"
                size="large"
                type="primary"
                className=""
              >
                Save
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div> */}
    </div>
  );
}
