import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import {
  deletePackageAction,
  editPackageAction,
  getAllPackageAction,
} from "../../../redux/actions/Admin/packageAction";
import ShowingTable from "./ShowingTable";

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
  return (
    <div className="flex flex-wrap my-2">
      <ShowingTable
        title={"Bundle Promote"}
        data={allPackages?.res?.data?.Bundle}
        delAction={deletePackageAction}
      />
      <ShowingTable title={"Single Promote"} data={allPackages?.res?.data?.Single} />
      <ShowingTable title={"Sorts"} data={allPackages?.res?.data?.Sort} />
      <ShowingTable title={"Coupons"} data={allPackages?.res?.data?.Coupone} />
      <ShowingTable title={"Vat"} data={allPackages?.res?.data?.Vat} />
    </div>
  );
};

export default BundleTable;
