import React, {useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons'

import styles from './Header.module.scss';

const menuOptions = [
    {
        key: 'home',
        displayText: 'Home',
        url: '/',
    },
    {
        key: 'about-me',
        displayText: 'About me',
        url: '/about-me',
    },
]

export default function Header() {

    const [menuVisible, setMenuVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        console.log(location);
        setMenuVisible(false);
    }, [location])

    const toggleMenuVisibility = () => {
        setMenuVisible(!menuVisible);
    }

    return <div className={styles.header}>
        {location.pathname !== '/' && 
            <div className={styles.logo}>Sujatha Pushparaj</div>
        }
        <div className={styles.menuCntr}>
            <MenuOutlined className={styles.menuBtn} onClick={toggleMenuVisibility}/>
            <nav className={`${styles.menu} ${menuVisible? styles.visible : ''}`}>
                {
                    menuOptions.map(opt => <Link 
                        key={opt.key} 
                        className={`${styles.link} ${opt.url === location.pathname? styles.active:''}`} 
                        to={opt.url}>{opt.displayText}
                    </Link>)
                }
                <a className={styles.link} href={process.env.PUBLIC_URL + "/assets/pdf/Sujatha_Resume.pdf"}>Resume</a>
            </nav>
        </div>
    </div>
}