import PropTypes from "prop-types";
import React from "react";
import styles from "./TopTags.module.scss";
import { useTranslation } from "react-i18next";

const TopTags = ({ className, tags }) => {
  const { t } = useTranslation();
  const elements = tags.map(({ id, name }, index) => {
    return <p key={id} className={styles.tag}>{`#${name}`}</p>;
  });

  return (
    <div className={`${styles.top} ${className}`}>
      <h2 className={styles.header}>{t("profile.tagsTop")}</h2>
      <div className={styles.tags}>{elements}</div>
    </div>
  );
};

TopTags.propTypes = {
  className: PropTypes.string,
  tags: PropTypes.array.isRequired,
};

export default TopTags;
