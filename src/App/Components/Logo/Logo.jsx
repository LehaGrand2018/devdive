import React from 'react';
import styles from './Logo.module.scss';


const Logo = (props) => {
    return (
        <div className={`${styles.Logo} ${props.className}`}  alt="" />
    );  
};

export default Logo;