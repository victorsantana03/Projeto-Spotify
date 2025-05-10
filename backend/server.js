import express from "express";
import cors from "cors";
import { db } from "./config/connect.js";

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(cors());

app.get("/artists", async (req, res) => {
  const artistCollection = await db.collection("artists").find({}).toArray(); //acessa a collection artists, encontra tudo (find) e retorna um array (toArray)
  res.json(artistCollection);
});

app.get("/songs", async (req, res) => {
  const songCollection = await db.collection("songs").find({}).toArray(); //acessa a collection songs, encontra tudo (find) e retorna um array (toArray)
  res.json(songCollection);
});

app.listen(PORT, () => {
  console.log(`Servidor ouvindo na porta ${PORT}`);
});

//viclucigei123
//A0eMbDNvFXtaseID
