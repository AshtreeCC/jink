//angular
import { Component }    from '@angular/core';
import { Router }       from '@angular/router';

//services
//import { AuthService }  from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


    constructor(){  }
/*
    constructor(private authService: AuthService, private router: Router) {
    
        if(auth.authenticated) {
            console.log("Successfully Logged in.");
        }
        else {
            console.log("Not Logged in.");
            this.router.navigate(['login']);
        }
    }

    // logout() {
    //     this.authService.logout();
    // }

*/
}
