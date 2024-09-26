import React from 'react';
import Button from '../../Button/Button.jsx';
import Input from '../../Input/Input.jsx';
import styles from './RegisterForm.module.scss'
import buttonStyles from '../../Button/Button.module.scss';
import PasswordInput from '../../PasswordInput/PasswordInput.jsx';


const RegisterForm = (props) => {

    return (
        <div className={`${styles.RegisterForm}  ${props.className}`}>
            <Input className={styles.Input} value="Имя пользователя" type="text" name="username" id="username" />
            <Input className={styles.Input} value="Логин" type="text" name="login" id="login" />
            <PasswordInput className={styles.Input} value="Пароль" type="password" name="password" id="password"/>
            <Button className={buttonStyles.Button} value = "Регистрация"/>
        </div>
    );
};

export default RegisterForm;