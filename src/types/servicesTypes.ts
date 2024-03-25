export interface ILogin {
  email: string;
  password?: string;
}

export interface ILoginResponse {
  error: number;
  detail: any[];
  timestamp: number;
  access_token: string;
  refresh_token: string;
  token_expire: number;
  refresh_token_expire: number;
}

export interface IResetPassword {
  email: string;
  redirect_url: "https://auth-qa.qencode.com/password-set";
}

export interface IResetPasswordResponse {
  error: number;
  detail: any[];
  timestamp: number;
}

export interface ISetPassword {
  token: string;
  secret: string;
  password: string;
  password_confirm: string;
}

export interface ISetPasswordResponse extends IResetPasswordResponse {}
