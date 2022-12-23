import React, { useEffect, useState } from "react";
import { Carousel, Divider, Dropdown, Radio, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { getAllProductsAction } from "../../../redux/actions/Admin/productAction";

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
  slotStatus: string;
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

const columns: any = [
  {
    title: "Product Img",
    dataIndex: "productImg",
    width: 100,
    render: (imgArr: any) => (
      <Carousel>
        {
          imgArr?.map((each:any,i:any) => (
            <div>
            <img
              src={`${process.env.NEXT_PUBLIC_HOST}/img/${each.img}`}
              alt=""
              className="h-[50px] object-cover w-full"
            />
          </div>
          ))
        }
      </Carousel>
    ),
    fixed: "left",
  },
  {
    title: "Id",
    dataIndex: "id",
    render: (text: string) => <a>{text}</a>,
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
    dataIndex: "loction",
  },
  {
    title: "Price",
    dataIndex: "price",
  },
  {
    title: "Reach",
    dataIndex: "reach",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status"
  },
  {
    title: "Click",
    dataIndex: "click",
  },
  {
    title: "S. Status",
    dataIndex: "slotStatus",
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
    title: "Qty",
    dataIndex: "quantity",
  },
  {
    title: "Pd. Status",
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
  },
];

// const data: DataType[] = [
//   {
//     key: "1",
//     id: "827272",
//     name: "John Brown",
//     category: "electronics",
//     location: "malibug",
//     price: "37837",
//     reach: "8373",
//     status: "status",
//     click: "837",
//     slot: "37",
//     userType: "Post Pro",
//     verify: "Mobile",
//     accountSts: "active",
//     productSts: "active",
//     report: "active",
//     sign: "active",
//     edited: "active",
//     productImg: [],
//   },
// ];

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
  const dispatch = useAppDispatch();
  const { allProduct } = useAppSelector((state) => state);
  console.log(allProduct);
  useEffect(() => {
    dispatch(getAllProductsAction());
  }, []);

  return (
    <div className="w-full">
      <Table
      bordered
        columns={columns}
        dataSource={allProduct?.res?.data}
        scroll={{ x: 1400 }}
        pagination={{defaultPageSize:5}}
      />
    </div>
  );
};

export default ProductTable;
