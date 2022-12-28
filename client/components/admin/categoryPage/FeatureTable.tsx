import React, { useEffect } from "react";
import { Space, Table, Tag } from "antd";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { getFeaturesAction } from "../../../redux/actions/Admin/categoryAction";
import { GlobalStates } from "../../../context/ContextProvider";
import FeatureForm from "./FeatureForm";

const { Column } = Table;



const FeatureTable: React.FC = () => {
  const {modalDispatch} = GlobalStates();
  const dispatch = useAppDispatch();
  const {res} = useAppSelector(state => state.allFeatures)
useEffect(() => {
  dispatch(getFeaturesAction());
},[])
  return(
  <Table dataSource={res?.data}>
    <Column title="Feature  Name" dataIndex="featureName" key="featureName" />
    <Column title="Order" dataIndex="order" key="order" />
    <Column title="Input" dataIndex="featureType" key="input" />
    <Column title="status" dataIndex="status" key="status" />
    <Column
      title="Edit"
      key="edit"
      render={(_: any, record: any) => (
        <Space onClick={() => modalDispatch({type:"SMALL_MODAL", payload:<FeatureForm record={record}/>})} size="middle">
          <a>Edit</a>
        </Space>
      )}
    />
    <Column
      title="Delete"
      key="delete"
      render={(_: any, record: any) => (
        <Space size="middle">
          <a>Delete</a>
        </Space>
      )}
    />
  </Table>

  )
};

export default FeatureTable;
