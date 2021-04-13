import React from 'react';

import 'antd/dist/antd.css';

import { Button, Tooltip, Menu, Dropdown } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">1st item</Menu.Item>
      <Menu.Item key="2">2nd item</Menu.Item>
      <Menu.Item key="3">3rd item</Menu.Item>
    </Menu>
  );
  
  function handleMenuClick(e) {
    console.log('click', e);
  }

const Buttons = () => {
  return (
         <>
           <Button type="primary" icon={<SearchOutlined />} disabled block>Primary Button</Button>
      <br />
      <Tooltip title="search">
        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <br />
      <Button type="primary" loading>
        Loading
        </Button>
      <br />
      <Button type="primary" danger>primary</Button>
      <Button onClick={() => alert(`Hey You CLicked`)} href='google.com'>secondary</Button>
      <Dropdown.Button overlay={menu}>Actions</Dropdown.Button>
         </>
  )  
}


export default Buttons;