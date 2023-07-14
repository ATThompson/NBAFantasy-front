import { Component, OnInit } from '@angular/core';
import {SecurityService} from "../security.service";

@Component({
  selector: 'fs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  redirectUrl!: string;

  constructor(private securityService: SecurityService) { }

  ngOnInit(): void {
  }

  login() {
    this.securityService.login();
  }

  loginState() {

    //window.open(uri);
  }
}
