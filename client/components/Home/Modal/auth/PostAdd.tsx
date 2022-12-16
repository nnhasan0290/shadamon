import { useEffect } from "react";
import { useAppSelector } from "../../../../redux/hook";
import MultiSelectTreeView from "../../TreeView";

const PostAdd = () => {
  return (
    <>
      <p className="py-2 w-full font-semibold text-center bg-orange-100">
        Your account successfully created
      </p>
      <div>
        <img src="/login-logo.png" alt="" width={100} height={100} />
      </div>
      <p>Welcome user name</p>
      <p className="font-semibold">Post an Ad</p>
      <p className="mb-2 text-sm">Please Sign Up to post your ad</p>
      <div className="w-full tree__view">
        <MultiSelectTreeView />
      </div>

      <ul className="flex gap-5 my-4 text-xs list-disc text-common-gray">
        <li>Posting Rules</li>
        <li>Posting Allowance</li>
        <li>Helpline</li>
        <li>Help Chat</li>
      </ul>
    </>
  );
};

export default PostAdd;
