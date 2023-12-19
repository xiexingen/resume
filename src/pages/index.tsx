import React from 'react';
import CompanyTimeLine from '@/components/CompanyTimeLine';
import Education from '@/components/Education';
import Social from '@/components/Social';
import Concat from '@/components/Concat';
import Project from '@/components/Project';
import Technical from '@/components/Technical';
import Introduce from '@/components/Introduce'
import AboutMe from '@/components/AboutMe';

import mockData from '../data.json';
import styles from './index.less';

export default () => {
  return (
    <div className={styles.normal}>
      <Introduce/>
      <Technical dataSource={mockData.technicals} />
      <Social dataSource={mockData.socials} />
      <AboutMe dataSource={mockData.opens} />
      <CompanyTimeLine dataSource={mockData.companys} />
      <Education dataSource={mockData.educations} />
      <Project dataSource={mockData.projects} />
      <Concat dataSource={mockData.concats} />
    </div>
  );
};
