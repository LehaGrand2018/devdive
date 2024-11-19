import React, { useContext, useEffect, useState } from "react";
import styles from "./TagsList.module.scss";
import Tag from "./Tag/Tag";
import TagsHeader from "./TagsHeader/TagsHeader";
import { TagsContext } from "../../Contexts/TagsContext";

const TagsList = (props) => {
  const { getTags, createTag } = useContext(TagsContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [tagsObj, setTagsObj] = useState(null);
  const [elements, setElements] = useState(null);


  // useEffect(() => {
  //   const createTags = async () => {
  //     for (const tag of programmingTags) {
  //       const name = tag;
  //       const description = `This tag is related to ${tag} in programming and software development.`;
  //       try {
  //         await createTag({ name, description });
  //         console.log(`Successfully created tag: ${name}`);
  //         break
  //       } catch (error) {
  //         console.error(`Failed to create tag: ${name}`, error);
  //         break
  //       }
  //     }
  //   };
    
  //   createTags();
  

  // }, [])
  

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
    <section className={`${styles.tagsList} ${props.className}`}>
      <TagsHeader
        className={styles.header}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      ></TagsHeader>
      <ul className={styles.tags}>{elements}</ul>
    </section>
  );
};

export default TagsList;
