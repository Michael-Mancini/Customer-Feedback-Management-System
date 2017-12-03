import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;

  constructor(
    private fms:FlashMessagesService,
    private router:Router,
    private auth:AuthService
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.auth.login(this.email, this.password).then((res) => {
      this.fms.show('You are logged in', {
        cssClass:'alerty green lighten-4', timeout: 5000
      });
      this.router.navigate(['/']);
    }).catch((err) => {
      this.fms.show(err.message, {
        cssClass:'alerty red lighten-3', timeout: 5000
      });
      this.router.navigate(['login']);
    });
  }

}
