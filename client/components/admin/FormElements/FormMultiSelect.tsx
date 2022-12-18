import { Form, Select } from "antd";

export default function ({ label, optionsObj, placeholder, name }: any) {
  const { Option } = Select;
  return (
    <fieldset className="common__fieldset">
      <legend className="">{label}</legend>
      <Form.Item
        style={{
          marginBottom: 0,
          padding: 0,
          flexBasis: "50%",
          position: "relative",
        }}
        name={name}
        rules={[{ required: true, message: " Required" }]}
      >
        <Select
          bordered={false}
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
    </fieldset>
  );
}
