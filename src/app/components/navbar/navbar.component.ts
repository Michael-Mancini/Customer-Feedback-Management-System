import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn:boolean;
  loggedInUserEmail:string;
  showRegister:boolean;

  constructor(
    private fms:FlashMessagesService,
    private router:Router,
    private auth:AuthService,
    private settings:SettingsService
  ) { }

  ngOnInit() {
    this.auth.getAuth().subscribe(auth => {
      if(auth){
        this.isLoggedIn = true;
        this.loggedInUserEmail = auth.email;
      } else {
        this.isLoggedIn = false;
      }
    });

    this.showRegister = this.settings.getSettings();
  }

  onLogoutClick(){
    this.auth.logout();
    this.fms.show('You are logged out', {
      cssClass:'alerty green lighten-4', timeout: 5000
    });
    this.router.navigate(['login']);
  }

}
