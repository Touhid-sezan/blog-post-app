import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './BlogPost.css';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const { title, body, id } = props.myPost;
  return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
             <span className="titles">Post Name:</span> {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             <span className="titles">Post Content:</span> {body}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Link className="link-btn" to={`/postDetail/${id}`}>
          <Button variant="contained" color="secondary">View Full Post With Comments</Button>
        </Link>
        </CardActions>
      </Card>
  );
}
