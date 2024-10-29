import React from "react";
import styles from "./Button.module.scss";

const Button = ({ className, onClick, value, type }) => {
    return (
        <button
            className={`${styles.Button} ${className}`}
            onClick={onClick}
            type={type}
        >{value}</button>
    );
};

export default Button;
