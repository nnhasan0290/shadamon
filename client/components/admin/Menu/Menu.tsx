import React, { useState } from 'react';
import Link from "next/link";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link href="/admin">Dashboard</Link>, '1', <PieChartOutlined />),
  getItem( <Link href="/admin/blogs">Blogs</Link>, '2', <DesktopOutlined />),
  getItem(<Link href="/admin/allProduct">All</Link>, '3', <ContainerOutlined />),
  getItem(<Link href="/admin/allProduct">Order</Link>, '4', <ContainerOutlined />),
  getItem(<Link href="/admin/allProduct">Staffing</Link>, '5', <ContainerOutlined />),
  getItem(<Link href="/admin/allProduct">Report</Link>, '6', <ContainerOutlined />),
  getItem(<Link href="/admin/allProduct">Settings</Link>, '7', <ContainerOutlined />),
  getItem(<Link href="/admin/allProduct">Blogs</Link>, '8', <ContainerOutlined />),
 
];

const SideMenu: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{ width: "auto" }}>
      <Button  type="primary" onClick={toggleCollapsed} style={{ marginBottom: 7, display: "flex", alignItems: "center", border: "1px solid lightgray" }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default SideMenu;