
import React from 'react';
import { Timeline, Row, Col, Breadcrumb } from 'antd';
import ProfileSection from './profileSection';
import MauticForm from './MauticForm';
import RightSection3 from './Call';

export const DefaultDashboard = () => {
  return (
    <div style={{ padding: '20px' }}>
      {/* Breadcrumb */}
      <Breadcrumb style={{ marginBottom: '20px' }}>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">home</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">lead</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>lead0123</Breadcrumb.Item>
      </Breadcrumb>

      {/* Main content divided into left and right sections */}
      <Row gutter={[16, 16]}>
        {/* Left section with ProfileSection component */}
        <Col xs={24} md={12}>
          <ProfileSection />
        </Col>

        {/* Right section with adjusted column spans */}
        <Col xs={24} md={12}>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={16}>
              <MauticForm />
            </Col>
            <Col xs={24} sm={8}>
              <div style={{ padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
                <h2>Right Section 2</h2>
                <Timeline>
                  <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                  <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                  <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                  <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                </Timeline>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={24}>
              <div style={{ padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px', backgroundColor: '#f9f9f9', marginTop: '16px' }}>
                <RightSection3 />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default DefaultDashboard;
