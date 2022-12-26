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
        <h4>New Feature</h4>
      </div>
      <Form.Item className="mb-0 mr-5">
        <Button
          htmlType="submit"
          className="text-white bg-blue-700 hover:border-none"
        >
          {" "}
          Save
        </Button>
      </Form.Item>
      <Divider className="my-2" />
      <div className=" basis-1/2 px-1">
        <Form.Item
          name={"featureName"}
          rules={[{ required: true, message: `Required` }]}
        >
          <Input placeholder="Feature Name" />
        </Form.Item>
      </div>
      <div className="basis-1/2 px-1">
        <Form.Item className="ordering">
          <InputNumber placeholder="Ordering" className="w-full"></InputNumber>
        </Form.Item>
      </div>
      <div className="basis-full px-1">
        <Form.Item
          name="featureType"
          className=""
          rules={[{ required: true, message: `Required` }]}
        >
          <Select placeholder="feature Type" className="">
            <Option value="radio">Radio</Option>
            <Option value="multiselect">MultiSelect</Option>
            <Option value="dropdown">DropDown</Option>
          </Select>
        </Form.Item>
      </div>
      <div className="basis-1/2 px-1">
        <Form.Item
          name={"featureDefaultValue"}
          rules={[{ required: true, message: `Required` }]}
        >
          <Input placeholder="Feature Default Value" />
        </Form.Item>
      </div>
      <div className=" basis-1/2 px-1">
        <DateInput />
      </div>
      <div className=" flex justify-center mb-3 gap-5 basis-full">
        <Typography>Status</Typography>
        <Form.Item noStyle>
          <Radio.Group name="radiogroup" defaultValue={1}>
            <Radio value={1}>Yes</Radio>
            <Radio value={2}>No</Radio>
          </Radio.Group>
        </Form.Item>
      </div>

      <div className=" basis-full px-1 text-center">
        <Form.List name="options" >
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
                          message: "Please input..",
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
              <Form.Item className="w-full">
                <Button
                  className=""
                  type="dashed"
                  onClick={() => add()}
                  icon={<PlusOutlined />}
                >
                  Add Feature Option
                </Button>
                <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          )}
        </Form.List>
      </div>
    </Form>
  );
}
