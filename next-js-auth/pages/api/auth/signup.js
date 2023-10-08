import { hashPassword } from "../../../lib/auth";
import { connectToDB } from "../../../lib/db";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  const data = req.body;

  const { email, password } = data;

  if (!email || !email.includes("@") || !password || password.trim().length < 7) {
    res.status(422).json({ message: "이메일 또는 비밀번호가 유효하지 않습니다." });
    return;
  }

  const client = await connectToDB();

  const db = client.db();

  const existingUser = await db.collection("users").findOne({ email: email });

  if (existingUser) {
    res.status(422).json({ message: "이미 가입된 이메일 입니다." });
    client.close();
    return;
  }

  const hashedPassword = hashPassword(password);

  const result = await db.collection("users").insertOne({
    email: email,
    password: hashedPassword,
  });

  res.status(201).json({ message: "회원가입 완료" });
}

export default handler;
