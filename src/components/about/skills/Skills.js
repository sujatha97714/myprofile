import React from 'react';
import { Rate, Card} from 'antd';

import styles from './Skills.module.scss';

const data = [
    {
        display: 'Front End',
        key: 'front-end',
        skillSets: [
            {
                display: 'Javascript',
                key: 'react',
                rating: 4,
            },
            {
                display: 'React',
                key: 'react',
                rating: 4.5,
            },
            {
                display: 'Redux',
                key: 'react',
                rating: 4.5,
            },
            {
                display: 'HTML',
                key: 'react',
                rating: 4,
            },
            {
                display: 'CSS',
                key: 'react',
                rating: 4,
            },
            {
                display: 'D3.js',
                key: 'react',
                rating: 3,
            },
        ]
    },
    {
        display: 'Back End',
        key: 'back-end',
        skillSets: [
            {
                display: 'Node.js',
                key: 'node',
                rating: 4.5,
            },
            {
                display: 'Express.js',
                key: 'express',
                rating: 4,
            },
            {
                display: 'Java',
                key: 'java',
                rating: 4,
            },
            {
                display: 'Python',
                key: 'python',
                rating: 3,
            },
            {
                display: 'C#',
                key: 'c-sharp',
                rating: 3,
            },
            {
                display: 'LabVIEW',
                key: 'labview',
                rating: 3,
            },
        ]
    },
    {
        display: 'Database',
        key: 'db',
        skillSets: [
            {
                display: 'SQLite',
                key: 'sqlite',
                rating: 4.5,
            },
            {
                display: 'PostgreSQL',
                key: 'ps',
                rating: 3.5,
            },
            {
                display: 'Mongo DB',
                key: 'mongo-db',
                rating: 3,
            },
        ]
    },
    {
        display: 'Testing',
        key: 'test',
        skillSets: [
            {
                display: 'Jest',
                key: 'jest',
                rating: 4,
            },
            {
                display: 'Selenium',
                key: 'selenium',
                rating: 3,
            },
        ]
    },
    {
        display: 'Other tools',
        key: 'others',
        skillSets: [
            {
                display: 'Git',
                key: 'git',
                rating: 4.5,
            },
            {
                display: 'NVM & NPM',
                key: 'nvm',
                rating: 4.5,
            },
            {
                display: 'Yarn',
                key: 'yarn',
                rating: 4.5,
            },
            {
                display: 'JSON',
                key: 'json',
                rating: 4,
            },
            {
                display: 'Webpack',
                key: 'webpack',
                rating: 3,
            },
        ]
    }
]

export default function Skills() {
    return <div className={styles.skills}>
        <div className={styles.title}>Technical Skills</div>
        <div className={styles.cardCntr}>
            {
                data.map(group => (
                    <Card className={styles.card} key={group.key}>
                        <div className={styles.title}>{group.display}</div>
                        {
                            group.skillSets.map(skill => (
                                <div className={styles.skill} key={data.key}>
                                    <div>{skill.display}</div>
                                    <Rate allowHalf disabled value={skill.rating} />
                                </div>
                            ))
                        }

                    </Card>
                ))
            }
        </div>
    </div>
}