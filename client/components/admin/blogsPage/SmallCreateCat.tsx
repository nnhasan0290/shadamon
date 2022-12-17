import { UploadOutlined } from "@mui/icons-material";
import {
  Button,
  Divider,
  Form,
  Input,
  InputNumber,
  message,
  Select,
  Upload,
  UploadProps,
} from "antd";
import { useEffect } from "react";
import { BiPlus } from "react-icons/bi";
import { GlobalStates } from "../../../context/ContextProvider";
import {
  createCategory,
  getParentCategories,
} from "../../../redux/actions/Admin/categoryAction";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import FormInput from "../FormElements/FormInput";
import FormSelect from "../FormElements/FormSelect";

export default function ({ parentCat }: any) {
  const dispatch = useAppDispatch();

  const { res } = useAppSelector((state) => state.createCat);
  console.log(res);

  const onFinish = (values: any) => {
    //  dispatch(createCategory(values))
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const props: UploadProps = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <Form
      initialValues={{ remember: false }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="p-5"
    >
      <FormSelect
        name={"parentId"}
        placeholder="Parent"
        optionsObj={parentCat}
      />
      <FormInput name={"categoryName"} placeholder="Category Name" />
      <div className="grid grid-cols-2">
        
      <Form.Item className="mx-2" name="categoryOrder" rules={[{ required: true, message: `Required` }]}>
        <InputNumber
          placeholder="Order"
          className="w-full"
        ></InputNumber>
      </Form.Item>
      <Form.Item name="categoryImg" className="mx-2 text-right">
        <Upload {...props} className="">
          <Button className="transition-all duration-300 hover:bg-black" icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </Form.Item>
      </div>
      <Form.Item>
        <Button
          htmlType="submit"
          className="w-full text-white bg-blue-700 hover:border-none"
        >
          {" "}
          Add
        </Button>
      </Form.Item>
    </Form>
  );
}
