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
import { BiPlus } from "react-icons/bi";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import DateInput from "../../layout/DateInput";
const { Option } = Select;

export default function () {
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <Form
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
      <div className="basis-full px-1">
        <Form.Item name={"featureName"}>
          <Input placeholder="Location Name" />
        </Form.Item>
      </div>
      <Form.Item className="px-1 basis-1/2">
        <DateInput />
      </Form.Item>
      <div className="basis-1/2 px-1">
        <Form.Item className="ordering">
          <InputNumber placeholder="Ordering" className="w-full"></InputNumber>
        </Form.Item>
      </div>
      <div className="basis-full px-1">
        <Form.Item>
          <Input placeholder="Map Link" />
        </Form.Item>
      </div>
      <div className="basis-full px-1">
        <Form.List name="options">
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map((field, index) => (
                <Form.Item key={field.key} className="">
                  <div className="flex gap-2 items-center">
                    <Form.Item
                      className=""
                      {...field}
                      validateTrigger={["onChange", "onBlur"]}
                      rules={[
                        {
                          required: true,
                          whitespace: true,
                          message: "Please input field.",
                        },
                      ]}
                      noStyle
                    >
                      <Input placeholder="feature  Option" />
                    </Form.Item>
                    {fields.length > 1 ? (
                      <MinusCircleOutlined
                        className="dynamic-delete-button"
                        onClick={() => remove(field.name)}
                      />
                    ) : null}
                  </div>
                </Form.Item>
              ))}
              <Form.Item>
                <Button
                  className=""
                  type="dashed"
                  onClick={() => add()}
                  icon={<PlusOutlined />}
                >
                  Add Sub Location
                </Button>
                <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          )}
        </Form.List>
      </div>

      <div className="basis-1/2 px-1 flex justify-between">
        <Typography>Status</Typography>
        <Radio.Group name="radiogroup" defaultValue={1}>
          <Radio value={1}>Yes</Radio>
          <Radio value={2}>No</Radio>
        </Radio.Group>
      </div>
    </Form>
  );
}
