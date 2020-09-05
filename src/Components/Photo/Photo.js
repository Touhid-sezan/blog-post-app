import React, { useEffect, useState } from 'react';
import './Photo.css';
import { useParams } from 'react-router-dom';

const Photo = () => {
    const { postId } = useParams();
    const [photos, setPhotos] = useState({});
    useEffect(() => {
        const photoUrl = `https://jsonplaceholder.typicode.com/photos/${postId}`;
        fetch(photoUrl)
            .then(res => res.json())
            .then(data => setPhotos(data))
    }, [])
    return (
        <div>
            <img src={photos.url} alt="" />
        </div>
    );
};

export default Photo;