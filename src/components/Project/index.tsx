import React, { PureComponent, Fragment } from 'react';
import ReactDOM from "react-dom";
import { Collapse, Card, Divider, Skeleton, Row, Col, Icon, List } from 'antd';
import ImageViewer from '../ImageViewer';
import styles from './index.less';

class Index extends PureComponent<any,any> {
  state = {
    loadedCoPanels: ['0'],
    imageView: {
      visible: false,
      imgIndex: 0,
      images: [],
    },
  };

  handleChangeCollapse = activeKey => {
    const { loadedCoPanels } = this.state;
    if (!loadedCoPanels.includes(activeKey)) {
      loadedCoPanels.push(activeKey);
      this.setState({
        loadedCoPanels: [...loadedCoPanels],
      });
    }

    const curNode=ReactDOM.findDOMNode(this);
    if (curNode instanceof HTMLElement) {
      const activeItem=curNode.getElementsByClassName('ant-collapse-item-active')[0];
      activeItem.scrollIntoView&&activeItem.scrollIntoView();
    }
  };

  handleCloseImageViewer = () => {
    this.setState({
      imageView: {
        visible: false,
        imgIndex: 0,
        images: [],
      },
    });
  };

  handleOpenImgView = (images, openIndex) => {
    this.setState({
      imageView: {
        visible: true,
        imgIndex: openIndex,
        images: images.map(item=>{
          const result={...item,alt:item.title};
          return result;
        }),
      },
    });
  };

  render() {
    const { dataSource } = this.props;
    const {
      loadedCoPanels,
      imageView: { visible, imgIndex, images },
    } = this.state;
    const rowProps = {
      gutter: {
        xs: 8,
        sm: 8,
        md: 8,
        lg: 8,
        xl: 8,
        xxl: 12,
      }
    };
    const colItemLayout = {
      xs: 24, // <576px
      sm: 12, // ≥576px
      md: 8, // ≥768px
      lg: 6, // ≥992px
      xl: 3, // ≥1200px
      xxl: 3, // ≥1600px
    };
    return (
      <Card className="small-card" bordered={false}>
        <Divider>项目经历</Divider>
        <Collapse defaultActiveKey={['0']} onChange={this.handleChangeCollapse} accordion>
          {dataSource.map((item, index) => {
            const strKey = `${index}`;
            return (
              <Collapse.Panel
                key={strKey}
                header={
                  <Fragment>
                    <b>{item.name}</b>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {item.url ? (
                      <a rel="noopener noreferrer" target="_blank" href={item.url}>
                        <Icon type="link" theme="outlined" />
                        &nbsp;链接
                      </a>
                    ) : null}
                  </Fragment>
                }
              >
                <Skeleton loading={loadedCoPanels.includes(strKey) === false} active avatar>
                  <Row type="flex" className={styles['project-row']} {...rowProps}>
                    {item.images.map((imgItem, imgIndex) => (
                      <Col key={imgIndex} {...colItemLayout}>
                        <Card
                          className="p-b-xs"
                          hoverable
                          onClick={this.handleOpenImgView.bind(this,item.images, imgIndex)}
                          cover={<img alt={imgItem.title} src={imgItem.src} />}
                        >
                          <Card.Meta description={imgItem.title} />
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Skeleton>
                {item.descriptions.map((desc, descIndex) => (
                  <List
                    key={descIndex}
                    size="small"
                    header={<b>{desc.header}</b>}
                    bordered={false}
                    dataSource={desc.contents}
                    renderItem={content => <List.Item>{content}</List.Item>}
                  />
                ))}
              </Collapse.Panel>
            );
          })}
        </Collapse>
        {visible && (
          <ImageViewer
            onClose={this.handleCloseImageViewer}
            isOpen={visible}
            currentIndex={imgIndex}
            images={images}
          />
        )}
      </Card>
    );
  }
}

export default Index;
