import { auth } from "@/lib/auth";
import { format } from "date-fns";
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL as string;

const D = new Date();
const toDay = new Date(D.getFullYear(), D.getMonth(), D.getDate());

export async function getStatsOverview(range: {
  start_date: string;
  end_date: string;
}) {
  try {
    const session = await auth();
    if (!session) throw new Error("session is missing");
    const role = session.user.role.toLocaleLowerCase();
    const response = await fetch(
      `${baseUrl}/${role}/overview/overview?start_date=${range.start_date ?? format(toDay, "yyyy-MM-dd")}&end_date=${range.end_date ?? format(toDay, "yyyy-MM-dd")}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.accessToken}`,
        },
      },
    );
    if (!response.ok) {
      throw new Error(
        `stats overview api failed with status ${response.status}`,
      );
    }
    const data = await response.json();
    if (data.status === false) {
      throw new Error(data.message);
    }
    return data.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("something went wrong");
    }
  }
}

export async function getSummaryCard() {
  try {
    const session = await auth();
    if (!session) throw new Error("session is missing");
    const role = session.user.role.toLocaleLowerCase();
    const response = await fetch(`${baseUrl}/${role}/overview/summerycards`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.accessToken}`,
      },
    });
    if (!response.ok) {
      throw new Error(`summary card api failed with status ${response.status}`);
    }
    const data = await response.json();
    if (data.status === false) {
      throw new Error(data.message);
    }
    return data.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("something went wrong");
    }
  }
}
