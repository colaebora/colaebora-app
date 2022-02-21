import { colaClient } from './client';

type ColaGoogleLoginResponse = {
  firstLogin: true;
  token: 'string';
};

export class AuthService {
  static async googleLogin(
    accessToken: string
  ): Promise<ColaGoogleLoginResponse> {
    const res = await colaClient.put(`/api/auth/login/google/${accessToken}`);
    console.log({
      colaRequest: {
        url: `/api/auth/login/google/${accessToken}`,
        method: 'PUT',
      },
    });
    console.log({ colaResponse: { data: res.data, status: res.status } });
    return res.data;
  }
}
