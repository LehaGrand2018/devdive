import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';

import styles from './PostsList.module.scss'
import axios from 'axios';


const PostsList = (props) => {

    const getPosts = async () => {
        
        try {
            let posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log(posts.data)
            setPosts(posts.data);
        } catch (error) {
            console.error(error)
        }
    }
    

    const tags = ['python', 'javascript', 'ruby', 'golang']

    let date = new Date(Date.now())

    const [posts, setPosts] = useState()

    let postsList;


    useEffect(() => {
      
        const getPosts = async () => {
        
            try {
                let posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
                console.log(posts.data)
                setPosts(posts.data);
            } catch (error) {
                console.error(error)
            }
        }

        getPosts();
        

    }, [])
    

   
    
    if (posts != undefined) {
        postsList = posts.map((post /*{userId, id, title}*/) => {
            console.log("map");
            return (
                <Post
                    className={styles.Post}
                    postTitle={post.title}
                    username={"user" + post.userId}
                    userPhoto={null}
                    date={date.toUTCString()}
                    answersCount={post.id}
                    votesCount={0}
                    tags={tags}
                ></Post>
            );
        });
    }

    
    return (
        <div className={`${styles.PostsList} ${props.className}`}>
            <h2 className={styles.Header}>Вопросы</h2>
            {/* <Post
             postTitle={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure maiores explicabo voluptas, neque deleniti perferendis.'} 
             username={'neurotrier'}
             userPhoto={null} 
             date={date.toUTCString()} 
             answersCount={0} 
             votesCount={0} 
             tags={tags}>
            
            </Post> */}
            {postsList}
        </div>
    );
};

export default PostsList;