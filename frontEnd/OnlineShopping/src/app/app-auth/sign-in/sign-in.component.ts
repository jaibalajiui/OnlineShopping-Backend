import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  hide = true;

  constructor(private router: Router) {
    console.log('sign-in');
  }

  ngOnInit(): void {
  }

  signUp() {
    this.router.navigate(['/sign-up']);
  }

  login() {
    this.router.navigate(['']);
  }
}
