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
  SettingOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import { useRouter } from 'next/router';

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
  getItem(<Link href="/admin/allProduct">All Product</Link>, '2', <ContainerOutlined />),
  getItem('Order', '3', <ContainerOutlined />),
  getItem('Staffing', '4', <ContainerOutlined />),
  getItem('Report', '5', <ContainerOutlined />),
  getItem(<span className='mr-5'>Settings</span> , 'subMenu', <SettingOutlined />,  [
    getItem(<Link href="/admin/category">Categories</Link>, '8'),
    getItem(<Link href="/admin/locations">Location</Link>, '9'),
    getItem('Merchant/User', '10'),
    getItem(<Link href="/admin/packages">Package</Link>, '11'),
    getItem('Discount code', '12'),
    getItem('Faq', '13'),
    getItem('Free Message', '14'),
  ]),
  getItem( 'Blogs', '7', <DesktopOutlined />),
 
];

const SideMenu = ({activeItem}:any) => {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };


  return (
    <div >
      <Button  type="primary" onClick={toggleCollapsed} style={{ marginBottom: 7, display: "flex", alignItems: "center", border: "1px solid lightgray" }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
      defaultSelectedKeys={[activeItem]}
        defaultOpenKeys={['subMenu']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
        
      />
    </div>
  );
};

export default SideMenu;