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
import { createParentLocationAction } from "../../../redux/actions/Admin/locationAction";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import DateInput from "../../layout/DateInput";

export default function ({ isModalOpen, setIsModalOpen }: any) {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const {createParentLocation} = useAppSelector(state => state);
  console.log(createParentLocation);
  const onFinish = (values: any) => {
    console.log(values);
    dispatch(createParentLocationAction(values));
    console.log(createParentLocation);
  };
  return (
    <Modal
      footer={null}
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
    >
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
          >
            <Input placeholder="Location Name" />
          </Form.Item>
        </div>
        <Form.Item className="px-1 basis-1/2">
          <DateInput />
        </Form.Item>
        <div className="basis-1/2 px-1">
          <Form.Item name="ordering" rules={[{required:true, message: "Required"}]}>
            <InputNumber
              placeholder="Ordering"
              className="w-full"
            ></InputNumber>
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
    </Modal>
  );
}
