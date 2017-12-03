import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private afauth:AngularFireAuth) { }

  login(email, password:string){
    return new Promise((resolve, reject) => {
      this.afauth.auth.signInWithEmailAndPassword(email, password).then(userData => resolve(userData), err => reject(err));
    });
  }

  register(email:string, password:string){
    return new Promise((resolve, reject) => {
      this.afauth.auth.createUserWithEmailAndPassword(email, password).then(userData => resolve(userData), err => reject(err));
    });
  }

  getAuth(){
    return this.afauth.authState.map(auth => auth);
  }

  logout(){
    this.afauth.auth.signOut();
  }

}
