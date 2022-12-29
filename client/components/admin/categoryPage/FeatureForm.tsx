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
import { useAppDispatch } from "../../../redux/hook";
import { createFeatureAction, editFeatureAction } from "../../../redux/actions/Admin/categoryAction";
const { Option } = Select;

export default function ({ record }: any) {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();

  const featureType = Form.useWatch('featureType', form);

  const onFinish = (values: any) => {
    if(record){
      dispatch(editFeatureAction({...values, id: record._id}))
    }else{
      dispatch(createFeatureAction(values));
    }
  };


  return (
    <Form
      onFinish={onFinish}
      className="flex flex-wrap justify-between basis-full"
      form={form}
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
          name="featureOrdering"
          rules={[{ required: true, message: `Required` }]}
          initialValue={record && record.featureOrdering}
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
            <Option value="select">Select</Option>
            <Option value="multiselect">MultiSelect</Option>
            <Option value="singleinput">Single Input</Option>
            <Option value="doubleinput">Double Input</Option>
            <Option value="checkinput">Input With Checkbox</Option>
            <Option value="datepicker">DatePicker</Option>
            <Option value="rule">Rule</Option>
          </Select>
        </Form.Item>
      </div>


{
  ((featureType === "radio") || (featureType === "select") || (featureType === "multiselect")) && (
    <div className=" basis-full px-1 text-center">
    <Form.List name={"options"} initialValue={record && record.options}>
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
                  <Input placeholder="Feature Option" />
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
  )
}
      
      <div className=" flex justify-center mb-3 gap-5 basis-full">
        <Typography>Status</Typography>
        <Form.Item noStyle name={"status"} initialValue={record ? record.status : "active"}>
          <Radio.Group name="radiogroup" defaultValue={record ? record.status : "active"}>
            <Radio value={"active"}>Active</Radio>
            <Radio value={"inactive"}>Inactive</Radio>
          </Radio.Group>
        </Form.Item>
      </div>
    </Form>
  );
}
