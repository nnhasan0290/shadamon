import React from 'react';
import { Space, Table, Tag } from 'antd';

const { Column, ColumnGroup } = Table;

interface DataType {
  key: React.Key;
  catName: string;
  order: string;
  entryDate: string;
  creator: string;
}

const data: DataType[] = [
  {
    key: "1",
  catName: "category name",
  order: "2",
  entryDate: "1/2/33",
  creator: "creator"
  },
];

const CatTable: React.FC = () => (
  <Table pagination={false} dataSource={data}>
      <Column title="Category" dataIndex="catName" key="catName" />
      <Column title="Order" dataIndex="order" key="order" />
    <Column title="Entry Date" dataIndex="entryDate" key="entryDate" />
    <Column title="Created By" dataIndex="creator" key="creator" />
    {/* <Column
      title="Tags"
      dataIndex="tags"
      key="tags"
      render={(tags: string[]) => (
        <>
          {tags.map((tag) => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    /> */}
    <Column
      title="Edit"
      key="edit"
      render={(_: any, record: DataType) => (
        <Space size="middle">
          <a>Edit</a>
        </Space>
      )}
    />
    <Column
      title="Delete"
      key="delete"
      render={(_: any, record: DataType) => (
        <Space size="middle">
          <a>Delete</a>
        </Space>
      )}
    />
  </Table>
);

export default CatTable;