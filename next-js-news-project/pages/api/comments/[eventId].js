import { MongoClient } from "mongodb";
import { connectDatabase, getAllDocuments, insertDocument } from "../../../helpers/db-util";

async function handler(req, res) {
  const eventId = req.query.eventId;
  let client;

  try {
    client = await connectDatabase();
  } catch (e) {
    res.status(500).json({ message: "DB 연결 실패" });
    return;
  }

  if (req.method === "POST") {
    const { email, name, text } = req.body;
    if (!email.includes("@") || !name || name.trim() === "" || !text || text.trim() === "") {
      res.status(422).json({ message: "입력하세요" });
      client.close();
      return;
    }
    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    let result;

    try {
      result = await insertDocument(client, "comments", newComment);
      newComment._id = result.insertedId;

      res.status(201).json({ message: "작성 완료", comment: newComment });
    } catch (e) {
      res.status(500).json({ message: "데이터 삽입 실패" });
    }
  }

  if (req.method === "GET") {
    try {
      const documents = await getAllDocuments(client, "comments", { _id: -1 });
      res.status(200).json({ comments: documents });
    } catch (e) {
      res.status(500).json({ message: "댓글 가져오기 실패" });
    }
  }
  client.close();
}

export default handler;
