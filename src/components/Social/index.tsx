import React from 'react';
import { List, Card, Divider } from 'antd';
import * as Icons from '@ant-design/icons';

export default function (props) {
  const { dataSource } = props;
  return (
    <Card className="small-card" bordered={false}>
      <Divider>社交主页</Divider>
      <List
        grid={{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 2, xl: 3, xxl: 3 }}
        dataSource={dataSource}
        renderItem={(item: any) => {
          const ItemIcon = Icons[item.icon];
          return (
            <List.Item>
              <Card hoverable>
                <Card.Meta
                  title={
                    <a
                      rel="noopener noreferrer"
                      href={item.url}
                      target="_blank"
                    >
                      <ItemIcon />
                      &nbsp;{item.title}
                    </a>
                  }
                  description={item.description}
                />
              </Card>
            </List.Item>
          );
        }}
      />
    </Card>
  );
}
