import { loginUser } from "@/services/auth.services";
import { LoginUser, LoginUserApiResponse } from "@/types/services.types";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          if (!credentials?.email || !credentials?.password) {
            return null;
          }
          const data: LoginUserApiResponse = await loginUser({
            email: credentials.email as string,
            password: credentials.password as string,
          });
          if (!data || !data.user) {
            return null;
          }

          const userObject = {
            accessToken: data.access_token,
            ...data.user,
          };
          console.log("✅ 3. Returning user object:", userObject);
          return userObject;
        } catch (error) {
          console.log("Authorize error:", error);
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && token.user) {
        const user = token.user as LoginUser;
        session.accessToken = token.accessToken as string;
        session.user = {
          ...user,
          // Dummy value to satisfy TS use session.accessToken instead
          accessToken: "Dummy Token",
        };
      }
      return session;
    },
  },

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },
});
