// angular
import { Injectable, OnDestroy }        from '@angular/core';
import { Router, CanActivate }          from '@angular/router';
import { ActivatedRouteSnapshot }       from '@angular/router';
import { RouterStateSnapshot }          from '@angular/router';
import { MdSnackBar }                   from '@angular/material';

// libraries
import { AngularFire }                  from 'angularfire2';
import { AuthProviders, AuthMethods }   from 'angularfire2';
import { Observable }                   from 'rxjs/Observable';
import { Subscription }                 from 'rxjs/Subscription';

// app
import { OfflineComponent }             from '../layout/offline/offline.component';

@Injectable()
export class AuthService {

    private _user: any;
    private _online: Subscription;

    constructor(public snackBar: MdSnackBar, public af: AngularFire) {

       this.initOfflineSnackBarMessage();

    }

    set user(user: any) {
        this._user = user;
    }

    get name(): string {
        return (this.authenticated) ? this._user.auth.displayName : "Stranger";
    }

    get id(): string {
        return (this.authenticated) ? this._user.auth.uid : null; 
    }

    get authenticated(): boolean {
        console.log(this._user);
        return (this._user);
    }

    get token(): string {
        return (this.authenticated) ? this._user.auth.getToken() : null;
    }

    initOfflineSnackBarMessage(){

        let online$: Observable<boolean>;
        let snackBarRef: any;
        
        // Monitor when online
        online$ = Observable.merge(
            Observable.of(navigator.onLine),
            Observable.fromEvent(window, 'online').map(() => true),
            Observable.fromEvent(window, 'offline').map(() => false)
        );
       
        // Display message when offline
        this._online = online$.subscribe((online) => {
            if (snackBarRef && online) { 
                snackBarRef.dismiss();
            } else if (!online) {
                snackBarRef = this.snackBar.openFromComponent(OfflineComponent);
            }
        });
    }

    loginWithFacebook(): firebase.Promise<any> {
        return this.af.auth.login({
            provider: AuthProviders.Facebook,
            method: AuthMethods.Popup
        }).catch((error) => {
            console.log('ERROR @ AuthService#loginFacebook()', error)
        });

    }
    
    loginWithGoogle(): firebase.Promise<any> {
        return this.af.auth.login({
            provider: AuthProviders.Google,
            method: AuthMethods.Popup
        }).catch((error) => {
            console.log('ERROR @ AuthService#loginGoogle()', error)
        });
    }

    logout(): firebase.Promise<any> {
        return this.af.auth.logout();
    }

    // Unsubscribe from Observables
    // May not be necessary for global
    ngOnDestroy() {
        this._online.unsubscribe();
    }

}

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private _router: Router, private _af: AngularFire, private _authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this._af.auth.map((user) => {
            if (user) {
                this._authService.user = user;
                return true;
            } else {
                this._router.navigate(['/login']);
                return false; 
            }
        }).first();
    } 
}

