import { TokenStorageService } from './../shared/services/tokenStorage.service';
import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import { OauthService } from 'src/app/authentification/shared/services/oauth.service';

@Component({
  selector: 'fs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: any;
  test!: Object;

  constructor(private http: HttpClient, private securityService: OauthService,private tokenStorageService:TokenStorageService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  infos(){
    this.securityService.refreshAccessToken()
  }

  logout()
  {
    this.securityService.logout() .subscribe(() => {
      this.tokenStorageService.removeAccessToken();
      this.router.navigate(['/auth']);
    });
  }
}
