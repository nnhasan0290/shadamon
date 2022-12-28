import {
  Button,
  Divider,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Typography,
} from "antd";
import { useEffect } from "react";
import { BiPlus } from "react-icons/bi";
import { GlobalStates } from "../../../context/ContextProvider";
import {
  createSubCatAction,
  editSubCategoryAction,
  getAllCategories,
  getFeaturesAction,
  getParentCategories,
} from "../../../redux/actions/Admin/categoryAction";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import FormSelect from "../FormElements/FormSelect";
import SmallCreateCat from "./SmallCreateCat";
import FormMultiSelect from "../FormElements/FormMultiSelect";
import FeatureTable from "./FeatureTable";
import FeatureForm from "./FeatureForm";

export default function ({ record }: any) {
  console.log(record);
  const dispatch = useAppDispatch();
  const { allCat, allFeatures, createSub } = useAppSelector((state) => state);
  const { modalDispatch } = GlobalStates();
  const [form] = Form.useForm();
  console.log(allFeatures);

  useEffect(() => {
    dispatch(getParentCategories());
    dispatch(getAllCategories());
    dispatch(getFeaturesAction());
  }, []);

  const onFinish = (values: any) => {
    if (record) {
      dispatch(editSubCategoryAction(values))
    } else {
      dispatch(createSubCatAction(values));
      console.log("Success:", values);
      // form.resetFields();
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex items-start">
      <div className="flex flex-wrap justify-between py-1 pr-2 border-b shadow-sm basis-1/2">
        <Form
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="flex flex-wrap justify-between basis-full"
        >
          <div className="flex gap-2 items-center font-bold">
            <span className="p-1 text-white bg-gray-700 rounded-full">
              <BiPlus />
            </span>
            <h4>New Category</h4>
          </div>
          <div className="flex items-center">
            <Form.Item className="mb-0">
              <Button
                htmlType="submit"
                className="text-white bg-blue-700 hover:border-none"
              >
                {" "}
                Save
              </Button>
            </Form.Item>
            <Button className="text-white bg-gray-700 hover:border-none">
              {" "}
              cancel
            </Button>
          </div>
          <Divider className="my-2" />
          <div className="flex gap-3 justify-between basis-[250px]">
            <div className="w-full">
              <Form.Item
                name={"categoryId"}
                initialValue={record && record.categoryId}
              >
                <Select placeholder="Category ">
                  {allCat.res.data.map((each: any, i: any) => (
                    <Select.Option key={i} value={each.category._id}>
                      {each.category.categoryName}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </div>
            <div className="">
              <Button
                className="text-white bg-blue-700 hover:border-none"
                onClick={() =>
                  modalDispatch({
                    type: "SMALL_MODAL",
                    payload: <SmallCreateCat />,
                  })
                }
              >
                {" "}
                Add New
              </Button>
            </div>
          </div>
          <div className="basis-[250px]">
            <Form.Item
              name={"features"}
              initialValue={record && record.features}
            >
              <Select mode="tags" placeholder="features">
                {allFeatures?.res?.data?.map((each: any, i: any) => (
                  <Select.Option key={i} value={each._id}>
                    {each.featureName}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </div>
          <div className="basis-[250px]">
            <Form.Item
              name="subCategoryName"
              initialValue={record && record.subCategoryName}
              rules={[{ required: true, message: " Required" }]}
            >
              <Input placeholder="Sub Category Name" className="w-full"></Input>
            </Form.Item>
          </div>
          <div className="basis-[250px]">
            <Form.Item
              name="ordering"
              rules={[{ required: true, message: " Required" }]}
              initialValue={record && record.ordering}
            >
              <InputNumber
                placeholder="Ordering"
                className="w-full"
              ></InputNumber>
            </Form.Item>
          </div>
          <div className="basis-[250px]">
            <Form.Item
              name="freePost"
              rules={[{ required: true, message: " Required" }]}
              initialValue={record && record.freePost}
            >
              <InputNumber
                placeholder="Free Post"
                className="w-full"
              ></InputNumber>
            </Form.Item>
          </div>

          <div className="basis-[250px] flex justify-between">
            <Typography>Status</Typography>
            <Form.Item
              name="status"
              initialValue={record ? record.status : "active"}
              noStyle
            >
              <Radio.Group defaultValue={"active"}>
                <Radio value={"active"}> Active </Radio>
                <Radio value={"inactive"}> Inactive </Radio>
              </Radio.Group>
            </Form.Item>
          </div>
        </Form>
      </div>
      <div className="px-2 pt-1 border-l basis-1/2">
        <Button
          className="flex items-center text-white bg-gray-700"
          icon={<BiPlus size={20} />}
          onClick={() =>
            modalDispatch({ type: "SMALL_MODAL", payload: <FeatureForm /> })
          }
        >
          {" "}
        </Button>
        <Divider className="my-2" />
        <FeatureTable />
        {/* <div className="mt-[100px]">
          <FeatureForm />
        </div> */}
      </div>
    </div>
  );
}
