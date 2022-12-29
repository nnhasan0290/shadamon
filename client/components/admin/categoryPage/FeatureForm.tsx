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

export default function ({ record }: any) {
  console.log(record);
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
          initialValue={record && record.featureName}
        >
          <Input placeholder="Feature Name" />
        </Form.Item>
      </div>
      <div className="basis-1/2 px-1">
        <Form.Item
          className="ordering"
          rules={[{ required: true, message: `Required` }]}
          initialValue={record && record.ordering}
        >
          <InputNumber placeholder="Ordering" className="w-full"></InputNumber>
        </Form.Item>
      </div>
      <div className="basis-full px-1">
        <Form.Item
          name="featureType"
          className=""
          rules={[{ required: true, message: `Required` }]}
          initialValue={record && record.featureType}
        >
          <Select placeholder="feature Type" className="">
            <Option value="radio">Radio</Option>
            <Option value="multiselect">MultiSelect</Option>
            <Option value="dropdown">DropDown</Option>
            <Option value="singleBox">Price</Option>
            <Option value="doubleBox">Price Limit</Option>
            <Option value="datePicker">DatePicker</Option>
            <Option value="rule">Rule</Option>
          </Select>
        </Form.Item>
      </div>

      <div className=" basis-full px-1 text-center">
        <Form.List name={"options"}>
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map((field, index) => (
                <Form.Item key={field.key} className="">
                  <div className="flex gap-2 items-start w-full">
                    <Form.Item
                      {...field}
                      name={[index, "optionName"]}
                      style={{ width: "100%", marginBottom:0, paddingBottom:0 }}
                      rules={[{ required: true, message: `Required` }]}
                    >
                      <Input />
                    </Form.Item>
                    {fields.length > 1 ? (
                      <MinusCircleOutlined
                        className="dynamic-delete-button mt-3"
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
      <div className=" flex justify-center mb-3 gap-5 basis-full">
        <Typography>Status</Typography>
        <Form.Item noStyle>
          <Radio.Group name="radiogroup" defaultValue={"active"}>
            <Radio value={"active"}>Active</Radio>
            <Radio value={"inactive"}>Inactive</Radio>
          </Radio.Group>
        </Form.Item>
      </div>
    </Form>
  );
}
