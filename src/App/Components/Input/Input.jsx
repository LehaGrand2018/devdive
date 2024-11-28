import React from "react";

import styles from "./Input.module.scss";
import PropTypes from "prop-types";

const Input = ({className, placeholder, type, name, id, onChange, onBlur, onClick}) => {
  return (
    <div className={`${styles.Input} ${className}`}>
      <input
        className={styles.Field}
        placeholder={placeholder}
        type={type}
        name={name}
        id={id}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default Input;
