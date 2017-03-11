// angular
import { Component, OnInit }            from '@angular/core';
import { Router }                       from '@angular/router';

// app
import { FirstnamePipe }                from '../../pipes/firstname.pipe';

// services
import { AuthService }                  from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(public authService: AuthService, private _router: Router) {
    
        if(this.authService.authenticated) {
            console.log("Successfully logged in.");
        }
        else {
            console.log("Not yet logged in.");
            //this._router.navigate(['/login']);
        }
    }

    ngOnInit() {

    }

    logout() {
        this.authService.logout();
    }

}
