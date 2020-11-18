import React from 'react';
import { List, Card, Divider } from 'antd';
import * as Icons from '@ant-design/icons';

export default function (props) {
  const { dataSource } = props;

  return (
    <Card className="small-card" bordered={false}>
      <Divider>联系方式</Divider>
      <List
        grid={{ gutter: 16, xs: 2, sm: 2, md: 4, lg: 4, xl: 4, xxl: 4 }}
        dataSource={dataSource}
        renderItem={(item: any) => {
          const Icon = Icons[item.icon];
          return (
            <List.Item>
              <Card>
                <Card.Meta
                  title={
                    <span>
                      <Icon />
                      &nbsp;{item.title}
                    </span>
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
