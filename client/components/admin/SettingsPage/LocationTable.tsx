import React, { useEffect } from "react";
import { Space, Table, Tag } from "antd";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import {
  getAllCategories,
  getLocationAction,
} from "../../../redux/actions/Admin/categoryAction";
import ParentLocationModal from "./ParentLocationModal";
import { GlobalStates } from "../../../context/ContextProvider";
import { deleteParentLocationAction } from "../../../redux/actions/Admin/locationAction";

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
  const { locations } = useAppSelector((state) => state);
  console.log(locations);
  useEffect(() => {
    dispatch(getLocationAction());
  }, [locations]);
  return (
    <Table
      rowKey={(record: any) => record._id}
      dataSource={locations?.res?.data}
      expandable={{
        rowExpandable: (record: any) => true,
        expandedRowRender: (record: any) => {
          return (
            <Table
              size="small"
              bordered
              className="mt-1 mb-5"
              pagination={false}
              dataSource={data}
            >
              <Column
                title="Sub Location"
                dataIndex="subLocationName"
                key="subLocationName"
              />
              <Column title="Name" dataIndex="name" key="name" />
              <Column
                title="Entry Date"
                dataIndex="createdAt"
                key="createdAt"
              />
              <Column title="Status" dataIndex="status" key="status" />

              <Column
                title="Edit"
                key="edit"
                render={(_: any, record: DataType) => (
                  <Space
                    onClick={(e: any) =>
                      modalDispatch({
                        type: "MIDDLE_MODAL",
                        payload: <ParentLocationModal record={record} />,
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
      <Column title="Location" dataIndex="locationName" key="locationName" />
      <Column title="Order" dataIndex="ordering" key="ordering" />
      <Column title="Entry Date" dataIndex="createdAt" key="createdAt" />
      <Column title="Status" dataIndex="status" key="status" />

      <Column
        title="Edit"
        key="edit"
        render={(_: any, record: DataType) => (
          <Space
            onClick={(e: any) =>
              modalDispatch({
                type: "MIDDLE_MODAL",
                payload: <ParentLocationModal record={record} />,
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
            <a color="red">Delete</a>
          </Space>
        )}
      />
    </Table>
  );
};

export default LocationTable;
