import React from 'react';

import  styles from './Input.module.scss';



const Input = (props) => {

    return (
        <div className={`${styles.Input} ${props.className}`}>
            <input className={styles.Field} placeholder={props.placeholder} type={props.type} name={props.name} id={props.id} onChange={props.onChange}/>
        </div>
    );
};

export default Input;