import React from 'react';
import { Row, Col, Divider } from 'antd';


const style = { background: '#0092ff', padding: '8px 0' };
const Grids = () => {
   return (
       <>
        <Divider orientation="left">Horizontal</Divider>
    <Row gutter={16}>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>

       </>
   )
}

export default Grids;