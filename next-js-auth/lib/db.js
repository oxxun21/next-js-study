import { MongoClient } from "mongodb";

function connectToDB() {
  MongoClient.connect("mongodb+srv://OhGaEun:sO35F7d7poh1DSOe@cluster0.kach5sy.mongodb.net/");
}
