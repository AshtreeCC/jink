//angular
import { Component, OnInit, ViewEncapsulation }   from '@angular/core';
import { Router }                                 from '@angular/router';
import { DomSanitizer }                           from '@angular/platform-browser';
import { MdIconRegistry }                         from '@angular/material';

//services
import { AuthService }                            from '../../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

    error: any;

    constructor(
    private authService: AuthService, 
    private router: Router,
    private mdIconRegistry: MdIconRegistry,
    private sanitizer: DomSanitizer
    ) {
        
      // SVG Icons
        mdIconRegistry.addSvgIcon('login-page-lock', 
            sanitizer.bypassSecurityTrustResourceUrl('/assets/images/lock.svg')
        );

        mdIconRegistry.addSvgIcon('sign-in-with-google', 
            sanitizer.bypassSecurityTrustResourceUrl('/assets/images/google.svg')
        );
    }

    ngOnInit() {}

    login() {
        this.authService.loginWithGoogle().then((data) => {
        // Send them to the homepage if they are logged in
        this.router.navigate(['']);
        }).catch((err) => {
            this.error = err;
        });
    }
}
