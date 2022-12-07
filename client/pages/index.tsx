import { useSession } from "next-auth/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import BiggestPost from "../components/Home/BiggestAd";
import CategoryLocation from "../components/Home/CategoryLocation";
import Heading from "../components/layout/Heading";
import Modal from "../components/Home/Modal/Modal";
import NvtStop from "../components/Home/NvtStop";
import SmallestAd from "../components/Home/SmallestAd";
import WannaBid from "../components/Home/WannaBid";
import { GlobalStates } from "../context/ContextProvider";
import CatProduct from "../components/Home/CatProduct";
import CatButton from "../components/Home/CatBtn";
import Promote from "../components/Home/Promote";
import PostEarn from "../components/Home/PostEarn";
import ConnectSlider from "../components/Home/ConnectSlider";
import RandomOptions from "../components/Home/RandomOptions";
import AddPost from "../components/Home/AddPost";
import SearchSome from "../components/Home/SearchSome";
import Advertisement from "../components/Home/Advertisement";
import CategoryArea from "../components/Home/CategoryArea";
import axios from "axios";

export default function Home() {
  const {
    modalState: { modalOpen },
  } = GlobalStates();
  
  const config:any = {
    withCredential: true
  };
  useEffect(() => {
    axios
      .get(
        "https://3001-work0290-shadamon-6d0r1xcekjb.ws-us77.gitpod.io/api/user/load",config
      )
      .then((res) => console.log(res));
  }, []);
  return (
    <>
      <Head>
        <title>Shadamon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`min-h-[100vh] bg-body-bg scroll-smooth ${
          modalOpen && "h-[100vh] overflow-hidden"
        }`}
      >
        <Heading />
        <div className="flex gap-[50px] justify-center">
          <div className=" w-[250px] hidden lg:block">
            <CategoryArea />
          </div>
          <div className="  middle-body mb-[50px]">
            <CategoryLocation />
            <BiggestPost />
            <SearchSome />
            <AddPost />
            <Promote />
            <PostEarn />
            <WannaBid />
            <NvtStop />
            <SmallestAd />
            <SmallestAd />
            <CatButton />
            <RandomOptions />
            <ConnectSlider />
            <CatProduct />
            <Modal />
          </div>
          <div className=" w-[160px] hidden lg:block">
            <Advertisement home={true} />
          </div>
        </div>
      </main>
    </>
  );
}
