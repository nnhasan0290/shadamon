import React, { useEffect, useState } from "react";
import { Carousel, Divider, Dropdown, Image, Radio, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { getAllProductsAction } from "../../../redux/actions/Admin/productAction";

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
        {
          imgArr?.map((each:any,i:any) => (
            <div>
            <img
              src={`${process.env.NEXT_PUBLIC_HOST}/img/${each.img}`}
              alt=""
              className="h-[50px] object-cover w-full"
            />
          </div>
          ))
        }
      </Carousel>
      
    ),
    fixed: "left",
    
  },
  
  {
    title: "Id",
    dataIndex: "_id",
    render: (text: string) => <div className=" truncate w-full"><span>{text}</span></div>,
  },
  {
    title: "Name",
    dataIndex: "heading",
    render: (text: string) => <div className=" truncate w-full"><span>{text}</span></div>,
  },
  {
    title: "Category",
    align:"center",
    dataIndex: "categoryId",
    render: (arr:any)=> arr.categoryName ,
    ellipsis:true,
  },
  {
    title: "Location",
    ellipsis:true,
    dataIndex: "location",
    render: (arr:any) => arr?.location
  },
  {
    title: "Price",
    ellipsis:true,
    dataIndex: "price",
  },
  {
    title: "Reach",
    ellipsis:true,
    dataIndex: "reach",
  },
  {
    title: "Status",
    ellipsis:true,
    dataIndex: "status",
    key: "status"
  },
  {
    title: "Click",
    ellipsis:true,
    dataIndex: "click",
  },
  {
    title: "S. Status",
    ellipsis:true,
    dataIndex: "slotStatus",
  },
  {
    title: "User Type",
    ellipsis:true,
    dataIndex: "userType",
  },
  {
    title: "Verify",
    ellipsis:true,
    dataIndex: "verify",
  },
  {
    title: "Qty",
    ellipsis:true,
    dataIndex: "quantity",
  },
  {
    title: "Pd. Status",
    ellipsis:true,
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


// const data: DataType[] = [
//   {
//     key: "1",
//     id: "827272",
//     name: "John Brown",
//     category: "electronics",
//     location: "malibug",
//     price: "37837",
//     reach: "8373",
//     status: "status",
//     click: "837",
//     slot: "37",
//     userType: "Post Pro",
//     verify: "Mobile",
//     accountSts: "active",
//     productSts: "active",
//     report: "active",
//     sign: "active",
//     edited: "active",
//     productImg: [],
//   },
// ];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  // getCheckboxProps: (record: DataType) => ({
  //   disabled: record.name === "Disabled User", // Column configuration not to be checked
  //   name: record.name,
  // }),
};

const ProductTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const [visible, setVisible] = useState(false);
  const { allProduct } = useAppSelector((state) => state);
  console.log(allProduct);
  useEffect(() => {
    dispatch(getAllProductsAction());
  }, []);


  return (
    <div className="w-full">
      <Table
      size="small"
      showSorterTooltip={true}
      bordered
        dataSource={[{img:[]}]}
        scroll={{ x: 1400 }}
        pagination={{defaultPageSize:5}}
        
      >
        <Table.Column dataIndex={"img"} title="Image" width={100} render={() => (
           <>
           <Image
             preview={{ visible: false }}
             width={80}
             height={50}
             className="object-cover"
             src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
             onClick={() => setVisible(true)}
           />
           <div style={{ display: 'none' }}>
             <Image.PreviewGroup preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}>
               <Image src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
               <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
               <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
             </Image.PreviewGroup>
           </div>
           </>
        )}/>
      </Table>
    </div>
  );
};

export default ProductTable;
