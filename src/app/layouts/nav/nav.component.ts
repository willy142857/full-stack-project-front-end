import { Component, OnInit } from '@angular/core';
import { CartsService } from 'src/app/cart/carts.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  searchCatUrl = 'projects/search/categories';
  constructor(
    private authService: AuthService,
    private cartsservice: CartsService,
    ) { }
  pathUrl;
  routeUrl;
  current = {
    'current-page-item': false,
  };
  get projectlist() {
    this.cartsservice.initialFollowingProject();
    this.cartsservice.totalCharge();
    return this.cartsservice.followingProjectlist;
  }
  get totalmoney() {
    return this.cartsservice.totalmoney;
  }
  get count() {
    return this.projectlist.length;
  }

  ngOnInit() {
    scroll(0, 0);
  }

  get isLogin() {
    return this.authService.isLogin();
  }

  checkLogin() {
    if (this.authService.isLogin()) {
      this.cartsservice.getUserAllInfo();
    }
  }
}
