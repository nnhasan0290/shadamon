import {
  Button,
  Divider,
  Form,
  Input,
  InputNumber,
  Radio,
  Typography,
} from "antd";
import { BiPlus } from "react-icons/bi";
import { createParentLocationAction, editParentLocationAction } from "../../../redux/actions/Admin/locationAction";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import DateInput from "../../layout/DateInput";

export default function ({record}:any) {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const onFinish = (values: any) => {
    if(record){
      console.log(values);
      dispatch(editParentLocationAction({...values, _id:record._id}))
    }else{
     dispatch(createParentLocationAction(values));
      form.resetFields();
    }
  };
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
          <h4>New Location</h4>
        </div>
        <div className="flex items-center mr-5">
          <Form.Item className="mb-0">
            <Button
              htmlType="submit"
              className="text-white bg-blue-700 hover:border-none "
            >
              {" "}
              Save
            </Button>
          </Form.Item>
        </div>
        <Divider className="my-2" />
        <div className="basis-full px-1">
          <Form.Item
            name={"locationName"}
            rules={[{ required: true, message: " Required" }]}
            initialValue={record && record.locationName}
          >
            <Input defaultValue={record && record.locationName} placeholder="Location Name" />
          </Form.Item>
        </div>
        <Form.Item className="px-1 basis-1/2">
          <DateInput />
        </Form.Item>
        <div className="basis-1/2 px-1">
          <Form.Item name="ordering" rules={[{required:true, message: "Required"}]} initialValue={record && record.ordering}>
            <InputNumber
              defaultValue={record && record.ordering}
              placeholder="Ordering"
              className="w-full"
            ></InputNumber>
          </Form.Item>
        </div>

        <div className="basis-[250px] px-1 flex justify-between">
          <Typography>Status</Typography>
          <Form.Item name="status" initialValue={record ? record.status : "active"} noStyle>
            <Radio.Group defaultValue={record ? record.status : "active"}>
              <Radio value={"active"}> Active </Radio>
              <Radio value={"inactive"}> Inactive </Radio>
            </Radio.Group>
          </Form.Item>
        </div>
      </Form>
  );
}
