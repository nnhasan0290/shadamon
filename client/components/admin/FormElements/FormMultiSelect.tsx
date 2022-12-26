import { Form, Select } from "antd";

export default function ({ label, optionsObj, placeholder, name }: any) {
  const { Option } = Select;
  return (
      <Form.Item
        name={name}
        rules={[{ required: true, message: "Required" }]}
      >
        <Select
          getPopupContainer={(trigger) => trigger.parentNode}
          mode="tags"
          placeholder={placeholder}
          style={{ width: "100%", whiteSpace: "nowrap" }}
        >
          {optionsObj?.map((each: any, i: any) => (
            <Option key={i} value={each._id}>
              {each.featureName}
            </Option>
          ))}
        </Select>
      </Form.Item>
  );
}
