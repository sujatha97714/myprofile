import React from 'react';
import { Timeline } from 'antd';

import styles from './Education.module.scss';

const data = [
   {
       key: 1,
       duration: "Jul 2021",
       title: "Software Engineer",
       institute: "Cisco Systems"
   },
   {
        key: 2,
        duration: "Aug 2021",
        title: "Technical mentor",
        institute: "Newton School"
   },
   {
       key: 3,
       duration: "Sep 2020",
       title: "Senior Project Engineer",
       institute: "Soliton Technologies"
   },
   {
       key: 4,
       duration: "Jun 2018",
       title: "Project Engineer",
       institute: "Soliton Technologies"
   },
   {
       key: 5,
       duration: "Aug 2017",
       title: "Project Engineer Intern",
       institute: "Soliton Technologies"
   },
   {
       key: 6,
       duration: "Jun 2014 - Apr 2018",
       title: "Bachelor of Engineering in Electronics and Communication Engineering ",
       institute: "Sri Krishna College of Engineering and Technology"
   },
]

function Label(props) {
    return <span className={styles.timelineLabel}>{props.text}</span>
}

function TimelineItem(props) {
    return (
        <div className={styles.tlItem}>
            <div className={styles.itemTitle}>{props.title}</div>
            <div>{props.institute}</div>
        </div>
    )
}

export default function Education() {
    return <div className={styles.education}>
        <div className={styles.title}>Career</div>
        <div className={styles.cardCntr}>
            <Timeline mode="left" className={styles.timeLine}>
                {
                    data.map(item => (
                        <Timeline.Item key={item.key} label={<Label text={item.duration}/>} color="#14557b">
                            <TimelineItem {...item}/>
                        </Timeline.Item>
                    ))
                }
            </Timeline>
        </div>
    </div>
}