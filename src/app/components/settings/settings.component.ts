import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  allowReg:boolean;

  constructor(
    public fms:FlashMessagesService,
    public router:Router,
    public settings:SettingsService
  ) { }

  ngOnInit() {
    this.allowReg = this.settings.getSettings();
  }

  onSubmit(){
    this.settings.changeSettings(this.allowReg);
    this.fms.show('Settings updated', {
      cssClass:'alerty green lighten-4', timeout: 5000
    });
    this.router.navigate(['settings']);
  }

}
