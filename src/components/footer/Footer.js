import React from 'react';

import {LinkedinOutlined, MailOutlined, GithubOutlined, InstagramOutlined} from '@ant-design/icons';

import * as styles from './Footer.module.scss';

export default function Footer() {
    return <div className={styles.footer}>
        <div className={styles.contactWrapper}>
            <a href="https://www.linkedin.com/in/sujatha-pushparaj-93931712a/" rel="noreferrer" target="_blank">
                <LinkedinOutlined className={styles.icons}/>
            </a>
            <a href="mailto:sujathapushparaj99@gmail.com">
                <MailOutlined className={styles.icons}/>
            </a>
            <a href="https://github.com/sujatha97714" rel="noreferrer" target="_blank">
                <GithubOutlined className={styles.icons}/>
            </a>
            <a href="https://www.instagram.com/suja.pushparaj/" rel="noreferrer" target="_blank">
                <InstagramOutlined className={styles.icons}/>
            </a>
        </div>
    </div>
}