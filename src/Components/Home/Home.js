import React, { useEffect, useState } from 'react';
import BlogPost from '../BlogPost/BlogPost';

const Home = () => {
  const [myPost, setmyPost] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setmyPost(data))
  }, [])
  return (
    <div>
      {
        myPost.map(myPost => <BlogPost myPost={myPost}></BlogPost>)
      }
    </div>
  );
};

export default Home;