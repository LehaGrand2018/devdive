import {React, useEffect, useState} from 'react';
import Logo from '../Components/Logo/Logo'
import Button from '../Components/Button/Button';
import styles from './Header.module.scss';


const Header = (props) => {

    const login = () => {
        localStorage.setItem('isLoggedIn', 'true');
        setIsLoggedIn('true')
    }
    
    const out = () => {
        localStorage.setItem('isLoggedIn', 'false');
        setIsLoggedIn('false')
    }
    //there will be username from server
    let username = 'neurotrier';
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn'))
    const [elements, setElements] = useState([]);

    useEffect(() => {
        let elements = [];
        if (isLoggedIn === "true") {
            elements.push(
                <Button
                    key="questionButton"
                    className={styles.QuestionButton}
                    value="Задать вопрос"
                    onClick={out}
                ></Button>,
                <p key="username" className={styles.Username}>
                    {username}
                </p>,
                <div
                    key="profilePhoto"
                    className={styles.ProfilePhoto}
                    style={{ backgroundImage: "" }}
                ></div>
            );
        } else {
            elements.push(
                <Button
                    key="signInButton"
                    className={styles.SignInButton}
                    value="Вход"
                    onClick={login}
                ></Button>
            );
        }
        setElements(elements);
    }, [isLoggedIn, username]);
   

    return (
        <header className={`${styles.Header} ${props.className}`}>
            <Logo className={styles.Logo}></Logo>
            {elements}
        </header>
    );
};

export default Header;