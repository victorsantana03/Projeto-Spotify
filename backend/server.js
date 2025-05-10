import express from "express";
import cors from "cors";
import { db } from "./config/connect.js";
import path from "path";

const _dirname = path.resolve();

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(cors());

app.get("/api/artists", async (req, res) => {
  const artistCollection = await db.collection("artists").find({}).toArray(); //acessa a collection artists, encontra tudo (find) e retorna um array (toArray)
  res.json(artistCollection);
});

app.get("/api/songs", async (req, res) => {
  const songCollection = await db.collection("songs").find({}).toArray(); //acessa a collection songs, encontra tudo (find) e retorna um array (toArray)
  res.json(songCollection);
});

app.use(express.static(path.join(_dirname, "../frontend/dist")));

app.get(/(.*)/, async (req, res) => {
  response.sendFile(path.join(_dirname, "../frontend/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor ouvindo na porta ${PORT}`);
});

//viclucigei123
//A0eMbDNvFXtaseID
