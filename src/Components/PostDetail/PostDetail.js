import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import { Card, CardActionArea, CardContent, Typography} from '@material-ui/core';
import CommentSection from '../CommentSection/CommentSection';



const useStyles = makeStyles({
    root: {
      maxWidth: 800,
    },
    media: {
      height: 140,
    },
  });


const PostDetail = () => {
  const classes = useStyles();
    const { postId } = useParams();
    const [post, setPost] = useState({});
    useEffect( () => {
        const postUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(postUrl)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])
    return (
            <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            <span className="titles">Post Name: </span>{post.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            <span className="titles">Post Content: </span>{post.body}
            </Typography>
            <br/>
            <hr/>
           <CommentSection/>
          </CardContent>
        </CardActionArea>
      </Card>
    );
};

export default PostDetail;