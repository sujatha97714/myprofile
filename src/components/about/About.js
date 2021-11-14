import React from "react";

import Skills from "../skills/Skills";

import styles from './About.module.scss';

export default function About() {
    return <div className={styles.about}>
        <div className={styles.note}>Thanks for your interest in knowing more about me &#129321;</div>
        <Skills />
    </div>
}