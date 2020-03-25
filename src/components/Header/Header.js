import React from 'react';
// import styles from './Header.module.css';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/org">Organization</Link>
      </Menu.Item>
      <Menu.SubMenu
        title={
          <span className="submenu-title-wrapper">
            {/*<SettingOutlined />*/}
            Products
          </span>
        }
      >
        {/*<Menu.ItemGroup title="Item 1">*/}
        <Menu.Item key="setting:1">
          <Link to="/org/5e7b1ae8e2ddccc0c09386bc/products">Option 1</Link>
        </Menu.Item>{' '}
        <Menu.Item key="setting:2">
          <Link to="/org/5e7b1692a4664bc05834effc/products">Option 2</Link>
        </Menu.Item>
        {/*</Menu.ItemGroup>*/}
        {/*<Menu.ItemGroup title="Item 2">*/}
        {/*  <Menu.Item key="setting:3">Option 3</Menu.Item>*/}
        {/*  <Menu.Item key="setting:4">Option 4</Menu.Item>*/}
        {/*</Menu.ItemGroup>*/}
      </Menu.SubMenu>
      <Menu.Item>
        <Link to="/exampleTable">exampleTable</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/about">About</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/users">Users</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/login">Login</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Header;
