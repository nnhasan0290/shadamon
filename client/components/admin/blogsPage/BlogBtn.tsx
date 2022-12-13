import { Button } from "antd";
import { BiChevronDown, BiPlus, BiSearch, BiTrash } from "react-icons/bi";
import { GlobalStates } from "../../../context/ContextProvider";
import CatCreateForm from "./CatCreateForm";

export default function (){
    const {modalDispatch} = GlobalStates();
    return(
        <div className="flex justify-between items-center py-2 border-b shadow-sm">
            <div className="">
            <Button onClick={() => {modalDispatch({type: "ADMIN_MODAL", payload: <CatCreateForm/>})}} className="flex items-center text-white bg-gray-700" icon={<BiPlus size={20}/>}> </Button>
                
            </div>
            <div  className="">
              <Button className="text-white bg-green-700 hover:border-none" > Category</Button>
            </div>
        </div>
    )
}