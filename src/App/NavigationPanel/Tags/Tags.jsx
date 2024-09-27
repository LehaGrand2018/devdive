import React, { useState, useEffect } from "react";
import styles from "./Tags.module.scss";
import axios from "axios";

const Tags = (props) => {
    const [users, setUsers] = useState();

    useEffect(() => {
        //Template Function
        const getPopularTags = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUsers(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        getPopularTags();   
    }, []);
    
    let elements;
    if(users !== undefined) {
        elements = users.map((user) => {
            return <li className={styles.Tag} key={user.id}>#{user.username}</li>
        })
    }

    return (
        <ul className={`${styles.tags} ${props.className}`}>
            {elements}
        </ul>
    );
};
export default Tags;
