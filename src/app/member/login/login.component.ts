import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private member: MemberService,
    private auth: AuthService,
    private router: Router
  ) {}

  email = '';
  password = '';

  ngOnInit() {
    scroll(0, 0);
  }
  login(form, f1, f2) {
    // this.auth.checkLogin('123@gmail.com', '123');
    if (f1.errors.required !== null) {
      alert('請輸入信箱');
    } else if (f2.errors.required !== null) {
      alert('請輸入密碼');
    }
  }
}
