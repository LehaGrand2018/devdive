import React from "react";
import styles from "./Search.module.scss";
import searchIcon from "./search.svg";
import PropTypes from "prop-types";

const Search = ({
  className,
  placeholder,
  type,
  name,
  id,
  onChange,
  onClick,
  hideButton,
}) => {
  return (
    <div className={`${styles.search} ${className}`}>
      <input
        className={styles.field}
        placeholder={placeholder}
        type={type}
        name={name}
        id={id}
        onChange={onChange}
      />
      <img
        className={`${styles.button} ${className} ${
          hideButton === "true" ? styles.hide : ""
        }`}
        onClick={onClick}
        src={searchIcon}
        alt={"search"}
      />
    </div>
  );
};

Search.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  hideButton: PropTypes.string,
};

export default Search;
