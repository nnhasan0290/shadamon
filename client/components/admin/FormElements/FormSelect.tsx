import React, { useEffect, useState } from "react";
import { Select, Form } from "antd";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

interface data {
  label?: string;
  optionsObj?: any;
  placeholder?: string;
  name?:string
}

const FormSelect = ({ label, optionsObj, placeholder,name }: data) => {
  const { Option } = Select;
  return (
    <>
      {/* <fieldset className="common__fieldset">
        <legend className="">{label}</legend> */}
      <Form.Item
        className=""
        name={name}
        rules={[{ required: true, message: " Required" }]}
      >
        <Select className="w-full common__fieldset" placeholder={placeholder}>
          {optionsObj?.map((each: any, i: any) => (
            <Option key={i} value={each._id}>
              {each.name}
            </Option>
          ))}
        </Select>
      </Form.Item>
      {/* </fieldset> */}
    </>
  );
};

export default FormSelect;
