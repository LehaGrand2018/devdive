import React, { useEffect } from 'react';

import Input from '../../Input/Input.jsx';
import PasswordInput from '../PasswordInput/PasswordInput.jsx';

import Button from '../../Button/Button.jsx';
import styles from './LoginForm.module.css';
import buttonStyles from '../../Button/Button.module.css';


const LoginForm = (props) => {
    // useEffect(() => {
    //     login();
    // })
    return (
        <div className={`${styles.LoginForm} ${props.className}`}>
            <Input value="Логин" type="text" name="login" id="login" />
            <PasswordInput value="Пароль" type="password" name="password" id="password"/>
            <Button value ="Логин" onClick={() => {props.loginFunc()}}/>
            <Button value="Зарегистрироваться"/>
        </div>
    );

};



export default LoginForm;