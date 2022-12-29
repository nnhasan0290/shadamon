import React, { useEffect } from "react";
import { Popconfirm, Space, Table, Tag } from "antd";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { deleteFeatureAction, getFeaturesAction } from "../../../redux/actions/Admin/categoryAction";
import { GlobalStates } from "../../../context/ContextProvider";
import FeatureForm from "./FeatureForm";

const { Column } = Table;



const FeatureTable: React.FC = () => {
  const {modalDispatch} = GlobalStates();
  const dispatch = useAppDispatch();
  const {allFeatures:{res},createFeature, deleteFeature, editFeature} = useAppSelector(state => state)
useEffect(() => {
  dispatch(getFeaturesAction());
},[createFeature.success,deleteFeature.success, editFeature.success])
  return(
  <Table dataSource={res?.data}>
    <Column title="Feature  Name" dataIndex="featureName" key="featureName" />
    <Column title="Order" dataIndex="featureOrdering" key="order" />
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
          <Popconfirm
            title="Delete the data?"
            onConfirm={(e: any) => {
              dispatch(deleteFeatureAction(record._id));
            }}
            onCancel={(e: any) => console.log(e)}
            okText="Yes"
            cancelText="No"
          >
            <Space size="middle">
              <a>Delete</a>
            </Space>
          </Popconfirm>
        )}
      />
  </Table>

  )
};

export default FeatureTable;
