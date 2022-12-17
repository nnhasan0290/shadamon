import { Form, Input } from "antd";

export default function ({ label,name,placeholder }: any) {
  return (
    <Form.Item
    name={name}
    className=""
    rules={[{ required: true, message: `Required` }]}
    
  >
    <fieldset className="common__fieldset">
      <legend className=""> {label}</legend>
      <Input placeholder={placeholder} className=""></Input>
    </fieldset>
  </Form.Item>

  );
}
