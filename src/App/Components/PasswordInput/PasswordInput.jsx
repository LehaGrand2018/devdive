import React, { useState } from "react";

import eye from "./eye.svg";
import eyeClosed from "./eye-closed.svg";

import styles from "./PasswordInput.module.scss";
import PropTypes from "prop-types";

const PasswordInput = ({ className, placeholder, name, id, onClick, onChange, onBlur }) => {
  const [visible, setVisible] = useState(false);

  let resultEye = null;
  let type = null;
  if (visible) {
    resultEye = eyeClosed;
    type = "text";
  } else {
    resultEye = eye;
    type = "password";
  }

  return (
    <div className={`${styles.PasswordInput} ${className}`} onClick={onClick} onChange={onChange} onBlur={onBlur}>
      <input
        className={styles.Field}
        placeholder={placeholder}
        type={type}
        name={name}
        id={id}
      />
      <img
        onClick={() => {
          invertVissibility([visible, setVisible]);
        }}
        className={styles.Eye}
        src={resultEye}
        alt="eye"
      />
    </div>
  );
};

const invertVissibility = ([visible, setVisible]) => {
  if (visible) {
    setVisible(false);
  } else {
    setVisible(true);
  }
};

PasswordInput.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default PasswordInput;
