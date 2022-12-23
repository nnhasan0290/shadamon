import React, { useEffect } from "react";
import { Space, Table, Tag } from "antd";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { getFeaturesAction } from "../../../redux/actions/Admin/categoryAction";

const { Column, ColumnGroup } = Table;

interface DataType {
  key: React.Key;
  featureName: string;
  input: string;
  order: number;
  status: boolean;
}

const data: DataType[] = [
  {
    key: "1",
    featureName: "Feature Name",
    input: "Text",
    order: 1,
    status: true,
  },
];

const FeatureTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const {res} = useAppSelector(state => state.allFeatures)
useEffect(() => {
  dispatch(getFeaturesAction());
},[])
  return(
  <Table dataSource={res?.data}>
    <Column title="Feature  Name" dataIndex="featureName" key="featureName" />
    <Column title="Order" dataIndex="order" key="order" />
    <Column title="Input" dataIndex="input" key="input" />
    <Column title="status" dataIndex="status" key="status" />
    <Column
      title="Edit"
      key="edit"
      render={(_: any, record: DataType) => (
        <Space size="middle">
          <a>Edit</a>
        </Space>
      )}
    />
    <Column
      title="Delete"
      key="delete"
      render={(_: any, record: DataType) => (
        <Space size="middle">
          <a>Delete</a>
        </Space>
      )}
    />
  </Table>

  )
};

export default FeatureTable;
