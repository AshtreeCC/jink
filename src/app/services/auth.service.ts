// angular
import { Injectable }                             from '@angular/core';

// library
import {AngularFire, AuthProviders, AuthMethods}  from 'angularfire2';

@Injectable()
export class AuthService {

  constructor(public af:AngularFire) {
    this.af.auth.subscribe(auth => console.log(auth));
  }

  /**
   * Logs in the user
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
  loginWithGoogle() {
    return this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    });
  }

  /**
   * Logs out the current user
   */
  logout() {
    return this.af.auth.logout();
  }

}
