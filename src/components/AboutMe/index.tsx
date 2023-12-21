import React from 'react';
import { List, Card, Divider, Typography, Avatar } from 'antd';

const { Paragraph, Text } = Typography;

type AboutMeItem = {
  github: string,
  title: string,
  subTitle: string,
  detail: string,
}

export type AboutMeProps = {
  dataSource: AboutMeItem[]
}

const AboutMe: React.FC<AboutMeProps> = (props) => {
  return (
    <Card className="small-card" bordered={false}>
      <Divider>个人相关开源技术</Divider>
      <List
        dataSource={props.dataSource}
        renderItem={(item: any) => (
          <List.Item
            actions={[
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={item.github}
                key={item.github}
              >
                直达Github
              </a>,
            ]}
          >
            <List.Item.Meta
              avatar={
                <Avatar size="large" style={{ backgroundColor: '#87d068' }}>
                  {item.title}
                </Avatar>
              }
              className="ant-typography"
              title={item.title}
              description={
                <Typography>
                  <Text strong>{item.subTitle}</Text>
                  <Paragraph>{item.detail}</Paragraph>
                </Typography>
              }
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default AboutMe;