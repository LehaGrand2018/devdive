import React from 'react';
import Button from '../Button/Button.jsx';
import Input from '../Input/Input.jsx';
import styles from './RegistrationForm.module.scss'
import buttonStyles from '../Button/Button.module.scss';
import PasswordInput from '../PasswordInput/PasswordInput.jsx';
import PropTypes from 'prop-types';


const RegistrationForm = ({className, registrationFunc, loginFunc}) => {

    return (
        <div className={`${styles.RegistrationForm}  ${className}`}>
            <h2 className={styles.RegistrationLable}>Регистрация</h2>

            <Input className={styles.Input} placeholder="Имя пользователя" type="text" name="username" id="username" />
            <Input className={styles.Input} placeholder="Email" type="text" name="email" id="email" />
            <PasswordInput className={styles.Input} placeholder="Пароль" type="password" name="password" id="password"/>
            <Button className={styles.Button} value = "Регистрация" onClick={registrationFunc}/>
            <Button className={styles.LoginButton} value="Вход" onClick={loginFunc}/>
        </div>
    );
};

RegistrationForm.propTypes = {
    className: PropTypes.string,
    registrationFunc: PropTypes.func,
    loginFunc: PropTypes.func,
}

export default RegistrationForm;