import { searchParamsType } from "@/app/(dashboards)/reseller/page";
import { auth } from "@/lib/auth";
import {
  AllTimeStatsResponse,
  CustomerActivityResponse,
  SixMonthGraphResponse,
  StatsOverviewResponse,
  SummaryCardResponse,
} from "@/types/dashboard.types";
import { format } from "date-fns";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL as string;

const D = new Date();
const toDay = new Date(D.getFullYear(), D.getMonth(), D.getDate());

export async function getStatsOverview(range: searchParamsType) {
  try {
    const session = await auth();
    if (!session) throw new Error("session is missing");
    const role = session.user.role.toLowerCase();
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
    const data: StatsOverviewResponse = await response.json();
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

export async function getSummaryCard(range: searchParamsType) {
  try {
    const session = await auth();
    if (!session) throw new Error("session is missing");
    const role = session.user.role.toLowerCase();
    const response = await fetch(
      `${baseUrl}/${role}/overview/summerycards?start_date=${range.start_date ?? format(toDay, "yyyy-MM-dd")}&end_date=${range.end_date ?? format(toDay, "yyyy-MM-dd")}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.accessToken}`,
        },
      },
    );
    if (!response.ok) {
      throw new Error(`summary card api failed with status ${response.status}`);
    }
    const data: SummaryCardResponse = await response.json();
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

export async function getAllTimeStats() {
  try {
    const session = await auth();
    if (!session) throw new Error("session is missing");
    const role = session.user.role.toLowerCase();
    const response = await fetch(`${baseUrl}/${role}/overview/all_time`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.accessToken}`,
      },
    });
    if (!response.ok) {
      throw new Error(
        `All time stat api failed with status ${response.status}`,
      );
    }
    const data: AllTimeStatsResponse = await response.json();
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

export async function getSixMonthGraphData() {
  try {
    const session = await auth();
    if (!session) throw new Error("session is missing");
    const role = session.user.role.toLowerCase();
    const response = await fetch(`${baseUrl}/${role}/overview/six_month`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.accessToken}`,
      },
    });
    if (!response.ok) {
      throw new Error(
        `six month graph api failed with status ${response.status}`,
      );
    }
    const data: SixMonthGraphResponse = await response.json();
    if (data.status === false) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("something went wrong");
    }
  }
}

export async function getCustomerActivity(range: searchParamsType) {
  try {
    const session = await auth();
    if (!session) throw new Error("session is missing");
    const role = session.user.role.toLowerCase();
    const response = await fetch(
      `${baseUrl}/${role}/overview/customer_activity?start_date=${range.start_date ?? format(toDay, "yyyy-MM-dd")}&end_date=${range.end_date ?? format(toDay, "yyyy-MM-dd")}`,
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
        `customer activity api failed with status ${response.status}`,
      );
    }
    const data: CustomerActivityResponse = await response.json();
    if (data.status === false) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("something went wrong");
    }
  }
}
