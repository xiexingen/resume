import React from 'react';
import { List, Avatar, Card, Divider } from 'antd';

export default function (props) {
  const { dataSource } = props;
  return (
    <Card className="small-card" bordered={false}>
      <Divider>教育经历</Divider>
      <List
        dataSource={dataSource}
        grid={{ gutter: 16, xs: 2, sm: 2, md: 4, lg: 4, xl: 4, xxl: 4 }}
        split={false}
        renderItem={(item: any) => (
          <List.Item>
            <Card>
              <Card.Meta
                avatar={
                  <Avatar
                    style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
                  >
                    {item.type}
                  </Avatar>
                }
                title={item.name}
                description={
                  <p>
                    {item.profession}
                    <span className="p-right">{item.dateRange}</span>
                  </p>
                }
              />
            </Card>
          </List.Item>
        )}
      />
    </Card>
  );
}
