import React, { useState } from "react";

import eye from "./eye.svg";
import eyeClosed from "./eye-closed.svg";

import styles from "./PasswordInput.module.scss";

const PasswordInput = ({ className, placeholder, name, id }) => {
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
    <div className={`${styles.PasswordInput} ${className}`}>
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

export default PasswordInput;
