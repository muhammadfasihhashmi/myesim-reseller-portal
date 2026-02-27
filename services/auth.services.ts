import { LoginFormSchemaType } from "@/lib/zod/LoginSchema";
import { LoginUserApiResponse } from "@/types/auth.types";
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
