import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-profile',
  templateUrl: './dashboard-profile.component.html',
  styleUrls: ['./dashboard-profile.component.sass']
})
export class DashboardProfileComponent implements OnInit {
  holamundo = {
    hola: 'hola',
    mundo: 'mundo',
  }
  constructor() { }

  ngOnInit(): void {
  }

}
