
import React, { useState } from 'react';
import { Button, Input, DatePicker, Form, Menu } from 'antd';

const MauticForm = () => {
  const [currentForm, setCurrentForm] = useState('1');

  const handleMenuClick = (e) => {
    setCurrentForm(e.key);
  };

  const renderFormContent = () => (
    <Form layout="vertical" style={{ width: '100%', maxWidth: '400px', margin: 'auto' }}>
      <Form.Item style={{ marginBottom: '10px' }}>
        <Button.Group style={{ width: '100%' }}>
          <Button type="default" style={{ width: '33.33%', fontSize: '12px' }}>Log a Call</Button>
          <Button type="default" style={{ width: '33.33%', fontSize: '12px' }}>Email</Button>
          <Button type="default" style={{ width: '33.33%', fontSize: '12px' }}>Event</Button>
        </Button.Group>
      </Form.Item>

      <Form.Item label="Subject" name="subject" rules={[{ required: true, message: 'Please enter the subject' }]} style={{ marginBottom: '10px' }}>
        <Input placeholder="Enter subject" size="small" />
      </Form.Item>

      <Form.Item label="Due Date" name="dueDate" rules={[{ required: true, message: 'Please select a due date' }]} style={{ marginBottom: '10px' }}>
        <DatePicker style={{ width: '100%' }} size="small" />
      </Form.Item>

      <Form.Item label="Description" name="description" style={{ marginBottom: '10px' }}>
        <Input.TextArea placeholder="Enter description" rows={3} size="small" />
      </Form.Item>

      {/* Buttons in the same row */}
      <Form.Item style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
        <Button type="dashed" style={{ width: '50%', marginRight:'14px'}} size="small">+ Add Member</Button>
        <Button type="primary" htmlType="submit" style={{ width: '35%' }} size="small">Submit</Button>
      </Form.Item>
    </Form>
  );

  return (
    <div style={{ padding: '10px', border: '1px solid #e0e0e0', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ fontSize: '16px', marginBottom: '10px' }}>Right Section 1 - Mautic Forms</h2>
      <Menu
        onClick={handleMenuClick}
        selectedKeys={[currentForm]}
        mode="horizontal"
        style={{ justifyContent: 'center', marginBottom: '10px' }}
      >
        <Menu.Item key="1" style={{ fontSize: '12px' }}>Form 1</Menu.Item>
        <Menu.Item key="2" style={{ fontSize: '12px' }}>Form 2</Menu.Item>
        <Menu.Item key="3" style={{ fontSize: '12px' }}>Form 3</Menu.Item>
        <Menu.Item key="4" style={{ fontSize: '12px' }}>Form 4</Menu.Item>
      </Menu>
      
      {/* Display Form Content based on selected menu */}
      <div style={{ padding: '10px', backgroundColor: '#ffffff', borderRadius: '8px' }}>
        {renderFormContent()}
      </div>
    </div>
  );
};

export default MauticForm;
