import React, { useState } from "react";
import { Carousel, Divider, Dropdown, Radio, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: React.Key;
  id: string;
  productImg: any;
  name: string;
  category: string;
  location: string;
  price: string;
  reach: string;
  status: string;
  click: string;
  slot: string;
  userType: string;
  verify: string;
  accountSts: string;
  productSts: string;
  report: string;
  sign: string;
  edited: string;
}

const items = [
  { key: "1", label: "Action 1" },
  { key: "2", label: "Action 2" },
];

const columns: ColumnsType<DataType> = [
  {
    title: "Product Id",
    dataIndex: "id",
    render: (text: string) => <a>{text}</a>,
    fixed: "left",
  },
  {
    title: "Product Img",
    dataIndex: "productImg",
    width: 150,
    render: (text: string) => (
      <Carousel>
        <div>
          <img src="https://images.unsplash.com/photo-1671531009361-8846ff0d7ae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" className="h-[80px]"/>
        </div>
        <div>
          <img src="https://plus.unsplash.com/premium_photo-1661715499352-51bf121480d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" className="h-[80px]"/>
        </div>
        <div>
          <img src="https://plus.unsplash.com/premium_photo-1661715499352-51bf121480d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" className="h-[80px]"/>
        </div>
        <div>
          <img src="https://plus.unsplash.com/premium_photo-1661715499352-51bf121480d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" className="h-[80px]"/>
        </div>
      </Carousel>
    ),
    fixed: "left",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Category",
    dataIndex: "category",
  },
  {
    title: "Location",
    dataIndex: "location",
  },
  {
    title: "Price",
    dataIndex: "price",
  },
  {
    title: "React",
    dataIndex: "reach",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: () => (
      <Space size="middle">
        <Dropdown menu={{ items }}>
          <a>More</a>
        </Dropdown>
      </Space>
    ),
  },
  {
    title: "Click",
    dataIndex: "click",
  },
  {
    title: "Slot Sits",
    dataIndex: "slot",
  },
  {
    title: "User Type",
    dataIndex: "userType",
  },
  {
    title: "Verify",
    dataIndex: "verify",
  },
  {
    title: "Account Sts",
    dataIndex: "accountSts",
  },
  {
    title: "Product Sts",
    dataIndex: "productSts",
  },
  {
    title: "Report",
    dataIndex: "report",
  },
  {
    title: "Sign",
    dataIndex: "sign",
  },
  {
    title: "Edited",
    dataIndex: "edited",
    fixed: "right",
  },
];

const data: DataType[] = [
  {
    key: "1",
    id: "827272",
    name: "John Brown",
    category: "electronics",
    location: "malibug",
    price: "37837",
    reach: "8373",
    status: "status",
    click: "837",
    slot: "37",
    userType: "Post Pro",
    verify: "Mobile",
    accountSts: "active",
    productSts: "active",
    report: "active",
    sign: "active",
    edited: "active",
    productImg: [],
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.name === "Disabled User", // Column configuration not to be checked
    name: record.name,
  }),
};

const ProductTable: React.FC = () => {
  return (
    <div className="w-full">
      <Table
        rowSelection={{
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{ x: 2000 }}
      />
    </div>
  );
};

export default ProductTable;
