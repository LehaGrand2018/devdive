import React, { useState } from 'react';

import eye from './eye.svg';
import eyeClosed from './eye-closed.svg';

import styles from './PasswordInput.module.css';


const PasswordInput = (props) => {

    const [visible, setVisible] = useState(false);

    let resultEye = null;
    let type = null;
    if (visible) {
        resultEye = eyeClosed;
        type = "text";
    } else{
        resultEye = eye;
        type = "password";
    }
    
    return (
        <div className={`${styles.PasswordInput} ${props.className}`}>
            <input className={styles.Field} placeholder={props.value} type={type} name={props.name} id={props.id} />
                <img onClick={()=>{invertVissibility([visible, setVisible])}} className={styles.Eye} src={resultEye} alt="eye" />
        </div>
    );
};

const invertVissibility = ([visible, setVisible]) => {
    if(visible){
        setVisible(false);
    } else{
        setVisible(true);
    }
};

export default PasswordInput;