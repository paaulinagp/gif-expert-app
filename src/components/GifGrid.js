import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
  const [images, setImages] = useState([]);  
  
  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url =`https://api.giphy.com/v1/gifs/search?api_key=4BnvcbsxEOoVInUE8HhNpT7NxafDQy1V&q=Harry Potter`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map( (gif) => ({
      id: gif.id,
      title: gif.title,
      url: gif.images?.downsized_medium.url
    }) );
    setImages(gifs);
  };

  return (
    <div>
      <h3>{category}</h3>
        {
          images.map( (img) => (
            <GifGridItem key={img.id} {...img} />
          ))
        }
    </div>
  )
}
