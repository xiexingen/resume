import React from 'react';
import { Timeline, Card, Divider } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

type CompanyItem = {
  company: string,
  dateRange: string,
  description: string,
}

export type CompanyTimeLineProps = {
  dataSource: CompanyItem[];
}

const CompanyTimeLine: React.FC<CompanyTimeLineProps> = (props) => {

  const items = props.dataSource.map((item, index) => {
    return {
      label: '',
      dot: index === props.dataSource.length - 1 ? <ClockCircleOutlined style={{ fontSize: '16px' }} /> : undefined,
      children: <>
        <p className="title-line">
          {item.company}
          <span className="date">{item.dateRange}</span>
        </p>
        <p>{item.description}</p>
      </>
    }
  })

  return (
    <Card className="small-card company-time-line" bordered={false}>
      <Divider>工作经历</Divider>
      <Timeline reverse items={items} />
    </Card>
  );
};

export default CompanyTimeLine
