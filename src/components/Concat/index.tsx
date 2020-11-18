import React from 'react';
import { List, Card, Divider,Icon } from 'antd';

export default function (props) {
    const { dataSource } = props;

    return (
        <Card className="small-card" bordered={false}>
            <Divider>联系方式</Divider>
            <List
                grid={{ gutter: 16, xs: 2, sm: 2, md: 4, lg: 4, xl: 4, xxl: 4 }}
                dataSource={dataSource}
                renderItem={(item:any) => (
                    <List.Item>
                        <Card>
                            <Card.Meta
                                title={<span><Icon type={item.icon}/>&nbsp;{item.title}</span>}
                                description={item.description}
                            />
                        </Card>
                    </List.Item>
                )}
            />
        </Card>
    )
}
