import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styles: [
  ]
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

    // localStorage.removeItem('email');
    // localStorage.removeItem('user');
    // localStorage.removeItem('name');
    // localStorage.removeItem('session');

    // console.log('logout');
    // this.router.navigate(['/login']);


  }

}