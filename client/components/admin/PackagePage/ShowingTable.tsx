import React, { useEffect } from "react";
import { Button, Popconfirm, Table, Tag } from "antd";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { BiPlus, BiTrash } from "react-icons/bi";
import { GlobalStates } from "../../../context/ContextProvider";
import CreateBundleForm from "./CreateBundleForm";

export default function ({ data, delAction, title, component }: any) {
  const dispatch = useAppDispatch();
  const { modalDispatch } = GlobalStates();
  return (
    <Table
      className="pr-2 my-2 basis-full"
      title={() => (
        <Button
        className="flex gap-2 items-center"
          type="primary"
          onClick={() =>
            modalDispatch({ type: "ADMIN_MODAL", payload: component })
          }
        >
         <BiPlus size={20} /> Add New
        </Button>
      )}
      bordered
      dataSource={data}
    >
      <Table.Column title={"Name"} dataIndex={"name"} />
      <Table.Column
        title={"Status"}
        dataIndex={"packageStatus"}
        render={(stat: any) => (
          <Tag color={stat === "active" ? "success" : "error"}>
            {stat === "active" ? "Active" : "InActive"}
          </Tag>
        )}
      />
      <Table.Column
        title={"Edit"}
        render={(_: any, record: any) => (
          <Button
            type="primary"
            onClick={() =>
              modalDispatch({
                type: "ADMIN_MODAL",
                payload: <CreateBundleForm record={record} />,
              })
            }
          >
            Edit
          </Button>
        )}
      />
      <Table.Column
        title={"Delete"}
        render={(_: any, record: any) => (
          <Popconfirm
            title="Delete the data?"
            onConfirm={(e: any) => {
              dispatch(delAction(record._id));
            }}
            onCancel={(e: any) => console.log(e)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>
              <BiTrash />
            </Button>
          </Popconfirm>
        )}
      />
    </Table>
  );
}
