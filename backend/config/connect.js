import { MongoClient } from "mongodb";

const URL =
  "mongodb+srv://viclucigei123:A0eMbDNvFXtaseID@cluster0.8rqfvxb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URL); //conexão com o banco

export const db = client.db("spotify"); //acessa a database spotify
