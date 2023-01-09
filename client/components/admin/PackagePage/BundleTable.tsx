import React, { useEffect } from "react";
import { Button, Popconfirm, Table, Tag } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { getAllPackageAction } from "../../../redux/actions/Admin/packageAction";

const columns: any = [
  {
    title: "",
    render: (_:any, record:any, index:any) => index+1
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Priority",
    dataIndex: "priority",
  },
  {
    title: "Active",
    dataIndex: "packageStatus",
    render: (bool: any) => (
      <Tag color={bool ? "success" : "error"}>{bool ? "Yes" : "No"}</Tag>
    ),
  },
  {
    title: "Delete",
    align: "center",
    render: (data: any, record: any) => (
      <Popconfirm
        title="Delete the data?"
        onConfirm={(e: any) => {}}
        onCancel={(e: any) => console.log(e)}
        okText="Yes"
        cancelText="No"
      >
        <Button danger>Delete</Button>
      </Popconfirm>
    ),
  },
  {
    title: "Edit",
    render: (_: any, record: any) => <Button type="primary">Edit</Button>,
  },
];

// const data = [
//   {
//     key: "1",
//     name: "John Brown",
//     priority: "category Wise",
//     active: false,
//   },
//   {
//     key: "2",
//     name: "Jim Green",
//     priority: "Average",
//     active: true,
//   },
// ];

const BundleTable = () => {
    const dispatch = useAppDispatch();
    const {allPackages:{res:{data}},createPg} = useAppSelector((state) => state)
    useEffect(() => {
      dispatch(getAllPackageAction());
    },[createPg.success])
  return (
    <>
      <Table bordered columns={columns} dataSource={data} />
    </>
  );
};

export default BundleTable;
