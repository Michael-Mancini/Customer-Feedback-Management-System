import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { SettingsService } from '../services/settings.service';

@Injectable()
export class RegisterGuard implements CanActivate{

    constructor(
        private router:Router,
        private settings:SettingsService
    ){}

    canActivate():boolean{
        if(this.settings.getSettings()){
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }
}