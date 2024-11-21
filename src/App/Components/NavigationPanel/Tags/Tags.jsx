import React, { useState, useEffect } from "react";
import styles from "./Tags.module.scss";
import PropTypes from "prop-types";
import { getTags } from "../../../Requests/TagsRequests";

const Tags = ({ className }) => {
  const [tags, setTags] = useState(null);
  const [elements, setElements] = useState(null);

  //get tags
  useEffect(() => {
    (async () => {
      const tags = await getTags();
      setTags(tags);
    })();
  }, []);

  // display tags
  useEffect(() => {
    if (tags) {
      setElements(
        tags.tags.map(({ id, name }, index) => {
          return index <= 20 ? (
            <li className={styles.tag} key={id}>
              #{name}
            </li>
          ) : null;
        })
      );
    }
  }, [tags]);

  return <ul className={`${styles.tags} ${className}`}>{elements}</ul>;
};

Tags.propTypes = {
  className: PropTypes.string,
};
export default Tags;
