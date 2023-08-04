import { TokenStorageService } from './../../../shared/services/tokenStorage.service';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OauthService {
  tokenRefreshKey='refreshToken';

  private authorizeEndpoint = '/oauth2/authorization/yahoo'
  private tokenEndpoint = '/login/oauth2/code/yahoo';
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private tokenStorageService:TokenStorageService) {
  }

  login() {
    window.open(this.baseUrl + this.authorizeEndpoint, '_self');
  }

  refreshAccessToken(){
    this.http.post(environment.baseUrl+'/token/refresh', this.tokenStorageService.getRefreshToken(), {responseType: 'text'}).subscribe(data=>{
      console.log(data)
      this.tokenStorageService.updateAccessToken(data)
    });
  }

  fetchToken(code:any, state:any): Observable<any> {
    return this.http.get(this.baseUrl + this.tokenEndpoint + '?code=' + code + '&state=' + state);
  }


  isLoggedIn(): boolean {
    const token = this.tokenStorageService.getAccessToken();
    return token != null;
  }


  logout(): Observable<any> {
    return this.http.post(this.baseUrl + '/logout', this.tokenStorageService.getAccessToken());
  }
}
