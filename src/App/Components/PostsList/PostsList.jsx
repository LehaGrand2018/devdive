import React from 'react';
import Post from '../Post/Post';

import styles from './PostsList.module.scss'


const PostsList = (props) => {

    
    const tags = ['python', 'javascript', 'ruby', 'golang']

    let date = new Date(Date.now())
    console.log(date)

    return (
        <div className={`${styles.PostsList} ${props.className}`}>
            <h2 className={styles.Header}>Вопросы</h2>
            <Post
             postTitle={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure maiores explicabo voluptas, neque deleniti perferendis.'} 
             username={'neurotrier'}
             userPhoto={null} 
             date={date.toUTCString()} 
             answersCount={0} 
             votesCount={0} 
             tags={tags}>
            
            </Post>
            
        </div>
    );
};

export default PostsList;