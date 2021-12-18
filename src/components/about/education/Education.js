import React from 'react';
import { Badge, Card } from 'antd';

import styles from './Education.module.scss';

const data = [
   {
       key: 1,
       duration: "Jul 2021 - Present",
       title: "Software Engineer",
       department: "Base Automation - DNAC",
       institute: "Cisco Systems",
       works: [
          "Designing and developing features for the product DNA Center",
          "Expertise in React, Redux, graphQL & plugin based architecture"
       ]
    },
    {
        key: 2,
        duration: "Aug 2021 - Present",
        title: "Technical mentor",
        institute: "Newton School",
        works: [
            "Mentoring students in datastructures and algorithms",
            "Assisting students in improving problem solving and soft skills"
        ]
   },
   {
       key: 3,
       duration: "Sep 2020 - Jul 2021",
       title: "Senior Project Engineer",
       department: "Maze Runner - Web technologies",
       institute: "Soliton Technologies",
       works: [
        "Involvement in requirement gathering, sprint planning & milestone releases",
        "Architect and develop high performing web GUIs using React, Redux, Node, Express, C#",
       ]
   },
   {
       key: 4,
       duration: "Jun 2018 - Aug 2020",
       title: "Project Engineer",
       department: "Maze Runner - Web Technologies",
       institute: "Soliton Technologies",
       works: [
        "Independently develop modules for data interaction layer, device interfaces and custom graph UIs",
        "Expertise in React, SQLite, D3.js, Plotly.Js, PostgreSQL, etc.",
       ]
   },
   {
       key: 5,
       duration: "Aug 2017 - May 2018",
       title: "Project Engineer Intern",
       department: "Computer Vision",
       institute: "Soliton Technologies",
       works: [
        "Undertook professional training in LabVIEW, Python and Machine Learning",
        "Developed tools for STDF parser and dataset creation using ML and Image processing techniques",
       ]
   },
   {
       key: 6,
       duration: "Jun 2014 - Apr 2018",
       title: "Bachelor of Engineering",
       department: "Electronics and Communication Engineering",
       institute: "Sri Krishna College of Engineering and Technology",
       works: [
        "Acquired strong foundational knowledge in Electronics, Network and communication systems",
        "Exposed to programming in C, C++, Matlab, Java, LabVIEW  and Python",
        "Gained exposure to various data structures and algorithms"
       ]
   },
];

function Dot(props) {
    return (
        <Badge.Ribbon text={props.duration} color="#14557b" placement="start">
            <Card className={styles.cardItem}>
                <div className={styles.itemTitle}>{props.title}</div>
                <div className={styles.subtitle}>{props.department}</div>
                <div className={styles.subtitle}>{props.institute}</div>
                <ul className={styles.works}>
                    {
                        props.works.map(work => <li>{work}</li>)
                    }
                </ul>
            </Card>
        </Badge.Ribbon>
    )
}

export default function Education() {
    return <div className={styles.education}>
        <div className={styles.title}>Career</div>
        <div className={styles.cardCntr}>
        {
            data.map(item => (
                <Dot key={item.key} {...item} />
            ))
        }
        </div>
    </div>
}