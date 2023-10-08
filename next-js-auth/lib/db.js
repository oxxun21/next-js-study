import { MongoClient } from "mongodb";

export async function connectToDB() {
  const client = await MongoClient.connect("mongodb+srv://OhGaEun:sO35F7d7poh1DSOe@cluster0.kach5sy.mongodb.net/");

  return client;
}
