import React, { useEffect, useState } from "react";
import { Select, Form } from "antd";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

interface data {
  label?: string;
  optionsObj?: any;
  placeholder?: string;
  name?:string;
}

const FormSelect = ({ label, optionsObj, placeholder,name }: data) => {
  const { Option } = Select;
  return (
    <>
      {/* <fieldset className="common__fieldset">
        <legend className="">{label}</legend> */}
      <Form.Item
        className="mx-2"
        name={name}
        rules={[{ required: true, message: " Required" }]}
      >
        <Select getPopupContainer={trigger => trigger.parentNode} className="common__fieldset" placeholder={placeholder}>
          {optionsObj?.map((each: any, i: any) => (
            <Option key={i} value={each._id}>
              {each.name ? each.name : each.categoryName}
            </Option>
          ))}
        </Select>
      </Form.Item>
      {/* </fieldset> */}
    </>
  );
};

export default FormSelect;
