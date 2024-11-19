import React, { useState, useEffect, useContext } from "react";
import styles from "./Tags.module.scss";
import PropTypes from "prop-types";
import { TagsContext } from "../../../Contexts/TagsContext";

const Tags = ({ className }) => {
  const [tags, setTags] = useState(null);
  const [elements, setElements] = useState(null);
  const { getTags } = useContext(TagsContext);

  //get tags
  useEffect(() => {
    const getPopularTags = async () => {
      const tags = await getTags();
      console.log("Tags:", tags);
      setTags(tags);
    };
    getPopularTags();
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
