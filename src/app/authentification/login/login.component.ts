
import { Component, OnInit } from '@angular/core';
import { OauthService } from 'src/app/authentification/shared/services/oauth.service';

@Component({
  selector: 'fs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private securityService: OauthService) { }

  ngOnInit(): void {
  }

  login() {
    this.securityService.login();
  }
}
