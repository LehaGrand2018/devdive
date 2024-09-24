import React from 'react';

import  styles from './Input.module.css';



const Input = (props) => {

    return (
        <div className={`${styles.Input} ${props.className}`}>
            <input className={styles.Field} placeholder={props.value} type={props.type} name={props.name} id={props.id} />
        </div>
    );
};

export default Input;