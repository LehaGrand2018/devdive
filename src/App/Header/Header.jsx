import React from 'react';
import Logo from '../Components/Logo/Logo'
import Button from '../Components/Button/Button';
import styles from './Header.module.css';


const Header = (props) => {

    const click = () => console.log(styles);
    
    return (
        <header className={`${styles.Header} ${props.className}`}>
            <Logo className={styles.Logo}></Logo>
            <Button className={styles.QuestionButton}value = "Задать вопрос" onClick={click} ></Button>
            <p className={styles.Username}>username</p>
            <div className={styles.ProfilePhoto} style={{'background-color': ''}}></div>
        </header>
    );
};

export default Header;