import React, { useEffect } from "react";
import { Popconfirm, Space, Table, Tag } from "antd";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import {
  deleteCategoryAction,
  getAllCategories,
} from "../../../redux/actions/Admin/categoryAction";
import { GlobalStates } from "../../../context/ContextProvider";
import SmallCreateCat from "./SmallCreateCat";
import { spawn } from "child_process";

const { Column, ColumnGroup } = Table;

const data =[
  {name: "nazmul", lastName: "hasan", }
]

const CatTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const { allCat, deleteCat, createCat, editCat } = useAppSelector(
    (state) => state
  );
  const { modalDispatch } = GlobalStates();
  useEffect(() => {
    dispatch(getAllCategories());
  }, [deleteCat.success, createCat.success, editCat.success]);
  return (
    <Table
    bordered
      rowKey={(record: any) => record._id}
      pagination={{ defaultPageSize: 6 }}
      dataSource={allCat?.res?.data}
      expandable={{
        rowExpandable: (record: any) => true,
        expandedRowRender: (record) => {
          return(
            <Table dataSource={data} bordered size="small">
              <Column title={"name"} dataIndex={"name"} key={"name"}/>
              <Column title={"lastName"} dataIndex={"lastName"} key={"name"}/>
            </Table>
          )
        }
      }}
    >
      <Column
        title="Image"
        align="center"
        dataIndex="categoryImg"
        key="categoryImg"
        render={(imglink) => (
          <img
            src={`${process.env.NEXT_PUBLIC_HOST}/img/${imglink}`}
            className="h-[30px] mx-auto"
          />
        )}
      />
      <Column
        title="Category"
        dataIndex="categoryName"
        key="catName"
        align="center"
      />
      <Column
        title="Order"
        dataIndex="categoryOrder"
        key="order"
        align="center"
      />
      <Column
        title="Entry Date"
        dataIndex="createdAt"
        key="entryDate"
        align="center"
        render={(date) => <span>{new Date(date).toDateString()}</span>}
      />

      <Column
        title="Edit"
        key="edit"
        render={(_: any, record: any) => (
          <Space
            onClick={(e: any) =>
              modalDispatch({
                type: "SMALL_MODAL",
                payload: <SmallCreateCat record={record} />,
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
              dispatch(deleteCategoryAction(record._id));
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

export default CatTable;
