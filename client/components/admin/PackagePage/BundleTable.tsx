import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import {
  addVatAction,
  deletePackageAction,
  editPackageAction,
  getAllPackageAction,
} from "../../../redux/actions/Admin/packageAction";
import ShowingTable from "./ShowingTable";
import { Button, Form, Tabs } from "antd";
import CreateBundleForm from "./CreateBundleForm";
import SingleTable from "./SingleTable";
import { MenuItem, TextField } from "@mui/material";
import SortsTable from "./SortsTable";
import CouponTable from "./CouponTable";

const BundleTable = () => {
  const dispatch = useAppDispatch();
  const { allPackages, createPg, deletePg, createCoupon, addVat } =
    useAppSelector((state) => state);

  useEffect(() => {
    dispatch(getAllPackageAction());
  }, [
    createPg.success,
    deletePg.success,
    createCoupon.success,
    addVat.success,
  ]);

  const items: any = [
    {
      key: "1",
      label: `Bundle`,
      children: (
        <ShowingTable
          component={<CreateBundleForm/>}
          data={allPackages?.res?.data?.Bundle}
          delAction={deletePackageAction}
        />
      ),
    },
    {
      key: "2",
      label: `Single`,
      children: (
        <SingleTable initialVal={allPackages?.res?.data?.Single}/>
      ),
    },
    {
      key: "3",
      label: `Sorts`,
      children: (
        <SortsTable/>
      ),
    },
    {
      key: "4",
      label: `Coupon`,
      children: (
        <CouponTable/>
      ),
    },
    {
      key: "5",
      label: `Vat`,
      children: (
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
      ),
    },
  ];
  return (
    <div className="">
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
};

export default BundleTable;
