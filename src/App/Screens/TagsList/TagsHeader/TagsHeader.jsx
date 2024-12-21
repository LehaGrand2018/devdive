import { React } from "react";
import styles from "./TagsHeader.module.scss";
import Search from "../../../Components/Search/Search";
import { useTranslation } from "react-i18next";

const TagsHeader = ({ searchTerm, setSearchTerm, className }) => {
  const { t } = useTranslation()
  return (
    <div className={`${styles.tagsHeader} ${className}`}>
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
  );
};

export default TagsHeader;
