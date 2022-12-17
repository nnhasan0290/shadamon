import { Button, Divider, Form } from "antd";
import { useEffect } from "react";
import { BiPlus } from "react-icons/bi";
import { GlobalStates } from "../../../context/ContextProvider";
import { getParentCategories } from "../../../redux/actions/Admin/categoryAction";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import FormInput from "../FormElements/FormInput";
import FormSelect from "../FormElements/FormSelect";
import SmallCreateCat from "./SmallCreateCat";

export default function () {
  const dispatch = useAppDispatch();
  const { res } = useAppSelector((state) => state.adminCat);
  const { modalDispatch } = GlobalStates();

  const options: any = [];
  useEffect(() => {
    dispatch(getParentCategories());
  }, []);
  return (
    <div className="flex">
      <div className="flex flex-wrap justify-between py-1 border-b shadow-sm basis-1/2">
        <div className="flex gap-2 items-center font-bold">
          <span className="p-1 text-white bg-gray-700 rounded-full">
            <BiPlus />
          </span>
          <h4>New Category</h4>
        </div>
        <div>
          <Button className="text-white bg-blue-700 hover:border-none">
            {" "}
            Save
          </Button>
          <Button className="text-white bg-gray-700 hover:border-none">
            {" "}
            cancel
          </Button>
        </div>
        <Divider />
        <Form className="flex flex-wrap basis-full">
          <div className="pr-5 basis-1/2">
            <FormSelect optionsObj={res?.data} placeholder="parent" label="" />
          </div>
          <div className="pl-5 basis-1/2">
            <FormSelect label="" />
          </div>
          <div className="flex gap-3 justify-between pr-5 basis-1/2">
            <div className="w-full">
              <FormSelect label="" placeholder="Categories" />
            </div>
            <div className="py-1">
              <Button
                className="text-white bg-blue-700 hover:border-none"
                onClick={() => modalDispatch({ type: "SMALL_MODAL", payload:<SmallCreateCat parentCat={res?.data}/> })}
              >
                {" "}
                Add New
              </Button>
            </div>
          </div>
          <div className="pl-5 basis-1/2">
            <FormInput label="" />
          </div>
          <div className="pr-5 basis-1/2">
            <FormInput label="" />
          </div>
          <div className="pl-5 basis-1/2">
            <FormInput label="" />
          </div>
          <div className="pr-5 basis-1/2">
            <FormInput label="" />
          </div>
        </Form>
      </div>
    </div>
  );
}
