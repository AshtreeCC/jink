// angular
import { Injectable }                                   from '@angular/core';

// library
import { AngularFire, FirebaseAuthState }               from 'angularfire2';
import { AuthProviders, AuthMethods }                   from 'angularfire2';

@Injectable()
export class AuthService {

    private authState: FirebaseAuthState = null;

    constructor(public af: AngularFire) {
        af.auth.subscribe((state: FirebaseAuthState) => {
            this.authState = state;
        });
    }

    get authenticated(): boolean {
        return this.authState !== null;
    }

    get id(): string {
        return this.authenticated ? this.authState.uid : '';
    }

    /**
     * Logs in the user
     */
    login(provider: number, method: number = AuthMethods.Popup): firebase.Promise<FirebaseAuthState> {
        return this.af.auth.login({provider, method})
            .catch(error => console.log('ERROR @ AuthService#login() :', error));
    }

    loginWithGoogle(): firebase.Promise<FirebaseAuthState> {
        return this.login(AuthProviders.Google);
    }

    /**
     * Logs out the current user
     */
    logout() {
        return this.af.auth.logout();
    }

}
