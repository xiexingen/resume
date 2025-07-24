import React from 'react';
import { Card, Typography, Space, Button } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;


export type IntroduceProps = {}

const Introduce: React.FC<IntroduceProps> = (props) => {
  return (
    <Card bordered={false}>
      <Typography>
        <Title>个人简介</Title>
        <Paragraph>
          谢新根 13 年毕业，从业至今接触了.net、.net
          core 后端开发、数据库、Docker、CI/CD、也基于 Python Scrapy 写过几个爬虫；
        </Paragraph>
        <Paragraph>
          经历了从最原始的 jquery、jquery
          widget、easyui 到 ng1.x 时代再到现在的 react、vue 的主流前端框架的发展；
        </Paragraph>
        <Paragraph>
          写过业务页面、搭过基础框架、做过项目管理、也造过前端组件轮子，写过的组件如：拖拽滑块验证码、手写签名、基于 lodop 的 web 打印、基于 UEditor 形式的表单设计器、基于 TinyMCE 的关键词高亮、自定义 json 形式的表单设计器、基于 signalr 的推送、加密传输、token 失效自动刷新、玩过 WPF...
        </Paragraph>
        <Paragraph>
          基于 taro、uni-app 的小程序、app 开发
        </Paragraph>
        <Paragraph>
          基于 ast 写过用来检测代码硬编码的 eslint 插件，关注一些如低代码的东西
        </Paragraph>
        <Paragraph>
          <Space>
          典型的代表作
            <Button
            type="link"
            href="https://github.com/xiexingen/topology-designable"
            target="_blank"
          >
            拓扑图设计器
          </Button>
          <Button
            type="link"
            href="https://github.com/nomui/nomui"
            target="_blank"
          >
            nomui
          </Button>
          <Button
            type="link"
            href="https://wetrial.github.io/wetrials/component"
            target="_blank"
          >
            wetrials
          </Button>
          </Space>
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

export default Introduce