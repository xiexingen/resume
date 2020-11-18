import React from 'react';
import { Timeline, Icon, Card,Divider } from "antd";
import styles from './index.less';

export default function (props) {
    const { dataSource } = props;
    const getDotByLast=(index: number)=>{
        if(index===dataSource.length-1){
            return{
                dot:(<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />)
            }
        }
        return {};
    }

    return (
        <Card className="small-card" bordered={false}>
            <Divider>工作经历</Divider>
            <Timeline reverse>
                {
                    dataSource.map((item, index) => {
                        return (
                            <Timeline.Item key={index} {...getDotByLast(index)}>
                                <div className={styles['title-line']}>
                                    {item.company}
                                    <span className={styles.date}>
                                        {item.dateRange}
                                    </span>
                                </div>
                                <p>
                                    {item.description}
                                </p>
                            </Timeline.Item>
                        )
                    })
                }
            </Timeline>
        </Card>
    )
}
