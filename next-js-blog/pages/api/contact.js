import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (!email || !email.includes("@") || !name || name.trim() === "" || !message || message.trim() === "") {
      res.status(422).json({ message: "유효성 불일치" });
      return;
    }
    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    try {
      client = await MongoClient.connect("mongodb+srv://OhGaEun:5oXai5HidhjuAa2a@cluster0.kach5sy.mongodb.net/");
    } catch (e) {
      res.status(500).json({ message: "DB 연결 실패" });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (e) {
      client.close();
      res.status(500).json({ message: "실패" });
      return;
    }

    client.close();

    res.status(201).json({ message: "성공", message: newMessage });
  }
}

export default handler;
