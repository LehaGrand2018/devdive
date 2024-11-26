import React, { useState, useEffect } from "react";
import styles from "./Tags.module.scss";
import PropTypes from "prop-types";
import { getTags } from "../../../Requests/TagsRequests";
import { useNavigate } from "react-router-dom";
const Tags = ({ className }) => {
  const [tags, setTags] = useState(null);
  const [elements, setElements] = useState(null);
  const navigate = useNavigate();


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
            <li className={styles.tag} key={id} onClick={()=>{navigate(`../questions?tags=${name}`)}}>
              #{name}
            </li>
          ) : null;
        })
      );
    }
  }, [tags, navigate]);

  return <ul className={`${styles.tags} ${className}`}>{elements}</ul>;
};

Tags.propTypes = {
  className: PropTypes.string,
};
export default Tags;
