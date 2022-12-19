import Head from "next/head";
import AdminModal from "../../components/admin/AllModal/AdminModal";
import BlogBtn from "../../components/admin/blogsPage/BlogBtn";
import CatTable from "../../components/admin/blogsPage/CatTable";
import TopAvatarArea from "../../components/admin/blogsPage/TopAvatarArea";
import SideMenu from "../../components/admin/Menu/Menu";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import SmallModal from "../../components/admin/AllModal/SmallModal";

export default function Admin() {
  return (
    <>
      <Head>
        <title>Blogs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer/>
      <div className="flex gap-4">
        <div className="min-h-screen bg-[#001529]">
          <SideMenu />
        </div>
        <AdminModal />
        <SmallModal/>
        <div className="mr-4 w-full">
          <TopAvatarArea/>
          <BlogBtn/>
          <CatTable/>
        </div>
      </div>
    </>
  );
}