import { Form, Input } from "antd";

export default function ({ label,name,placeholder }: any) {
  return (
    <Form.Item
    name={name}
    className="w-full"
    rules={[{ required: true, message: `Required` }]}
    
  >
    <fieldset className="common__fieldset">
      <legend className=""> {label}</legend>
      <Input placeholder={placeholder} className="p-0 px-3 pb-0 m-0"></Input>
    </fieldset>
  </Form.Item>

  );
}
