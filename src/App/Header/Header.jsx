import React from 'react';
import Logo from '../Components/Logo/Logo'
import Button from '../Components/Button/Button';
import styles from './Header.module.scss';


const Header = (props) => {

    const click = () => console.log(styles);
    let username = 'neurotrier';
    
    return (
        <header className={`${styles.Header} ${props.className}`}>
            <Logo className={styles.Logo}></Logo>
            <Button className={styles.QuestionButton}value = "Задать вопрос" onClick={click} ></Button>
            <span className={styles.Username}></span>
            <div className={styles.ProfilePhoto} style={{backgroundColor: ''}}></div>
        </header>
    );
};

export default Header;