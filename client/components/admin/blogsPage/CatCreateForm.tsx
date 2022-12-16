import { Button, Divider, Form } from "antd";
import { useEffect } from "react";
import { BiPlus } from "react-icons/bi";
import { getParentCategories } from "../../../redux/actions/Admin/categoryAction";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import FormInput from "../FormElements/FormInput";
import FormSelect from "../FormElements/FormSelect";

export default function () {
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.adminCat);
  console.log(data);
  useEffect(() => {
    dispatch(getParentCategories())
    
  },[])
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
        <Divider/>
        <Form className="flex flex-wrap basis-full">
          <div className="pr-5 basis-1/2">
            <FormSelect label="" />
          </div>
          <div className="pl-5 basis-1/2">
            <FormSelect label="" />
          </div>
          <div className="pr-5 basis-1/2">
            <FormInput label="" />
          </div>
          <div className="pl-5 basis-1/2">
            <FormSelect label="" />
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



