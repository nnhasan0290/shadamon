
import EachPackageTable from "./EachPackageTable";

export default function () {
  return (
    <>
        <EachPackageTable price={true} reach={true} click={true} minA={true} category={true} title="Single Package" />
        <EachPackageTable price={true} reach={true} click={true} sName={true} category={true} title="Category Wise Sort Item Price" />
        <EachPackageTable  couponCreate={true} />
     
    </>
  );
}
