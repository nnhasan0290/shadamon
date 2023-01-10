import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import {
  deletePackageAction,
  editPackageAction,
  getAllPackageAction,
} from "../../../redux/actions/Admin/packageAction";
import ShowingTable from "./ShowingTable";
import { Tabs } from "antd";
import CreateBundleForm from "./CreateBundleForm";

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
        <ShowingTable
          title={"Single Promote"}
          data={allPackages?.res?.data?.Single}
        />
      ),
    },
    {
      key: "3",
      label: `Sorts`,
      children: (
        <ShowingTable title={"Sorts"} data={allPackages?.res?.data?.Sort} />
      ),
    },
    {
      key: "4",
      label: `Coupon`,
      children: (
        <ShowingTable
          title={"Coupons"}
          data={allPackages?.res?.data?.Coupone}
        />
      ),
    },
    {
      key: "5",
      label: `Vat`,
      children: (
        <ShowingTable title={"Vat"} data={allPackages?.res?.data?.Vat} />
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
