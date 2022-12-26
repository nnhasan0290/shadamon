import {
  UserOutlined,
  BellOutlined,
  ArrowRightOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";

export default function () {
  return (
    <div className="flex gap-2 justify-end items-center py-1 border-b shadow-sm">
      <span className="flex justify-center items-center p-2 bg-green-400 rounded-md">
        <BellOutlined />
      </span>
      <Avatar shape="square" icon={<UserOutlined />} />
      <div className="leading-3">
        <h5 className="font-semibold">Test Admin</h5>
        <span className="text-sm leading-3 text-gray-400">Developer</span>
      </div>
      <ExclamationCircleOutlined className="px-1 border-r border-l" />
      <ArrowRightOutlined />
    </div>
  );
}
