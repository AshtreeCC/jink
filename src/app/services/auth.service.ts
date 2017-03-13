// angular
import { Injectable, OnDestroy }                from '@angular/core';
import { Router, CanActivate }                  from '@angular/router';
import { ActivatedRouteSnapshot }               from '@angular/router';
import { RouterStateSnapshot }                  from '@angular/router';
import { MdSnackBar }                           from '@angular/material';

// libraries
import { AngularFire, FirebaseAuthState }       from 'angularfire2';
import { AuthProviders, AuthMethods }           from 'angularfire2';
import { Observable }                           from 'rxjs/Observable';
import { Subscription }                         from 'rxjs/Subscription';
import { Subject, BehaviorSubject }             from 'rxjs';

// app
import { OfflineComponent }                     from '../layout/offline/offline.component';

// services
import { LOG }                                  from "../../system/console.service";

@Injectable()
export class AuthService implements OnDestroy {

    private _user: any;
    private _nameS: Subscription;
    private _onlineS: Subscription;

    private _name: Subject<string> = new BehaviorSubject<string>("Stranger");

    constructor(private snackBar: MdSnackBar, private af: AngularFire, private router: Router) {

        //this.initAuthenticationObservable();
        this.initDisplayNameObservable();
        this.initOfflineSnackBarMessage();

    }

    set user(user: any) {
        this._user = user;
    }

    get name(): Observable<string> {
        return this._name.asObservable();
    }

    get id(): string {
        //return (this.authenticated) ? this._user.auth.uid : null; 
        return this._user.auth.uid;
    }

    get token(): string {
        return this._user.auth.getToken();
    }

    get auth(): Observable<any> {
        return this.af.auth;
    }

    initDisplayNameObservable() {
        this._nameS = this.af.auth.subscribe((user) => {
            if (user) {
                this._name.next(user.auth.displayName);
            }
        });
    }

    initOfflineSnackBarMessage() {

        let online$: Observable<boolean>;
        let snackBarRef: any;
        
        // Monitor when online
        online$ = Observable.merge(
            Observable.of(navigator.onLine),
            Observable.fromEvent(window, 'online').map(() => true),
            Observable.fromEvent(window, 'offline').map(() => false)
        );
       
        // Display message when offline
        this._onlineS = online$.subscribe((online) => {
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
            LOG.ERROR("Facebook", error);
        });

    }
    
    loginWithGoogle(): firebase.Promise<any> {
        return this.af.auth.login({
            provider: AuthProviders.Google,
            method: AuthMethods.Popup
        }).catch((error) => {
            LOG.ERROR("Google", error);
        });
    }

    logout(): firebase.Promise<any> {
        this._name.next("Stranger");
        this.router.navigate(['/login']);

        return this.af.auth.logout();
    }

    // Unsubscribe from Observables
    // May not be necessary for global
    ngOnDestroy() {
        this._onlineS.unsubscribe();
        this._nameS.unsubscribe();
    }

}

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private af: AngularFire, private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.af.auth.map((user) => {
            if (user) {
                this.authService.user = user;
                return true;
            } else {
                this.router.navigate(['/login']);
                return false; 
            }
        }).first();
    } 
}
