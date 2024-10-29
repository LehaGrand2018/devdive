import React, { useEffect } from 'react';

import Input from '../Input/Input.jsx';
import PasswordInput from '../PasswordInput/PasswordInput.jsx';

import Button from '../Button/Button.jsx';
import styles from './LoginForm.module.scss';
import buttonStyles from '../Button/Button.module.scss';
import PropTypes from 'prop-types';


const LoginForm = ({className, loginFunc, registrationFunc}) => {
    // useEffect(() => {
    //     login();
    // })
    return (
        <div className={`${styles.LoginForm} ${className}`}>
            <h2 className={styles.LoginLable}>Вход</h2>
            <Input placeholder="Email" type="text" name="email" id="email" />
            <PasswordInput placeholder="Пароль" type="password" name="password" id="password"/>
            <Button className={styles.Button} value ="Логин" onClick={loginFunc}/>
            <Button className={styles.RegistrationButton} value="Регистрация" onClick={registrationFunc}/>
            {/* <p>Регистрация</p> */}
        </div>
    );

};

LoginForm.propTypes = {
    className: PropTypes.string,
    loginFunc: PropTypes.func,
    registrationFunc: PropTypes.func,
}



export default LoginForm;