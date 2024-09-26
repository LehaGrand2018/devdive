import React from 'react';
import styles from './Button.module.scss'

const Button = (props) => {
    return (
        <button className={`${styles.Button} ${props.className}`} onClick={props.onClick}>{props.value}</button>
    );
};

export default Button;