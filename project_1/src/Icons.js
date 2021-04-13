import React from 'react';
import { StarOutlined, StarFilled, StarTwoTone,LikeOutlined  } from '@ant-design/icons';
import { MessageOutlined } from '@ant-design/icons';


const Icons = () => {
    return (
        <>
         <LikeOutlined />
      <StarOutlined />
      <StarFilled />
      <MessageOutlined  style={{ fontSize: '100px', color: '#08c' }} />
      <StarTwoTone twoToneColor="#fffff" />
        </>
    )

}

export default Icons;