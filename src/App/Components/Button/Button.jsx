import React from "react";
import styles from "./Button.module.scss";
import PropTypes from "prop-types";

const Button = ({ className, value, type, onClick, onSubmit }) => {
    return (
        <button
            className={`${styles.Button} ${className}`}
            onClick={onClick}
            onSubmit={onSubmit}
            type={type}
        >{value}</button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
    onSubmit: PropTypes.func,
}
export default Button;
