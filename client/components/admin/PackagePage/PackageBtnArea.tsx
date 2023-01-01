import { Button, Typography } from "antd";
import { BiPlus } from "react-icons/bi";
import { GlobalStates } from "../../../context/ContextProvider";
import CreateBundleForm from "./CreateBundleForm";

export default function () {
  const { modalDispatch } = GlobalStates();
  return (
    <div className="flex justify-between items-center py-2 border-b shadow-sm">
      <div className=" px-1 flex justify-between items-center w-full">
        <Typography>Bundle Promote</Typography>
        <Button onClick={() => modalDispatch({type:"ADMIN_MODAL", payload: <CreateBundleForm/>})} className="text-white bg-green-700 hover:border-none flex gap-1 items-center justify-between">
          {" "}
          <BiPlus size={20} /> Add New
        </Button>
      </div>
    </div>
  );
}
