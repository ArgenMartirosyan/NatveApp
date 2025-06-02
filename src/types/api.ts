export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface Auth0Credentials {
  accessToken: string;
  refreshToken?: string;
  idToken: string;
  scope: string;
  expiresIn: number;
  tokenType: string;
}
