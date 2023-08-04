import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { OauthService } from 'src/app/authentification/shared/services/oauth.service';
import { TokenStorageService } from 'src/app/shared/services/tokenStorage.service';

@Component({
  selector: 'fs-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private oauthService: OauthService,
              private tokenStorageService:TokenStorageService) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(p => {
      this.oauthService.fetchToken(p['code'], p['state']).subscribe(data => {
        console.log(data)
        this.tokenStorageService.updateAccessToken(data.accessToken);
        this.tokenStorageService.updateRefreshToken(data.refreshToken);
        this.router.navigate(['/home']);
      })
    })
  }

}
