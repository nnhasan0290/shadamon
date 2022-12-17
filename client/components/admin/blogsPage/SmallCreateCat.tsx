import { Button, Divider, Form, Input, Select } from "antd";
import { useEffect } from "react";
import { BiPlus } from "react-icons/bi";
import { GlobalStates } from "../../../context/ContextProvider";
import { createCategory, getParentCategories } from "../../../redux/actions/Admin/categoryAction";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import FormInput from "../FormElements/FormInput";
import FormSelect from "../FormElements/FormSelect";

export default function ({ parentCat }: any) {
    const dispatch = useAppDispatch();

    const {res} = useAppSelector(state => state.createCat);
    console.log(res);

    
  const onFinish = (values: any) => {
    dispatch(createCategory(values))
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      initialValues={{ remember: false }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="p-5"
    >
      <FormSelect name={"parentId"} placeholder="Parent" optionsObj={parentCat}/>
      <FormInput name={"categoryName"} placeholder="Category Name" />
      
      <Form.Item >
        <Button
          htmlType="submit"
          className="text-white bg-blue-700 hover:border-none"
        >
          {" "}
          Add
        </Button>
      </Form.Item>
    </Form>
  );
}
