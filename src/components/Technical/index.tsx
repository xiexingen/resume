import React from 'react';
import { List, Card, Divider } from 'antd';
import { RightOutlined } from '@ant-design/icons';

export type TechnicalProps = {
  dataSource: string[];
}

const Technical: React.FC<TechnicalProps> = (props) => {
  return (
    <Card className="small-card" bordered={false}>
      <Divider>技术栈</Divider>
      <List
        dataSource={props.dataSource}
        renderItem={(item) => (
          <List.Item>
            <p>
              <RightOutlined />
              &nbsp;{item}
            </p>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default Technical