import { Button, Typography } from "antd";
import { BiPlus } from "react-icons/bi";
import { GlobalStates } from "../../../context/ContextProvider";
import CreateBundleForm from "./CreateBundleForm";

export default function () {
  const { modalDispatch } = GlobalStates();
  return (
    <div className="flex justify-between items-center py-2 border-b shadow-sm">
      <div className="flex justify-between items-end px-1 w-full">
        <Button onClick={() => modalDispatch({type:"ADMIN_MODAL", payload: <CreateBundleForm/>})} className="flex gap-1 justify-between items-center text-white bg-green-700 hover:border-none">
          {" "}
          <BiPlus size={20} /> Add New
        </Button>
      </div>
    </div>
  );
}
