import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostComment from '../PostComment/PostComment';

const CommentSection = () => {
    const { postId } = useParams();
    const [comment, setComment] = useState([]);
    useEffect(() => {
        const commentUrl = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(commentUrl)
            .then(res => res.json())
            .then(data => setComment(data))
    }, [])
    return (
        <div>
            <h3>Comment:</h3>
            {
              comment.map(comment => <PostComment comment={comment}></PostComment>)
      }
        </div>
    );
};

export default CommentSection;