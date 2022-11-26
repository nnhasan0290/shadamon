import { useSession } from "next-auth/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import BiggestPost from "../components/Home/BiggestAd";
import CatBtn from "../components/Home/CatProduct";
import CategoryLocation from "../components/Home/CategoryLocation";
import Heading from "../components/Home/Heading";
import Modal from "../components/Home/Modal";
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

export default function Home() {
  return (
    <>
      <Head>
        <title>Shadamon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading />
      <main className="min-h-[100vh] bg-body-bg">
        <div className="flex  gap-[50px] justify-center">
          <div className="border w-[250px] hidden lg:block">Category Area</div>
          <div className=" w-[500px]">
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
            <Advertisement />
          </div>
        </div>
      </main>
    </>
  );
}
