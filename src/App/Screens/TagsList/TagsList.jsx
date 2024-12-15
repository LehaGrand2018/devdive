import React, { useEffect, useState } from "react";
import styles from "./TagsList.module.scss";
import Tag from "./Tag/Tag";
import PropTypes from "prop-types";
import { getTags } from "../../Requests/TagsRequests";
import { useTranslation } from "react-i18next";
import Search from "../../Components/Search/Search";

const TagsList = ({ className }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [tagsObj, setTagsObj] = useState(null);
  const [elements, setElements] = useState(null);
  const { t } = useTranslation();
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
      <div className={`${styles.header} ${className}`}>
        <h1 className={styles.title}>{t("tagsList.title")}</h1>
        <Search
          className={styles.search}
          type="text"
          placeholder={t("tagsList.search")}
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          hideButton={"true"}
        ></Search>
      </div>
      <ul className={styles.tags}>{elements}</ul>
    </section>
  );
};

TagsList.propTypes = {
  className: PropTypes.string,
};

export default TagsList;
