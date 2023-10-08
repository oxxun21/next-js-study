import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { connectToDB } from "../../../lib/db";
import { verifyPassword } from "../../../lib/auth";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const client = await connectToDB();

        const usersCollection = client.db().collection("users");
        const user = await usersCollection.findOne({ email: credentials.email });

        if (!user) {
          client.close();
          throw new Error("등록된 사용자가 없습니다.");
        }

        const isValid = await verifyPassword(credentials.password, user.password);

        if (!isValid) {
          client.close();
          throw new Error("비밀번호가 이상해!");
        }

        client.close();
        return { email: user.email };
      },
    }),
  ],
});
