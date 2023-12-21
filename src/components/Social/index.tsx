import React from 'react';
import { List, Card, Divider } from 'antd';

type SocialItem = {
  icon: any,
  url: string,
  title: string,
  description: string
}

export type SocialProps = {
  dataSource: SocialItem[]
}

const Social: React.FC<SocialProps> = (props) => {
  return (
    <Card className="small-card" bordered={false}>
      <Divider>社交主页</Divider>
      <List
        grid={{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 2, xl: 3, xxl: 3 }}
        dataSource={props.dataSource}
        renderItem={(item: any) => {
          const ItemIcon = item.icon;
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
};

export default Social