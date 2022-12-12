import React from 'react';
import { Select } from 'antd';

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const Selection: React.FC = () => (
  <>
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'disabled',
          disabled: true,
          label: 'Disabled',
        },
        {
          value: 'Yiminghe',
          label: 'yiminghe',
        },
      ]}
    />
  </>
);

export default Selection;