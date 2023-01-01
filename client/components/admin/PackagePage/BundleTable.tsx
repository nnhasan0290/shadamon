import React from 'react';
import { Button, Popconfirm, Table, Tag } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';



const columns:any = [
  {
    title: '',
    dataIndex: 'key',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Priority',
    dataIndex: 'priority'
  },
  {
    title: 'Active',
    dataIndex: 'active',
    render: (bool:any) => (
        <Tag color={bool ? "success" : "error"}>{bool ? "Yes" : "No"}</Tag>
    )
  },
  {
    title: 'Delete',
    align: "center",
    render: (data:any, record:any) => (
        <Popconfirm
        title="Delete the data?"
        onConfirm={(e: any) => {
        }}
        onCancel={(e: any) => console.log(e)}
        okText="Yes"
        cancelText="No"
      >
        <Button danger >
       Delete
      </Button>
      </Popconfirm>
    )
  },
  {
    title: 'Edit',
    render:(_: any, record: any) => (
         <Button type="primary" >
         Edit
       </Button>
      )
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    priority: "category Wise",
    active: false,
  },
  {
    key: '2',
    name: 'Jim Green',
    priority: "Average",
    active: true,
  },
  
];

// const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
//   console.log('params', pagination, filters, sorter, extra);
// };

const BundleTable = () => <Table bordered columns={columns} dataSource={data}  />;

export default BundleTable;