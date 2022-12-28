import React, { useEffect } from "react";
import { Popconfirm, Space, Table, Tag } from "antd";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import {
  deleteCategoryAction,
  deleteSubCategoryAction,
  getAllCategories,
} from "../../../redux/actions/Admin/categoryAction";
import { GlobalStates } from "../../../context/ContextProvider";
import SmallCreateCat from "./SmallCreateCat";
import { spawn } from "child_process";
import CatCreateForm from "./CatCreateForm";

const { Column } = Table;

const CatTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const { allCat, deleteCat, createCat, editCat, createSub, deleteSub,editSub } =
    useAppSelector((state) => state);
  console.log(createCat);
  const { modalDispatch } = GlobalStates();
  useEffect(() => {
    dispatch(getAllCategories());
  }, [
    deleteCat.success,
    createCat.success,
    editCat.success,
    createSub.success,
    deleteSub.success,
    editSub.success,
  ]);
  return (
    <Table
      bordered
      rowKey={(record: any) => record.category._id}
      pagination={{ defaultPageSize: 6 }}
      dataSource={allCat?.res?.data}
      expandable={{
        rowExpandable: (record: any) => true,
        expandedRowRender: (record) => {
          return (
            <Table
              pagination={{ defaultPageSize: 5 }}
              dataSource={record.subCategory}
              bordered
              size="small"
            >
              <Column
                title={"Sub Category"}
                dataIndex={"subCategoryName"}
                key={"subCategoryName"}
              />
              <Column
                title={"Free Post"}
                dataIndex={"freePost"}
                key={"freePost"}
              />
              <Column title={"Order"} dataIndex={"ordering"} key={"order"} />
              <Column title={"Status"} dataIndex={"status"} key={"status"} />
              <Column
                title="Edit"
                key="edit"
                render={(_: any, record: any) => (
                  <Space
                    onClick={(e: any) =>
                      modalDispatch({
                        type: "ADMIN_MODAL",
                        payload: <CatCreateForm record={record} />,
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
                      dispatch(deleteSubCategoryAction(record._id));
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
        },
      }}
    >
      <Column
        title="Image"
        align="center"
        dataIndex="category"
        key="categoryImg"
        render={(cat) => (
          <img
            src={`${process.env.NEXT_PUBLIC_HOST}/img/${cat.categoryImg}`}
            className="h-[30px] mx-auto"
          />
        )}
      />
      <Column
        title="Category"
        dataIndex="category"
        key="catName"
        align="center"
        render={(category) => category.categoryName}
      />
      <Column
        title="Order"
        dataIndex="category"
        key="order"
        align="center"
        render={(cat) => cat.categoryOrder}
      />
      <Column
        title="Entry Date"
        dataIndex="category"
        key="entryDate"
        align="center"
        render={(cat) => <span>{new Date(cat.createdAt).toDateString()}</span>}
      />

      <Column
        title="Edit"
        key="edit"
        render={(_: any, record: any) => (
          <Space
            onClick={(e: any) =>
              modalDispatch({
                type: "SMALL_MODAL",
                payload: <SmallCreateCat record={record.category} />,
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
              dispatch(deleteCategoryAction(record.category._id));
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
