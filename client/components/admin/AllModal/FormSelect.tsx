import React from "react";
import { Select, Form } from "antd";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const FormSelect: React.FC = () => (
  <>
    <Form.Item
      style={{
        marginBottom: 0,
        padding: 0,
        flexBasis: "50%",
        position: "relative",
      }}
    >
      <fieldset className="common__fieldset">
        <legend className="">label</legend>
        <Select
          defaultValue="lucy"
          style={{ width: "100%" }}
          onChange={handleChange}
          options={[
            {
              value: "jack",
              label: "Jack",
            },
            {
              value: "lucy",
              label: "Lucy",
            },
            {
              value: "disabled",
              disabled: true,
              label: "Disabled",
            },
            {
              value: "Yiminghe",
              label: "yiminghe",
            },
          ]}
        />
      </fieldset>
    </Form.Item>
  </>
);

export default FormSelect;
