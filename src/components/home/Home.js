import React from "react";

import styles from './Home.module.scss';

export default function Home() {
    return <div className={styles.home}>
        <div className={styles.wrapper}>
            <img src={process.env.PUBLIC_URL + "/assets/images/sujatha.jpg"} alt=""/>
            <div className={styles.name}>Hi, I'm Sujatha</div>
            <div className={styles.designation}>Software Engineer @ 
                <span>&nbsp;</span>
                <a href="https://www.cisco.com/c/en_in/index.html" target="_blank" rel="noreferrer">Cisco</a>
            </div>
            <div className={styles.description}>
                &#128187; A programming enthusiast lost and exploring in the maze of web technologies. <br/> &#128151; I love developing complex aesthetic user interfaces. <br/> &#128161; Technical mentor guiding freshers aspring to enter the software world 
            </div>
        </div>
    </div>
}