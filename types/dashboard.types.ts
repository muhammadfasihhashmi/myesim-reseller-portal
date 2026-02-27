type ErrorObj = {
  status: false;
  message: string;
};

type SuccessResponse<T> = {
  status: true;
  data: T;
};

type ApiResponse<T> = SuccessResponse<T> | ErrorObj;

export type StatsOverview = {
  overview: {
    all_bundles_amount: number;
    dealer_sale_amount: number;
    dealer_profit: number;
    bundle_count: number;
    dealer_bundle_count: number;
    esim_sold: number;
    dealer_esim_sold: number;
    wallet_refill: number;
  };
};
export type StatsOverviewResponse = ApiResponse<StatsOverview>;

export type SummaryCards = {
  summerycards: {
    balance: number;
    esim_sold: number;
    bundle_sold: number;
    bundle_sold_breakdown: {
      regional: number;
      local: number;
      global: number;
    };
  };
};
export type SummaryCardResponse = ApiResponse<SummaryCards>;

export type AllTimeStats = {
  all_time: {
    total_wallet_refill: number;
    total_bundle_sold: number;
    total_esim_sold: number;
    total_dealer: number;
    total_sale_made_by_dealer: number;
    total_profit_earn_from_dealer: number;
  };
};
export type AllTimeStatsResponse = ApiResponse<AllTimeStats>;

export type SixMonthGraph = {
  six_month: {
    months: string[];
    esim_sold: number[];
    bundle_count: number[];
    sale: number[];
    profit: number[];
  };
};
export type SixMonthGraphResponse = ApiResponse<SixMonthGraph>;

export type CustomerActivity = {
  customer_activity: {
    new_users: number;
    sim_buy: number;
    visitor: number;
    renew_packages: number;
  };
};
export type CustomerActivityResponse = ApiResponse<CustomerActivity>;
