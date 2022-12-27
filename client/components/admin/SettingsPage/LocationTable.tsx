import React, { useEffect } from "react";
import { Popconfirm, Space, Table, Tag } from "antd";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import {
  getAllCategories,
  getLocationAction,
} from "../../../redux/actions/Admin/categoryAction";
import ParentLocationModal from "./ParentLocationModal";
import { GlobalStates } from "../../../context/ContextProvider";
import { deleteParentLocationAction } from "../../../redux/actions/Admin/locationAction";
import LocationCreateModal from "./LocationCreateModal";

const { Column, ColumnGroup } = Table;

interface DataType {
  key: React.Key;
  locationName: string;
  ordering: string;
  status: string;
  createdAt: string;
}
const data: any = [];
for (let i = 0; i < 3; ++i) {
  data.push({
    key: i.toString(),
    name: "Screen",
    ordering: 2,
  });
}

const LocationTable: React.FC = () => {
  const { modalDispatch } = GlobalStates();
  const dispatch = useAppDispatch();
  const {
    locations,
    deleteParentLoc,
    editParentLocation,
    createLocation,
    createParentLocation,
  }: any = useAppSelector((state) => state);
  console.log(locations);
  useEffect(() => {
    dispatch(getLocationAction());
  }, [
    deleteParentLoc.success,
    editParentLocation.success,
    createLocation.success,
    createParentLocation.success,
  ]);
  return (
    <Table
      onChange={() => dispatch(getLocationAction())}
      rowKey={(record: any) => record.location._id}
      dataSource={locations?.res?.data}
      expandable={{
        rowExpandable: (record: any) => true,
        expandedRowRender: (record: any) => {
          return (
            <Table

              size="small"
              bordered
              className="mt-1 mb-5"
              pagination={{defaultPageSize:3}}
              dataSource={record.sublocations}
            >
              <Column
                title="Sub Location"
                dataIndex="subLocationName"
                key="subLocationName"
              />
              <Column title="Link" dataIndex="link" key="link" ellipsis={true} render={(link) => <a>{link}</a>} />
              <Column title="Order" dataIndex="ordering" key="ordering" align="center"/>
              <Column
                title="Entry Date"
                dataIndex="createdAt"
                key="createdAt"
                ellipsis={true}
                render={(date) => <span>{date}</span>}
              />
              <Column title="Status" dataIndex="status" key="status" />

              <Column
                title="Edit"
                key="edit"
                render={(_: any, record:any) => (
                  <Space
                    onClick={(e: any) =>
                      modalDispatch({
                        type: "SMALL_MODAL",
                        payload: <LocationCreateModal record={record} />,
                      })
                    }
                    size="middle"
                  >
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
          );
        },
      }}
    >
      <Column title="Location" dataIndex="location" key="locationName"  render={(record) => record.locationName}/>
      <Column title="Order" dataIndex="location" key="ordering" render={(record) => record.ordering} />
      <Column title="Entry Date" dataIndex="location" key="createdAt" render={(record) => record.createdAt} />
      <Column title="Status" dataIndex="location" key="status" render={(record) => record.status}/>

      <Column
        title="Edit"
        key="edit"
        render={(_: any, record: any) => (
          <Space
            onClick={(e: any) =>
              modalDispatch({
                type: "MIDDLE_MODAL",
                payload: <ParentLocationModal record={record.location} />,
              })
            }
            size="middle"
          >
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
              dispatch(deleteParentLocationAction(record.location._id));
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
  );
};

export default LocationTable;
