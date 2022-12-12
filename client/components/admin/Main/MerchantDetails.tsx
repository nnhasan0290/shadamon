import React, { useState } from 'react';
import { Divider, Dropdown, Radio, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: React.Key;
  id: string,
  name: string;
  category: string,
  location: string,
  created: string,
  loggedIn: string,
  status:  string,
  report: string,
  rating: string,
  edited: string,
}

const items = [
    { key: '1', label: 'Action 1' },
    { key: '2', label: 'Action 2' },
  ];

const columns: ColumnsType<DataType> = [
  {
    title: 'Id',
    dataIndex: 'id',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Category',
    dataIndex: 'category',
  },
  {
    title: 'Location',
    dataIndex: 'location',
  },
  {
    title: 'Created Date',
    dataIndex: 'created',
  },
  {
    title: 'Login Time',
    dataIndex: 'loggedIn',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: () => (
      <Space size="middle">
        <Dropdown menu={{ items }}>
          <a>
            More 
          </a>
        </Dropdown>
      </Space>
    ),
  },
  {
    title: 'Report',
    dataIndex: 'report',
  },
  {
    title: 'Rating',
    dataIndex: 'rating',
  },
  {
    title: 'Edit by',
    dataIndex: 'edited',
  },
];

const data: DataType[] = [
  {
    key: '1',
    id: '827272',
    name: 'John Brown',
    category: "electronics",
    location: "malibug",
    created: "1/2/22",
    loggedIn: "1/2/33",
    status: "status",
    report: "report",
    rating: "rating",
    edited: "1/2/33"
    
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

const MerchantDetails: React.FC = () => {

  return (
    <div className='w-full'>

      <Table
        rowSelection={{
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </div>
  );
};

export default MerchantDetails;