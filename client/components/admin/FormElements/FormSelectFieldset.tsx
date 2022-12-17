import React, { useEffect, useState } from "react";
import { Select, Form } from "antd";

interface data {
  label?: string;
  optionsObj?: any;
  placeholder?: string;
  name?: string;
}

const FormSelectWithFieldset = ({ label, optionsObj, placeholder, name }: data) => {
  const { Option } = Select;
  return (
    <>
      <fieldset className="mx-2 common__fieldset">
        <legend className="">{label}</legend>
        <Form.Item
          className=""
          noStyle
          name={name}
          
          rules={[{ required: true, message: " Required" }]}
        >
          <Select getPopupContainer={trigger => trigger.parentNode} className="w-full rounded-md" placeholder={placeholder} >
            {optionsObj?.map((each: any, i: any) => (
              <Option key={i} value={each._id}>
                {each.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </fieldset>
    </>
  );
};

export default FormSelectWithFieldset;
