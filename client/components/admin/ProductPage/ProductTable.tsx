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
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import {
  deleteProductAction,
  getAllProductsAction,
} from "../../../redux/actions/Admin/productAction";
import { GlobalStates } from "../../../context/ContextProvider";
import ProductCreateModal from "./ProductCreateModal";
import { RecordVoiceOver } from "@mui/icons-material";
import ImagePreviewSlider from "./ImagePreviewSlider";

const ProductTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const { modalDispatch } = GlobalStates();
  const [visible, setVisible] = useState(false);
  const { allProduct, deleteProduct, createPd, editProduct } = useAppSelector(
    (state) => state
  );
  useEffect(() => {
    dispatch(getAllProductsAction());
  }, [deleteProduct.success, createPd.success, editProduct.success]);

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
          dataIndex={"productImgs"}
          title="Image"
          width={100}
          render={(imgArr:any, record:any) => (
            <>
              {imgArr && (
                <>
                    <ImagePreviewSlider imgArr={imgArr}/>
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
            <Space
              onClick={(e) =>
                modalDispatch({
                  type: "ADMIN_MODAL",
                  payload: <ProductCreateModal record={record} />,
                })
              }
              size="middle"
            >
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
