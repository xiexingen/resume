import React, { useState } from 'react';
import { Collapse, Card, Divider, Skeleton, Row, Col, List, CollapseProps } from 'antd';
import { LinkOutlined } from '@ant-design/icons';
import ImageViewer from '../ImageViewer';

type ProjectItemDescription = {
  header: string,
  contents: string[],
}

type ProjectItemImg = {
  src: string,
  title: string,
}

type ProjectItem = {
  name: string,
  url?: string,
  descriptions: ProjectItemDescription[],
  images: ProjectItemImg[]
}

export type ProjectProps = {
  dataSource: ProjectItem[]
}

const Project: React.FC<ProjectProps> = (props) => {
  // 预览图片
  const [previewImg, setPreviewImg] = useState({
    images: [],
    openIndex: -1,
  });

  const rowProps = {
    gutter: {
      xs: 8,
      sm: 8,
      md: 8,
      lg: 8,
      xl: 8,
      xxl: 12,
    },
  };

  const colItemLayout = {
    xs: 24, // <576px
    sm: 12, // ≥576px
    md: 8, // ≥768px
    lg: 6, // ≥992px
    xl: 3, // ≥1200px
    xxl: 3, // ≥1600px
  };

  const handleCloseViewImage = () => {
    setPreviewImg({
      openIndex: -1,
      images: [],
    });
  }

  const handleOpenImgView = (images, openIndex) => {
    setPreviewImg({
      openIndex,
      images: images.map((item) => {
        const result = { ...item, alt: item.title };
        return result;
      })
    })
  };

  const items: CollapseProps['items'] = props.dataSource.map((item, index) => {
    return {
      key: item.name,
      label: item.name,
      extra: item.url ? (
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={item.url}
        >
          <LinkOutlined />
          &nbsp;链接
        </a>
      ) : null,
      children: (
        <>
          <Row className="project-row" {...rowProps}>
            {item.images.map((imgItem, imgIndex) => (
              <Col key={imgIndex} {...colItemLayout}>
                <Card
                  className="p-b-xs"
                  hoverable
                  onClick={() => handleOpenImgView(item.images, imgIndex)}
                  cover={<img alt={imgItem.title} src={`/${imgItem.src}`} />}
                >
                  <Card.Meta description={imgItem.title} />
                </Card>
              </Col>
            ))}
          </Row>
          {item.descriptions.map((desc, descIndex) => (
            <List
              key={descIndex}
              size="small"
              header={<b>{desc.header}</b>}
              bordered={false}
              dataSource={desc.contents}
              renderItem={(content: string) => (
                <List.Item>{content}</List.Item>
              )}
            />
          ))}
        </>
      ),
    }
  })


  return (
    <Card className="small-card" bordered={false}>
      <Divider>项目经历</Divider>
      <Collapse
        defaultActiveKey={['0']}
        accordion
        items={items}
      />
      {
        previewImg.openIndex !== -1 && (
          <ImageViewer
            onClose={handleCloseViewImage}
            openIndex={previewImg.openIndex}
            images={previewImg.images}
          />
        )}
    </Card>
  );
};

export default Project