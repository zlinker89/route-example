import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  // teamos = ['Te amo'];
  constructor(
    private Data: DataService,
    private RouterServie: Router
  ) { }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.teamos.push('Te amo');
    // }, 2000);
  }

  IniciarSesion(): void{
    this.Data.isLogged = true;
    this.RouterServie.navigate(['/dashboard/home']);
  }
}
