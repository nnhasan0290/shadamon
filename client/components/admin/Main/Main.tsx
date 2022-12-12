import AdminModal from "../AllModal/AdminModal";
import SideMenu from "../Menu/Menu";
import MchantData from "./MchantData";

export default function MainAdmin() {
  return (
    <div className="flex gap-4">
      <div className="min-h-screen bg-[#001529]">
        <SideMenu />
      </div>
        <MchantData/>
        <AdminModal/>
    </div>
  );
}
