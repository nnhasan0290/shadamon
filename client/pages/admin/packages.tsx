import Head from "next/head";
import AdminModal from "../../components/admin/AllModal/AdminModal";
import TopAvatarArea from "../../components/admin/categoryPage/TopAvatarArea";
import SideMenu from "../../components/admin/Menu/Menu";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import SmallModal from "../../components/admin/AllModal/SmallModal";
import PackageBtnArea from "../../components/admin/PackagePage/PackageBtnArea";
import BundleTable from "../../components/admin/PackagePage/BundleTable";

export default function Admin() {
  return (
    <>
      <Head>
        <title>Packages</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer />
      <div className="flex gap-1">
        <div className="min-h-screen bg-[#001529]">
          <SideMenu activeItem="11" />
        </div>
        <AdminModal />
        <SmallModal />
        <div className="mr-4 w-full">
          <TopAvatarArea />
          <div className="flex">
            <div className="basis-1/2">
              <PackageBtnArea />
              <BundleTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}