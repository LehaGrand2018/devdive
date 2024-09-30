import React, { useEffect } from 'react';
import styles from './PostComments.module.scss'
import CommentsHeader from './CommentsHeader/CommentsHeader';
import Comment from './Comment/Comment'
import { useState } from 'react';
import {parseDate} from '../Functions/Functions'
import AnswerForm from './AnswerForm/AnswerForm';

const PostCommentsList = ({className}) => {


    const [answers, setAnswers] = useState(0);
    const [votes, setVotes] = useState(3);
    
    const data = {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor justo est. Lorem ipsum dolor.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar non elit vel sodales. Maecenas et aliquam magna, vitae fermentum metus. Suspendisse potenti. Etiam et eros nec felis porttitor placerat et sed odio. Morbi rutrum dolor vel sapien interdum sodales. Duis et enim ex. Duis ac mattis risus. Quisque mollis tellus vel magna ultrices maximus. Etiam eu erat et est consequat blandit. Phasellus vitae malesuada quam, fermentum porta sem. Integer interdum lacus orci. Donec ultricies semper purus, a viverra urna. Praesent accumsan nisi aliquet est hendrerit ullamcorper. Morbi elementum metus nulla, vel fermentum neque pellentesque in.Donec id massa ultrices, dictum arcu ac, maximus ex. Donec fermentum metus at sem egestas viverra. In vel neque aliquet, aliquam lacus in, auctor quam. Pellentesque in iaculis dolor. Vivamus in faucibus enim. Suspendisse ipsum erat, finibus a finibus vel, varius scelerisque felis. Donec faucibus metus nec felis eleifend, a cursus lectus condimentum.Etiam dictum purus eget justo aliquam, malesuada tempor mi mattis. Sed id lacus interdum, mattis mauris a, vulputate purus. Vestibulum aliquam pulvinar metus, ut accumsan massa ornare nec. Sed accumsan tristique nulla id feugiat. Pellentesque mattis urna libero, sodales porttitor erat ornare sit amet. Nullam turpis lectus, fermentum eget hendrerit consectetur, feugiat vel nisi. Aenean maximus efficitur posuere. Aliquam pharetra fringilla nibh, non tincidunt arcu luctus vel. Pellentesque a bibendum orci. Vivamus cursus finibus quam sit amet ullamcorper. Nam commodo dignissim sem. Fusce vel risus metus. Donec vestibulum laoreet sem, vitae elementum odio consectetur sed. Etiam tincidunt lacinia risus a rutrum. Fusce viverra venenatis nisi eu cursus.',
        date: new Date(Date.now()), 
    }

    
    return (
        <div className={`${styles.comments} ${className}`}>
            <CommentsHeader
                className={styles.commentsHeader}
                title={data.title}
                date={parseDate(data.date)}
                answersCount={answers}
                votesCount={votes}
            ></CommentsHeader>
            <Comment className={styles.comment} commentText={data.text} votesCount={votes}></Comment>
            <Comment className={styles.comment} commentText={data.text} votesCount={votes}></Comment>
            <Comment className={styles.comment} commentText={data.text} votesCount={votes}></Comment>
            <Comment className={styles.comment} commentText={data.text} votesCount={votes}></Comment>
            <Comment className={styles.comment} commentText={data.text} votesCount={votes}></Comment>
            <Comment className={styles.comment} commentText={data.text} votesCount={votes}></Comment>
            <Comment className={styles.comment} commentText={data.text} votesCount={votes}></Comment>
            <Comment className={styles.comment} commentText={data.text} votesCount={votes}></Comment>
            <Comment className={styles.comment} commentText={data.text} votesCount={votes}></Comment>
            <Comment className={styles.comment} commentText={data.text} votesCount={votes}></Comment>
            <Comment className={styles.comment} commentText={data.text} votesCount={votes}></Comment>
            <Comment className={styles.comment} commentText={data.text} votesCount={votes}></Comment>
            <Comment className={styles.comment} commentText={data.text} votesCount={votes}></Comment>
            <Comment className={styles.comment} commentText={data.text} votesCount={votes}></Comment>
            <Comment className={styles.comment} commentText={data.text} votesCount={votes}></Comment>
            <Comment className={styles.comment} commentText={data.text} votesCount={votes}></Comment>
            <Comment className={styles.comment} commentText={data.text} votesCount={votes}></Comment>
            <Comment className={styles.comment} commentText={data.text} votesCount={votes}></Comment>
            <Comment className={styles.comment} commentText={data.text} votesCount={votes}></Comment>
            <Comment className={styles.comment} commentText={data.text} votesCount={votes}></Comment>
            <Comment className={styles.comment} commentText={data.text} votesCount={votes}></Comment>
            <Comment className={styles.comment} commentText={data.text} votesCount={votes}></Comment>
            <Comment className={styles.comment} commentText={data.text} votesCount={votes}></Comment>
            <Comment className={styles.comment} commentText={data.text} votesCount={votes}></Comment>
            <Comment className={styles.comment} commentText={data.text} votesCount={votes}></Comment>
            <AnswerForm></AnswerForm>
        </div>
    );
};

export default PostCommentsList;