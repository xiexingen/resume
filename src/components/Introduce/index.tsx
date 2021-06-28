import React from 'react';
import { Card, Typography } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

export default () => {
  return (
    <Card bordered={false}>
      <Typography>
        <Title>个人简介</Title>
        <Paragraph>
          谢新根 13年毕业，从业至今接触了.net、.net core后端开发、数据库、docker、CICD、也基于python写过爬虫；经历了从最原始的jquery、jquery widget、easyui到ng1.x时代再到现在的react、vue的主流前端框架的发展；
          写过业务页面、搭过基础框架、做过项目管理、也造过前端组件轮子，写过的组件如：拖拽滑块验证码、手写签名、基于lodop的web打印、基于UEditor形式的表单设计器、自定义json形式的表单设计器、基于signalr的推送等等...
        </Paragraph>

        {/* <Title level={2}>设计资源</Title>
        <Paragraph>
          我们提供完善的设计原则、最佳实践和设计资源文件（
          <Text code>Sketch</Text> 和<Text code>Axure</Text>
          ），来帮助业务快速设计出高质量的产品原型。
        </Paragraph>

        <Paragraph>
          <ul>
            <li>
              <Link href="/docs/spec/proximity-cn"></Link>
            </li>
            <li>
              <Link href="/docs/spec/overview-cn">设计模式</Link>
            </li>
            <li>
              <Link href="/docs/resources-cn">设计资源</Link>
            </li>
          </ul>
        </Paragraph> */}
      </Typography>
    </Card>
  );
};
