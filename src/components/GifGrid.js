import React from 'react'

export const GifGrid = ({category}) => {

  const getGifs = async () => {
    const url =`https://api.giphy.com/v1/gifs/search?api_key=4BnvcbsxEOoVInUE8HhNpT7NxafDQy1V&q=Harry Potter`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map( (gif) => ({
      id: gif.id,
      title: gif.title,
      img: gif.images?.downsized_medium.url
    }) );
    console.log(gifs)
  };
  getGifs();
  return (
    <div>
      <h3>{category}</h3>
    </div>
  )
}
