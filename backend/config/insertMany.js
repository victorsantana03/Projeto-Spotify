import { artistsArray } from "../../frontend/src/assets/database/artists.js";
import { songsArray } from "../../frontend/src/assets/database/songs.js";
import { db } from "./connect.js";

const newArtistArray = artistArray.map((artist) => {
  //removendo Id da lista
  const artistObj = { ...artist };
  delete artistObj.id;
  return artistObj;
});

const newSongsArray = songsArray.map((song) => {
  //removendo Id da lista
  const songObj = { ...song };
  delete songObj.id;
  return songObj;
});

const responseSongs = await db.collection("songs").insertMany(newSongsArray); //acessa a collection songs e insere o novo array
const responseArtists = await db
  .collection("artists")
  .insertMany(newArtistArray); //acessa a collection artists e insere o novo array

console.log(responseArtists);
console.log(responseSongs);
