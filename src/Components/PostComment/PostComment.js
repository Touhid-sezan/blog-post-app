import React from 'react';
import './PostComment.css';
import Photo from '../Photo/Photo';

const PostComment = (props) => {
    const { name, email, body } = props.comment;
    return (
        <div className="comment-section">
            <Photo />
            <div className="comment-content">
                <p className="comment-name">Name : {name} </p>
                <p>E-mail : {email}</p>
                <p>{body}</p>
            </div>

        </div>
    );
};

export default PostComment;