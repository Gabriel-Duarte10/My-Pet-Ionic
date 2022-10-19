/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    public afAuth: AngularFireAuth // Inject Firebase auth service
  ) {}
  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider().addScope('https://www.googleapis.com/auth/userinfo.profile'));
  }
  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth
      .signInWithCredential(provider)
      .then((result) => {
        console.log('You have been successfully logged in!');
        console.log(result.user);
        result.user
        .getIdToken()
        .then((idToken) => {
            // ESTE É O TOKEN JWT QUE VAMOS MANDAR PARA API
            console.log("TOKEN JWT: ", idToken);
        }).catch(function(error) {
            console.log(error);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
