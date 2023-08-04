import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import { OauthService } from 'src/app/authentification/shared/services/oauth.service';
import { TokenStorageService } from '../services/tokenStorage.service';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {

  constructor(private tokenStorageService: TokenStorageService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("ON PASSE INTERCEPT")
    const req = request.clone({
       setHeaders: {
         'Content-Type': 'application/json',
         Accept: 'application/json',
         Authorization: 'Bearer ' + this.tokenStorageService.getAccessToken(),
       },
    });
    return next.handle(req);
  }
}
