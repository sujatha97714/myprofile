import React from "react";

import Skills from "./skills/Skills";
import Education from "./education/Education";

import styles from './About.module.scss';

export default function About() {
    return <div className={styles.about}>
        <div className={styles.note}>
            <span>Thanks for your interest in knowing more about me </span>&#129321;
        </div>
        <Skills />
        <Education />
    </div>
}