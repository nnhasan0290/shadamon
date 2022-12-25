import { Button } from "antd";
import { BiChevronDown, BiPlus, BiSearch, BiTrash } from "react-icons/bi";
import { TbArrowsRightLeft } from "react-icons/tb";
import { GlobalStates } from "../../../context/ContextProvider";
import LocationCreateModal from "./LocationCreateModal";
export default function () {
  const { modalDispatch } = GlobalStates();
  return (
    <div className="flex justify-end items-center my-1">
      <Button
        onClick={() => {
          modalDispatch({
            type: "SMALL_MODAL",
            payload: <LocationCreateModal />,
          });
        }}
        className="flex items-center text-white bg-green-700"
        icon={<BiPlus size={20} />}
      >
        Add Location{" "}
      </Button>
      {/* <Button
      onClick={() => {modalDispatch({type:"ADMIN_MODAL", payload: <ProductSearch/>})}}
        className="flex items-center text-white bg-green-700"
        icon={<BiSearch size={20} />}
      >
        {" "}
      </Button> */}
    </div>
  );
}
