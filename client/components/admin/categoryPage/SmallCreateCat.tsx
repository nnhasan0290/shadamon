import { UploadOutlined } from "@mui/icons-material";
import {
  Button,
  Divider,
  Form,
  Input,
  InputNumber,
  Upload,
} from "antd";
import { useEffect } from "react";
import { BiPlus } from "react-icons/bi";
import {
  createCategory,
} from "../../../redux/actions/Admin/categoryAction";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import FormInput from "../FormElements/FormInput";
import FormSelect from "../FormElements/FormSelect";

export default function ({ parentCat }: any) {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  const { res } = useAppSelector((state) => state.createCat);
  console.log(res);

  const onFinish = (values: any) => {
    const data = { ...values };
    data.categoryImg = values.categoryImage.file.originFileObj;
    delete data.categoryImage;
    console.log(data);
    dispatch(createCategory(data));
    console.log("Success:", data);
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
      <div className="flex gap-2 items-center font-bold">
        <span className="p-1 text-white bg-gray-700 rounded-full">
          <BiPlus />
        </span>
        <h4>New Category</h4>
      </div>
      <Divider className="my-2"/>
      <FormSelect
        name={"parentId"}
        placeholder="Parent"
        optionsObj={parentCat}
      />
      <Form.Item name={"categoryName"}  rules={[{ required: true, message: `Required` }]}>
        <Input placeholder="Category Name"/>
      </Form.Item>
      <div className="grid grid-cols-2">
        <Form.Item
          className="mx-2"
          name="categoryOrder"
          rules={[{ required: true, message: `Required` }]}
        >
          <InputNumber placeholder="Order" className="w-full"></InputNumber>
        </Form.Item>

        <Form.Item name="categoryImage" className="mx-2 text-right">
          <Upload>
            <Button
              className="transition-all duration-300 hover:bg-black"
              icon={<UploadOutlined />}
            >
              Click to Upload
            </Button>
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
