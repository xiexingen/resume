import React from 'react';
import { List, Card, Divider,Icon } from 'antd';

export default function (props) {
    const { dataSource } = props;

    return (
        <Card className="small-card" bordered={false}>
            <Divider>技术栈</Divider>
            <List
                dataSource={dataSource}
                renderItem={item => (
                    <List.Item>
                        <p>
                            <Icon type="right" />&nbsp;{item}
                        </p>
                    </List.Item>
                )}
            />
        </Card>
    )
}
