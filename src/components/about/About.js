import React from "react";

import Skills from "./skills/Skills";
import Education from "./education/Education";

import styles from './About.module.scss';

export default function About() {
    return <div className={styles.about}>
        <Skills />
        <Education />
    </div>
}