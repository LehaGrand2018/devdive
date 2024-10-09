import React from "react";

import styles from "./Input.module.scss";
import PropTypes from "prop-types";

const Input = (props) => {
  return (
    <div className={`${styles.Input} ${props.className}`}>
      <input
        className={styles.Field}
        placeholder={props.placeholder}
        type={props.type}
        name={props.name}
        id={props.id}
        onChange={props.onChange}
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
  onChange: PropTypes.func,
};

export default Input;
