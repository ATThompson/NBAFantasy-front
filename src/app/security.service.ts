import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  fetchTokenStateless(uri: any) {
    return this.http.get(uri);
  }

  private authorizeEndpoint = '/oauth2/authorization/yahoo'
  private tokenEndpoint = '/login/oauth2/code/yahoo';
  private baseUrl = environment.baseUrl;
  private tokenKey = 'token';

  constructor(private http: HttpClient) {
  }

  login() {
    window.open(this.baseUrl + this.authorizeEndpoint, '_self');
  }

  loginStateless():Observable<any>{
    return this.http.get(this.baseUrl + this.authorizeEndpoint);
  }

  updateToken(token:any) {
    localStorage.setItem(this.tokenKey, token);
  }

  fetchToken(code:any, state:any): Observable<any> {
    return this.http.get(this.baseUrl + this.tokenEndpoint + '?code=' + code + '&state=' + state);
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    return token != null;
  }

  removeToken() {
    localStorage.removeItem(this.tokenKey);
  }

  logout(): Observable<any> {
    return this.http.post(this.baseUrl + '/logout', this.getToken());
  }
}
