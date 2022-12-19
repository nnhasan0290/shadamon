import Head from "next/head";
import AdminModal from "../../components/admin/AllModal/AdminModal";
import MchantData from "../../components/admin/dashboardPage/MchantData";
import SideMenu from "../../components/admin/Menu/Menu";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function Admin() {

  return (
    <>
      <Head>
        <title>admin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex gap-4">
      <div className="min-h-screen bg-[#001529]">
        <SideMenu />
      </div>
        <MchantData/>
        <AdminModal/>
    </div>
    </>
  );
}