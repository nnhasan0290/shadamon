import { Button } from "antd";
import { BiChevronDown, BiPlus, BiSearch, BiTrash } from "react-icons/bi";
import {TbArrowsRightLeft} from "react-icons/tb"
import { GlobalStates } from "../../../context/ContextProvider";
import SearchModal from "./SearchModal";
import UserDetailsForm from "./UserDetailsForm";

export default function ButtonArea(){
    const {modalDispatch} = GlobalStates();
    return(
        <div className="flex justify-between items-center">
            <div className="flex">
              <Button className="flex gap-1 justify-center items-center text-white bg-red-700 hover:text-white hover:border-none" icon={<TbArrowsRightLeft />}> Both</Button>
              <Button className="text-white bg-green-700 hover:border-none" > Seller</Button>
              <Button className="text-white bg-green-700 hover:border-none" > Customer</Button>
                
            </div>
            <div  className="flex">
            <Button className="flex items-center text-white bg-red-700 hover:border-none" icon={<BiTrash size={20} />}> <BiChevronDown/> </Button>
            <Button onClick={() => {modalDispatch({type: "ADMIN_MODAL", payload: <UserDetailsForm/>})}} className="flex items-center text-white bg-green-700" icon={<BiPlus size={20}/>}> </Button>
            <Button onClick={() => {modalDispatch({type:"ADMIN_MODAL", payload: <SearchModal/>})}} className="flex items-center text-white bg-green-700" icon={<BiSearch size={20}/>}> </Button>
            </div>
        </div>
    )
}