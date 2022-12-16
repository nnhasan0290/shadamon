
import { Divider } from "antd";
import MerchantModal from "./MerchantModal";
import UserDetails from "./UserDetails";

export default function(){
  return(
    <div>
      <UserDetails/>
      <Divider/>
      <MerchantModal/>
    </div>
  )
}