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
import {
  createLocationAction,
  editSubLocationAction,
} from "../../../redux/actions/Admin/locationAction";
import ParentLocationModal from "./ParentLocationModal";
import { GlobalStates } from "../../../context/ContextProvider";
const { Option } = Select;

export default function ({ record }: any) {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const { locations, createLocation } = useAppSelector((state) => state);
  const { modalDispatch } = GlobalStates();
  const onFinish = (values: any) => {
    if (record) {
      console.log(values);
      dispatch(
        editSubLocationAction({
          ...values,
          _id: record._id,
          locationId: record.locationId,
        })
      );
    } else {
      dispatch(createLocationAction(values));
      // form.resetFields();
    }
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
      {!record && (
        <div className="basis-full flex justify-between px-1">
          <Form.Item
            className="w-full"
            name={"locationId"}
            rules={[{ required: true, message: "Required" }]}
          >
            <Select placeholder="Location">
              {locations?.res?.data?.map((each: any, i: any) => (
                <Option value={each?.location._id}>{each?.location?.locationName}</Option>
              ))}
            </Select>
          </Form.Item>
          <Button
            className="text-white bg-blue-700 hover:border-none"
            onClick={() =>
              modalDispatch({
                type: "MIDDLE_MODAL",
                payload: <ParentLocationModal />,
              })
            }
          >
            {" "}
            Add New
          </Button>
        </div>
      )}
      <div className="basis-full px-1">
        <Form.Item
          name={"subLocationName"}
          rules={[{ required: true, message: " Required" }]}
          initialValue={record && record.subLocationName}
        >
          <Input placeholder="Sub Location Name" />
        </Form.Item>
      </div>
      <Form.Item className="px-1 basis-1/2">
        <DateInput />
      </Form.Item>
      <div className="basis-1/2 px-1">
        <Form.Item name="ordering" initialValue={record && record.ordering}>
          <InputNumber placeholder="Ordering" className="w-full"></InputNumber>
        </Form.Item>
      </div>
      <div className="basis-full px-1">
        <Form.Item
          name={"link"}
          rules={[{ required: true, message: " Required" }]}
          initialValue={record && record.link}
        >
          <Input placeholder="Map Link" />
        </Form.Item>
      </div>

      <div className="basis-[250px] px-1 flex justify-between">
        <Typography>Status</Typography>
        <Form.Item
          name="status"
          noStyle
          initialValue={record ? record.status : "active"}
        >
          <Radio.Group defaultValue={record ? record.status : "active"}>
            <Radio value={"active"}> Active </Radio>
            <Radio value={"inactive"}> Inactive </Radio>
          </Radio.Group>
        </Form.Item>
      </div>
    </Form>
  );
}
