import React from 'react';
import { Timeline } from 'antd';

const RightSection3 = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  };

  const sectionStyle = {
    flex: '1',
    margin: '0 10px',
    padding: '10px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  };

  return (
    <div style={containerStyle}>
      {/* Upcoming Section */}
      <div style={sectionStyle}>
        <h4>Upcoming</h4>
        <Timeline>
          <Timeline.Item>
            <p><strong>Arrange a Call</strong></p>
            <p>Start: 27/08/2024 - 12:00pm</p>
            <p>End: 27/08/2024 - 01:00pm</p>
          </Timeline.Item>
          <Timeline.Item>
            <p><strong>Follow Up Email</strong></p>
            <p>Start: 27/08/2024 - 02:00pm</p>
            <p>End: 27/08/2024 - 03:00pm</p>
          </Timeline.Item>
        </Timeline>
      </div>

      {/* Overdue Section */}
      <div style={sectionStyle}>
        <h4>Overdue</h4>
        <Timeline>
          <Timeline.Item>
            <p><strong>Arrange a Call</strong></p>
            <p>Start: 28/08/2024 - 10:00am</p>
            <p>End: 28/08/2024 - 10:30am</p>
          </Timeline.Item>
        </Timeline>
      </div>

      {/* Completed Section */}
      <div style={sectionStyle}>
        <h4>Completed</h4>
        <Timeline>
          <Timeline.Item>
            <p><strong>Follow Up Email</strong></p>
            <p>Start: 25/08/2024 - 01:00pm</p>
            <p>End: 25/08/2024 - 01:30pm</p>
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  );
};

export default RightSection3;
