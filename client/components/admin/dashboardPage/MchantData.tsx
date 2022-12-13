import { Divider } from "antd";
import ButtonArea from "./ButtonArea";
import MerchantDetails from "./MerchantDetails";

export default function MchantData() {
  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold">Merchant Zone & <span className="font-normal">User Zone</span> </h2>
      <Divider className="my-2"/>
      <ButtonArea/>
      <Divider className="my-2"/>
      <MerchantDetails />
    </div>
  );
}
