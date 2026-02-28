import { auth } from "@/lib/auth";
import { LoginFormSchemaType } from "@/lib/zod/LoginSchema";
import { LoginUser, LoginUserApiResponse } from "@/types/auth.types";
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL as string;

export async function loginUser(credential: LoginFormSchemaType) {
  try {
    const response = await fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credential),
    });
    if (!response.ok)
      throw new Error(`Login api failed with status of ${response.status}`);
    const data: LoginUserApiResponse = await response.json();
    if (!data.status) throw new Error(data.message);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("something went wrong");
    }
  }
}

export async function getUser() {
  try {
    const session = await auth();
    if (!session) throw new Error("session not found");
    const response = await fetch(`${baseUrl}/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.accessToken}`,
      },
    });
    if (!response.ok)
      throw new Error(`user api failed with response ${response.status}`);
    const data: LoginUser = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("something went wrong");
    }
  }
}
