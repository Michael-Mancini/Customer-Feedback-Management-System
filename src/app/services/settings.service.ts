import { Injectable } from '@angular/core';


@Injectable()
export class SettingsService {
  allowRegistration:boolean = true;

  constructor() {
    if(localStorage.getItem('settings') != null){
      this.allowRegistration = JSON.parse(localStorage.getItem('settings'));
    }
  }

  getSettings(){
    return this.allowRegistration;
  }

  changeSettings(settings:boolean){
    localStorage.setItem('settings', JSON.stringify(settings));
    // this is not necessary -> this.allowRegistration = settings;
  }

}
