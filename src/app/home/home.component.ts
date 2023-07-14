import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SecurityService} from "../security.service";
import {Router} from "@angular/router";
import { environment } from '../environments/environment';

@Component({
  selector: 'fs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: any;
  test!: Object;

  constructor(private http: HttpClient, private securityService: SecurityService,
              private router: Router) {
  }

  ngOnInit(): void {

    this.getUserInfo().subscribe(data => this.name = data.name);
    this.http.get(environment.baseUrl + '/v1/home/hello').subscribe();
    this.http.get(environment.baseUrl + '/v1/home/infos').subscribe(data => this.test = data);
  }

  getUserInfo(): Observable<any> {
    return this.http.get(environment.baseUrl + '/v1/home');
  }

  infos(){

    this.http.get(environment.baseUrl,  {responseType: 'text'}).subscribe(data=> console.log(data));
  }

  logout()
  {
    this.securityService.logout() .subscribe(() => {
      this.securityService.removeToken();
      this.router.navigate(['/login']);
    });
  }
}
