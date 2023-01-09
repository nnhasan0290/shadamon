
import { useState } from "react";
import EachPackageTable from "./EachPackageTable";



export default function () {

  const [couponDetails, setCouponDetails] = useState([]);
  console.log(couponDetails, "coupon")
  return (
    <>
        <EachPackageTable price={true} reach={true} click={true} minA={true} category={true} title="Single Package" />
        <EachPackageTable price={true} reach={true} click={true} sName={true} category={true} title="Category Wise Sort Item Price" />
        <EachPackageTable setState={setCouponDetails}  couponCreate={true} />
     
    </>
  );
}
