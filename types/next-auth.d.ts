import { LoginUser } from "./auth.types";

declare module "next-auth" {
  interface Session {
    accessToken: string;
    user: LoginUser;
  }

  interface User extends LoginUser {
    accessToken: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken: string;
    user: LoginUser;
  }
}
