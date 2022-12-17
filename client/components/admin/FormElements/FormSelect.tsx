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
      <Form.Item
        className=""
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
    </>
  );
};

export default FormSelect;
