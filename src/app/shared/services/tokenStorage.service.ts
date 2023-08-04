import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {

  tokenRefreshKey = 'refreshToken';
  private tokenKey = 'token';

  constructor() {}

  updateAccessToken(token: any) {
    localStorage.setItem(this.tokenKey, token);
  }

  updateRefreshToken(refreshToken: any) {
    localStorage.setItem(this.tokenRefreshKey, refreshToken);
  }

  getAccessToken() {
    return localStorage.getItem(this.tokenKey);
  }

  getRefreshToken() {
    return localStorage.getItem(this.tokenRefreshKey);
  }

  isLoggedIn(): boolean {
    const token = this.getAccessToken();
    return token != null;
  }

  removeAccessToken() {
    localStorage.removeItem(this.tokenKey);
  }
}
