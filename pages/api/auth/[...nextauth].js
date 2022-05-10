import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import connectDB from "../../../middleware/mongodb";
import { verifyPassword } from "../../../lib/auth";
const User = require("../../../models/user");

export default connectDB(
  NextAuth({
    secret: process.env.SECRET,
    session: {
      strategy: "jwt",
    },
    providers: [
      Credentials({
        async authorize(credentials) {
          const user = await User.findOne({
            email: credentials.email,
          });

          if (!user) {
            throw new Error("No user found!");
          }

          const isValid = await verifyPassword(
            credentials.password,
            user.password
          );

          if (!isValid) {
            throw new Error("Could not log you in!");
          }

          return { email: user.email };
        },
      }),
    ],
  })
);
