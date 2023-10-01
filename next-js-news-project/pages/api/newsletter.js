import { connectDatabase, insertDocument } from "../../helpers/db-util";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "이메일 유효성 불일치" });
      return;
    }

    let client;

    try {
      client = await connectDatabase();
    } catch (e) {
      res.status(500).json({ message: "DB 연결 실패" });
      return;
    }

    try {
      await insertDocument(client, "emails", { email: userEmail });
      client.close();
    } catch (e) {
      res.status(500).json({ message: "데이터 삽입 실패" });
      return;
    }

    res.status(201).json({ message: "가입 완료" });
  }
}

export default handler;
