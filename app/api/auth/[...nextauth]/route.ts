import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { Sequelize } from "sequelize";
import SequelizeAdapter from "@auth/sequelize-adapter";

const sequelize = new Sequelize(process.env.DATABASE_URL || "");

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  adapter: SequelizeAdapter(sequelize),
  callbacks: {
    async session({ session, token, user }) {
      session.user.id = user.id;
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
});
