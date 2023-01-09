
import { useState } from "react";
import EachPackageTable from "./EachPackageTable";



export default function () {

  const [couponDetails, setCouponDetails] = useState([]);
  return (
    <>
        <EachPackageTable single={true} price={true} reach={true} click={true} minA={true} category={true} title="Single Package" />
        <EachPackageTable single={true} price={true} reach={true} click={true} sName={true} category={true} title="Category Wise Sort Item Price" />
        <EachPackageTable single={true}  setState={setCouponDetails}  couponCreate={true} title={"Create Coupon"}/>
     
    </>
  );
}
