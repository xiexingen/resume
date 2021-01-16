import React from 'react';
import CompanyTimeLine from '@/components/CompanyTimeLine';
import Education from '@/components/Education';
import Social from '@/components/Social';
import Concat from '@/components/Concat';
import Project from '@/components/Project';
import Technical from '@/components/Technical';
import AboutMe from '@/components/AboutMe';
import {
  technicals,
  opens,
  companys,
  educations,
  projects,
  socials,
  concats,
} from '../data.json';
import styles from './index.less';

export default () => {
  projects.forEach(item=>{
    item.images.forEach(item=>{
      item.src=`${window['publicPath']}${item.src}`
    })
  })
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>专注于react & .netcore栈</h1>
      <Technical dataSource={technicals} />
      <AboutMe dataSource={opens} />
      <CompanyTimeLine dataSource={companys} />
      <Education dataSource={educations} />
      <Project dataSource={projects} />
      <Social dataSource={socials} />
      <Concat dataSource={concats} />
    </div>
  );
};
