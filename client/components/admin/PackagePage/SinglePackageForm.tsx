import { Button, Form, Typography } from "antd";
import CouponTable from "./CouponTable";
import SinglePackageTable from "./SinglePackageTable";
import SortItemPriceTable from "./SortItemTable";

export default function () {
  return (
    <>
     
        <SinglePackageTable />
     
      
        <SortItemPriceTable />
     
        <CouponTable />
    </>
  );
}
