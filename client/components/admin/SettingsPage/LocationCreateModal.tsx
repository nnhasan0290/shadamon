import {
  Button,
  Divider,
  Form,
  Input,
  InputNumber,
  Modal,
  Radio,
  Select,
  Typography,
} from "antd";
import { BiPlus } from "react-icons/bi";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import DateInput from "../../layout/DateInput";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { getLocationAction } from "../../../redux/actions/Admin/categoryAction";
import { createLocationAction } from "../../../redux/actions/Admin/locationAction";
import ParentLocationModal from "./ParentLocationModal";
const { Option } = Select;

export default function () {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const { locations, createLocation } = useAppSelector((state) => state);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onFinish = (values: any) => {
    console.log(values);
    dispatch(createLocationAction(values));
    // form.resetFields();
  };

  useEffect(() => {
    dispatch(getLocationAction());
  }, []);
  return (
    <Form
      form={form}
      onFinish={onFinish}
      className="flex flex-wrap justify-between basis-full"
    >
      <div className="flex gap-2 items-center font-bold">
        <span className="p-1 text-white bg-gray-700 rounded-full">
          <BiPlus />
        </span>
        <h4>New sub Location</h4>
      </div>
      <div className="flex items-center mr-5">
        <Form.Item className="mb-0">
          <Button
            htmlType="submit"
            className="text-white bg-blue-700 hover:border-none"
          >
            {" "}
            Save
          </Button>
        </Form.Item>
      </div>
      <Divider className="my-2" />
      <div className="basis-full flex justify-between px-1">
        <Form.Item
          className="w-full"
          name={"locationId"}
          rules={[{ required: true, message: " Required" }]}
        >
          <Select placeholder="Location">
            {locations?.res?.data?.map((each: any, i: any) => (
              <Option value={each._id}>{each?.locationName}</Option>
            ))}
          </Select>
        </Form.Item>
        <Button className="text-white bg-blue-700 hover:border-none" onClick={() => setIsModalOpen(true)}>
          {" "}
          Add New
        </Button>
        <ParentLocationModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      </div>

      <Form.Item className="px-1 basis-1/2">
        <DateInput />
      </Form.Item>
      <div className="basis-1/2 px-1">
        <Form.Item name="ordering">
          <InputNumber placeholder="Ordering" className="w-full"></InputNumber>
        </Form.Item>
      </div>
      <div className="basis-full px-1">
        <Form.Item
          name={"link"}
          rules={[{ required: true, message: " Required" }]}
        >
          <Input placeholder="Map Link" />
        </Form.Item>
      </div>
      <div className="basis-full px-1">
        <Form.Item
          name={"subLocationName"}
          rules={[{ required: true, message: " Required" }]}
        >
          <Input placeholder="Sub Location Name" />
        </Form.Item>
      </div>

      <div className="basis-[250px] px-1 flex justify-between">
        <Typography>Status</Typography>
        <Form.Item name="status" initialValue={"active"} noStyle>
          <Radio.Group defaultValue={"active"}>
            <Radio value={"active"}> Active </Radio>
            <Radio value={"inactive"}> Inactive </Radio>
          </Radio.Group>
        </Form.Item>
      </div>
    </Form>
  );
}
