import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Headers } from './headers';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  headers = Headers;
  name = null;
  constructor() {}

  changeTitle = (val) => {
    console.log(val);
    this.name = val;
  };

  ngOnInit(): void {
    let path = window.location.pathname.split('/')[1];

    for (var i in this.headers) {
      if (this.headers[i]['path'] == path) {
        this.name = this.headers[i]['name'];
        break;
      }
    }
  }
}
