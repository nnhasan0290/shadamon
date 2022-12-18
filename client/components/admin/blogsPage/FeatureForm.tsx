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
import FormSelect from "../FormElements/FormSelect";
import SmallCreateCat from "./SmallCreateCat";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import FormMultiSelect from "../FormElements/FormMultiSelect";
import FormInput from "../FormElements/FormInput";

export default function () {
  return (
    <Form className="flex flex-wrap justify-between basis-full">
      <div className="flex gap-2 items-center font-bold">
        <span className="p-1 text-white bg-gray-700 rounded-full">
          <BiPlus />
        </span>
        <h4>New Feature</h4>
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
      <div className="basis-[250px]">
        <FormInput placeholder="Feature Name" />
      </div>
      <div className="basis-[250px]">
        <FormInput placeholder="Feature Default Value" />
      </div>
      <div className="basis-[250px]">
        <FormSelect placeholder="Feature Type" label="" />
      </div>
      <div className="basis-[250px]">
        <Input placeholder="date"/>
      </div>
      <div className="basis-[250px]">
        <InputNumber placeholder="Ordering" className="w-full"></InputNumber>
      </div>
      <div className="basis-[250px]">
        <Form.List name="names">
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map((field, index) => (
                <Form.Item required={false} key={field.key} className="">
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
                      <Input placeholder="SubCategory name" />
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
                  className="hover:bg-blue-600"
                  type="dashed"
                  onClick={() => add()}
                  icon={<PlusOutlined />}
                >
                  Add Feature
                </Button>
                <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          )}
        </Form.List>
      </div>
      <div className="basis-[250px] flex justify-between">
        <Typography>Status</Typography>
        <Radio.Group name="radiogroup" defaultValue={1}>
          <Radio value={1}>Yes</Radio>
          <Radio value={2}>No</Radio>
        </Radio.Group>
      </div>
    </Form>
  );
}
