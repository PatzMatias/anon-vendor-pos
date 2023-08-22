import NextAuth from "next-auth";
import { authOptions } from "~/server/auth/index";

export default NextAuth(authOptions);