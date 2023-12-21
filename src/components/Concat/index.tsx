import React from 'react';
import { List, Card, Divider } from 'antd';

type ConcatItem = {
  icon: any,
  title: string,
  description: string,
}

export type ConcatProps = {
  dataSource: ConcatItem[],
}

const Concat: React.FC<ConcatProps> = (props) => {
  return (
    <Card className="small-card" bordered={false}>
      <Divider>联系方式</Divider>
      <List
        grid={{ gutter: 16, xs: 2, sm: 2, md: 4, lg: 4, xl: 4, xxl: 4 }}
        dataSource={props.dataSource}
        renderItem={(item: any) => {
          const ItemIcon = item.icon;
          return (
            <List.Item>
              <Card>
                <Card.Meta
                  title={
                    <span>
                      <ItemIcon />
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
};

export default Concat