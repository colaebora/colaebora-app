import { colaClient } from './client';
export class AuthService {
  static async googleLogin(accessToken: string) {
    try {
      const response = await colaClient.put(
        `/auth/login/google/${accessToken}`
      );
      console.log('response', response.status);
      return response;
    } catch (error) {
      console.log('error', error);
    }
  }
}
