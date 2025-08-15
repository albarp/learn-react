import { useState, type ChangeEvent } from "react";

export default function ArtDetail() {
  const [artist, setArtist] = useState({
    Name: "Niki de Saint Phalle",
    Artwork: {
      Title: "Blue Nana",
      City: "Hamburg",
      Image: "https://imgur.com/Mx7dA2Y",
    },
  });

  function handleChangeName(e: ChangeEvent<HTMLInputElement>) {
    setArtist({
        ...artist,
        Name: e.target.value
    })
  }

  function handleChangeTitle(e: ChangeEvent<HTMLInputElement>) {
    setArtist({
        ...artist,
        Artwork: {
            ...artist.Artwork,
            Title: e.target.value
        }
    })
  }

  return (
    <>
    <br/>
      <label>Name</label>
      <input type="text" value={artist.Name} onChange={handleChangeName}/>
      <label>Title</label>
      <input type="text" value={artist.Artwork.Title} onChange={handleChangeTitle}/>
      <label>City</label>
      <input type="text" value={artist.Artwork.City}/>
      <label>Image</label>
      <img src={artist.Artwork.Image} />
      <br/>
      <br/>
    </>
  );
}
