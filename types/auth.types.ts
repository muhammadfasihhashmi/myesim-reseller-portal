export type LoginUser = {
  id: string;
  role_id: number;
  name: string;
  email: string;
  role: string;
  emailVerified: Date;
  created_at: string;
  updated_at: string;
  stripe_id: string;
  pm_type: null;
  pm_last_four: null;
  trial_ends_at: null;
  deleted_at: null;
  blocked: string;
  should_logout: number;
  app_version: string;
  platform: string;
  limit_forced: number;
  business_name: string;
  business_address: string;
  phone_number: string;
  parent_id: null;
  status: number;
  image_url: string;
  balance: number;
};

export type LoginUserResponse = {
  status: true;
  access_token: string;
  token_type: string;
  user: LoginUser;
  login_via: "email_password";
};

export type LoginUserErrorResponse = {
  status: false;
  message: string;
};

export type LoginUserApiResponse = LoginUserResponse | LoginUserErrorResponse;
