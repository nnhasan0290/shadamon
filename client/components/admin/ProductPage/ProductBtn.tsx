import { Button } from "antd";
import { BiChevronDown, BiPlus, BiSearch, BiTrash } from "react-icons/bi";
import { TbArrowsRightLeft } from "react-icons/tb";
import { GlobalStates } from "../../../context/ContextProvider";
import ProductCreateModal from "./ProductCreateModal";
import ProductSearch from "./ProductSearch";

export default function () {
  const { modalDispatch } = GlobalStates();
  return (
    <div className="flex justify-end items-center my-1">
      <Button
        className="flex items-center text-white bg-red-700 hover:border-none"
        icon={<BiTrash size={20} />}
      >
        {" "}
        <BiChevronDown />{" "}
      </Button>
      <Button
        onClick={() => {
          modalDispatch({ type: "ADMIN_MODAL", payload: <ProductCreateModal/> });
        }}
        className="flex items-center text-white bg-green-700"
        icon={<BiPlus size={20} />}
      >
        {" "}
      </Button>
      <Button
      onClick={() => {modalDispatch({type:"ADMIN_MODAL", payload: <ProductSearch/>})}}
        className="flex items-center text-white bg-green-700"
        icon={<BiSearch size={20} />}
      >
        {" "}
      </Button>
    </div>
  );
}
