import { UploadOutlined } from "@mui/icons-material";
import {
  Button,
  Divider,
  Form,
  Input,
  InputNumber,
  Select,
  Upload,
} from "antd";
import { useEffect } from "react";
import { BiPlus } from "react-icons/bi";
import {
  createCategory,
  editCategoryAction,
  getAllButtonsAction,
  getParentCategories,
} from "../../../redux/actions/Admin/categoryAction";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";

export default function ({ record }: any) {
  console.log(record);
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  const { createCat, allBtns, adminCat } = useAppSelector<any>(
    (state) => state
  );
  console.log(adminCat);

  const onFinish = (values: any) => {
    if (record) {
      if (values.categoryImg) {
        values.categoryImg = values.categoryImg.file.originFileObj;
      } else {
        values.categoryImg = record.categoryImg;
      }
      dispatch(editCategoryAction({ ...values, _id: record._id }));
    } else {
      if (values.categoryImg) {
        values.categoryImg = values.categoryImg.file.originFileObj;
      }
      dispatch(createCategory(values));
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    dispatch(getParentCategories());
    dispatch(getAllButtonsAction());
  }, []);

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
      <Divider className="my-2" />
      {/* <FormSelect
        name={"parentId"}
        placeholder="Parent"
        optionsObj={parentCat}
      /> */}
      <Form.Item
        name={"parentId"}
        rules={[{ required: true, message: `Required` }]}
        initialValue={record && record.parentId}
      >
        <Select placeholder="Parent Category">
          {adminCat?.res?.data?.map((each: any, i: any) => (
            <Select.Option key={i} value={each?._id}>
              {" "}
              {each.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name={"categoryName"}
        rules={[{ required: true, message: `Required` }]}
        initialValue={record && record.categoryName}
      >
        <Input placeholder="Category Name" />
      </Form.Item>
      <Form.Item
        name={"buttons"}
        rules={[{ required: true, message: `Required` }]}
        initialValue={record && record.buttons}
      >
        <Select placeholder="Button Type" mode="tags">
          {allBtns?.res?.data?.map((each: any, i: any) => (
            <Select.Option key={i} value={each?._id}>
              {" "}
              {each.buttonName}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <div className="grid grid-cols-2">
        <Form.Item
          className=""
          name="categoryOrder"
          initialValue={record && record.categoryOrder}
          rules={[{ required: true, message: `Required` }]}
        >
          <InputNumber placeholder="Order" className="w-full"></InputNumber>
        </Form.Item>

        <Form.Item name="categoryImg" className="mx-2 text-right">
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
