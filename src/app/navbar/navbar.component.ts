import { Component, OnInit } from '@angular/core';
import { Headers } from './headers';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  headers = Headers;
  constructor() {}

  ngOnInit(): void {
    console.log(this.headers);
  }
}
