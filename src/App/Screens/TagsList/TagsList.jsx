import React, { useEffect, useState } from "react";
import styles from "./TagsList.module.scss";
import Tag from "./Tag/Tag";
import TagsHeader from "./TagsHeader/TagsHeader";
import PropTypes from "prop-types";
import { getTags } from "../../Requests/TagsRequests";

const TagsList = ({ className }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [tagsObj, setTagsObj] = useState(null);
  const [elements, setElements] = useState(null);

  // get tags
  useEffect(() => {
    const fetchTags = async () => {
      setTagsObj(await getTags());
    };
    fetchTags();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // display tags
  useEffect(() => {
    if (tagsObj) {
      // Фильтрация тегов на основе поиска
      const filteredTags = tagsObj.tags.filter((tag) => {
        return tag.name.toLowerCase().includes(searchTerm.toLowerCase());
      });

      const filtered = filteredTags.map(({ id, name, description }) => (
        <Tag
          className={styles.tag}
          key={id}
          value={name}
          description={description}
        />
      ));

      setElements(filtered);
    }
  }, [tagsObj, searchTerm]);

  return (
    <section className={`${styles.tagsList} ${className}`}>
      <TagsHeader
        className={styles.header}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <ul className={styles.tags}>{elements}</ul>
    </section>
  );
};

TagsList.propTypes = {
  className: PropTypes.string,
};

export default TagsList;
