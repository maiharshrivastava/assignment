import React, { useState } from 'react';
import { Menu, Button, Badge, Select, List } from 'antd';

const { Option } = Select;

const ProfileSection = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [currentMenu, setCurrentMenu] = useState('1');
  const [dropdown1Value, setDropdown1Value] = useState(null);
  const [dropdown2Value, setDropdown2Value] = useState(null);
  const [listItems, setListItems] = useState(['Item 1', 'Item 2', 'Item 3']); 

  const toggleStatus = () => {
    setIsOnline(!isOnline);
  };

  const handleMenuClick = (e) => {
    setCurrentMenu(e.key);
  };

  const renderContent = () => {
    switch (currentMenu) {
      case '1':
        return (
            <>
            <h3>Menu 5 - Custom Options</h3>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              <Select
                placeholder="Select option 1"
                style={{ width: 150, marginRight: '10px' }}
                onChange={(value) => setDropdown1Value(value)}
              >
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
                <Option value="option3">Option 3</Option>
              </Select>
              <Select
                placeholder="Select option 2"
                style={{ width: 150 }}
                onChange={(value) => setDropdown2Value(value)}
              >
                <Option value="optionA">Option A</Option>
                <Option value="optionB">Option B</Option>
                <Option value="optionC">Option C</Option>
              </Select>
            </div>
            <List
              bordered
              dataSource={listItems}
              renderItem={(item) => <List.Item>{item}</List.Item>}
              style={{ marginTop: '20px', textAlign: 'left' }}
            />
          </>
        );
      case '2':
        return (
            <>
            <h3>Menu 5 - Custom Options</h3>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              <Select
                placeholder="Select option 1"
                style={{ width: 150, marginRight: '10px' }}
                onChange={(value) => setDropdown1Value(value)}
              >
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
                <Option value="option3">Option 3</Option>
              </Select>
              <Select
                placeholder="Select option 2"
                style={{ width: 150 }}
                onChange={(value) => setDropdown2Value(value)}
              >
                <Option value="optionA">Option A</Option>
                <Option value="optionB">Option B</Option>
                <Option value="optionC">Option C</Option>
              </Select>
            </div>
            <List
              bordered
              dataSource={listItems}
              renderItem={(item) => <List.Item>{item}</List.Item>}
              style={{ marginTop: '20px', textAlign: 'left' }}
            />
          </>
        );
      case '3':
        return (
<>
            <h3>Menu 5 - Custom Options</h3>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              <Select
                placeholder="Select option 1"
                style={{ width: 150, marginRight: '10px' }}
                onChange={(value) => setDropdown1Value(value)}
              >
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
                <Option value="option3">Option 3</Option>
              </Select>
              <Select
                placeholder="Select option 2"
                style={{ width: 150 }}
                onChange={(value) => setDropdown2Value(value)}
              >
                <Option value="optionA">Option A</Option>
                <Option value="optionB">Option B</Option>
                <Option value="optionC">Option C</Option>
              </Select>
            </div>
            <List
              bordered
              dataSource={listItems}
              renderItem={(item) => <List.Item>{item}</List.Item>}
              style={{ marginTop: '20px', textAlign: 'left' }}
            />
          </>
        );
      case '4':
        return (
            <>
            <h3>Menu 5 - Custom Options</h3>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              <Select
                placeholder="Select option 1"
                style={{ width: 150, marginRight: '10px' }}
                onChange={(value) => setDropdown1Value(value)}
              >
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
                <Option value="option3">Option 3</Option>
              </Select>
              <Select
                placeholder="Select option 2"
                style={{ width: 150 }}
                onChange={(value) => setDropdown2Value(value)}
              >
                <Option value="optionA">Option A</Option>
                <Option value="optionB">Option B</Option>
                <Option value="optionC">Option C</Option>
              </Select>
            </div>
            <List
              bordered
              dataSource={listItems}
              renderItem={(item) => <List.Item>{item}</List.Item>}
              style={{ marginTop: '20px', textAlign: 'left' }}
            />
          </>
        );
      case '5':
        return (
          <>
            <h3>Menu 5 - Custom Options</h3>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              <Select
                placeholder="Select option 1"
                style={{ width: 150, marginRight: '10px' }}
                onChange={(value) => setDropdown1Value(value)}
              >
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
                <Option value="option3">Option 3</Option>
              </Select>
              <Select
                placeholder="Select option 2"
                style={{ width: 150 }}
                onChange={(value) => setDropdown2Value(value)}
              >
                <Option value="optionA">Option A</Option>
                <Option value="optionB">Option B</Option>
                <Option value="optionC">Option C</Option>
              </Select>
            </div>
            <List
              bordered
              dataSource={listItems}
              renderItem={(item) => <List.Item>{item}</List.Item>}
              style={{ marginTop: '20px', textAlign: 'left' }}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>
        <Badge status={isOnline ? 'success' : 'default'} />
        Maihar Shrivastava - {isOnline ? 'Online' : 'Offline'}
      </h2>
      <Button
        onClick={toggleStatus}
        type="link"
        style={{ marginBottom: '20px' }}
      >
        Toggle Status
      </Button>

      {/* Fixed Menu */}
      <Menu
        onClick={handleMenuClick}
        selectedKeys={[currentMenu]}
        mode="horizontal"
        style={{ justifyContent: 'center', marginBottom: '20px' }}
      >
        <Menu.Item key="1">Menu 1</Menu.Item>
        <Menu.Item key="2">Menu 2</Menu.Item>
        <Menu.Item key="3">Menu 3</Menu.Item>
        <Menu.Item key="4">Menu 4</Menu.Item>
        <Menu.Item key="5">Menu 5</Menu.Item>
      </Menu>

      {/* Dynamic Content based on selected menu */}
      <div>{renderContent()}</div>

      {/* Action buttons */}
      <div style={{ marginTop: '20px' }}>
        <Button type="primary" style={{ marginRight: '10px' }}>Create Account</Button>
        <Button type="default">Create Contact</Button>
      </div>
    </div>
  );
};

export default ProfileSection;
