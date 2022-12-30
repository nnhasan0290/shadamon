import React, { useEffect, useState } from "react";
import {
  Carousel,
  Divider,
  Dropdown,
  Image,
  Popconfirm,
  Radio,
  Space,
  Table,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import {
  deleteProductAction,
  getAllProductsAction,
} from "../../../redux/actions/Admin/productAction";

interface DataType {
  key: React.Key;
  _id: string;
  productImg: any;
  heading: string;
  categoryId: string;
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

const firstColumns: any = [
  {
    title: "Img",
    dataIndex: "productImg",
    width: 100,
    ellipsis: true,
    render: (imgArr: any) => (
      <Carousel>
        {imgArr?.map((each: any, i: any) => (
          <div>
            <img
              src={`${process.env.NEXT_PUBLIC_HOST}/img/${each.img}`}
              alt=""
              className="h-[50px] object-cover w-full"
            />
          </div>
        ))}
      </Carousel>
    ),
    fixed: "left",
  },

  {
    title: "Id",
    dataIndex: "_id",
    render: (text: string) => (
      <div className=" truncate w-full">
        <span>{text}</span>
      </div>
    ),
  },
  {
    title: "Name",
    dataIndex: "heading",
    render: (text: string) => (
      <div className=" truncate w-full">
        <span>{text}</span>
      </div>
    ),
  },
  {
    title: "Category",
    align: "center",
    dataIndex: "categoryId",
    render: (arr: any) => arr.categoryName,
    ellipsis: true,
  },
  {
    title: "Location",
    ellipsis: true,
    dataIndex: "location",
    render: (arr: any) => arr?.location,
  },
  {
    title: "Price",
    ellipsis: true,
    dataIndex: "price",
  },
  {
    title: "Reach",
    ellipsis: true,
    dataIndex: "reach",
  },
  {
    title: "Status",
    ellipsis: true,
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Click",
    ellipsis: true,
    dataIndex: "click",
  },
  {
    title: "S. Status",
    ellipsis: true,
    dataIndex: "slotStatus",
  },
  {
    title: "User Type",
    ellipsis: true,
    dataIndex: "userType",
  },
  {
    title: "Verify",
    ellipsis: true,
    dataIndex: "verify",
  },
  {
    title: "Qty",
    ellipsis: true,
    dataIndex: "quantity",
  },
  {
    title: "Pd. Status",
    ellipsis: true,
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

const ProductTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const [visible, setVisible] = useState(false);
  const { allProduct, deleteProduct } = useAppSelector((state) => state);
  useEffect(() => {
    dispatch(getAllProductsAction());
  }, [deleteProduct.success]);

  return (
    <div className="w-full">
      <Table
        size="small"
        rowKey={(record: any) => record._id}
        showSorterTooltip={true}
        bordered
        dataSource={allProduct?.res?.data}
        scroll={{ x: 1400 }}
        pagination={{ defaultPageSize: 5 }}
        expandable={{
          rowExpandable: (record: any) => true,
          defaultExpandAllRows: true,
          expandedRowRender: (record: any) => (
            <div className="flex border-b items-center  my-0">
              <p className="basis-1/3 mr-2">
                <span className="text-xs text-gray-500">Heading:</span>{" "}
                {record?.heading}
              </p>
              <p className=" basis-2/3">
                <span className="text-xs text-gray-500"> Description:</span>{" "}
                {record?.description}
              </p>
            </div>
          ),
        }}
      >
        <Table.Column
          align="center"
          dataIndex={"productImg"}
          title="Image"
          width={100}
          render={(imgArr) => (
            <>
              {imgArr && (
                <>
                  <Image
                    preview={{ visible: false }}
                    width={80}
                    height={40}
                    className="object-cover"
                    src={`${process.env.NEXT_PUBLIC_HOST}/img/${imgArr[0]?.img}`}
                    onClick={() => setVisible(true)}
                  />
                  <div style={{ display: "none" }}>
                    <Image.PreviewGroup
                      preview={{
                        visible,
                        onVisibleChange: (vis) => setVisible(vis),
                      }}
                    >
                      {imgArr?.map((img: any, i: any) => (
                        <Image
                          key={i}
                          src={`https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60`}
                        />
                      ))}
                    </Image.PreviewGroup>
                  </div>
                </>
              )}
            </>
          )}
        />
        <Table.Column
          align="center"
          title="id"
          dataIndex={"_id"}
          ellipsis={true}
        />
        <Table.Column
          align="center"
          title="Status"
          dataIndex={"productStatus"}
          ellipsis={true}
        />
        <Table.Column
          align="center"
          title="Price"
          dataIndex={"payablePrice"}
          ellipsis={true}
        />
        <Table.Column
          align="center"
          title="Reach"
          dataIndex={"reach"}
          ellipsis={true}
        />
        <Table.Column
          align="center"
          title="Click"
          dataIndex={"click"}
          ellipsis={true}
        />
        <Table.Column
          align="center"
          title="Verify"
          dataIndex={"verify"}
          ellipsis={true}
        />
        <Table.Column
          align="center"
          title="Order"
          dataIndex={"productOrder"}
          ellipsis={true}
        />
        <Table.Column
          align="center"
          title="Qty"
          key={"quantity"}
          ellipsis={true}
          render={(record: any) => record.quantity}
        />
        <Table.Column
          align="center"
          title="Edit"
          fixed="right"
          key="edit"
          render={(_: any, record: any) => (
            <Space size="middle">
              <a>Edit</a>
            </Space>
          )}
        />
        <Table.Column
          align="center"
          fixed="right"
          title="Delete"
          key="delete"
          render={(_: any, record: any) => (
            <Popconfirm
              title="Delete the data?"
              onConfirm={(e: any) => {
                dispatch(deleteProductAction(record._id));
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
    </div>
  );
};

export default ProductTable;
