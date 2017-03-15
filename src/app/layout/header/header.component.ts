// angular
import { Component, OnInit }                    from '@angular/core';
import { Input, Output }                        from '@angular/core';
import { ChangeDetectionStrategy }              from '@angular/core';
import { Router }                               from '@angular/router';

// libraries
import { Observable }                           from 'rxjs/Observable';
//import { Subscription }                         from 'rxjs/Subscription';

// app
import { FirstnamePipe }                        from '../../pipes/firstname.pipe';

// services
import { AuthService }                          from '../../services/auth.service';
import { LOG }                                  from '../../../system/console.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
  
})
export class HeaderComponent implements OnInit {

    auth$: Observable<boolean>;
    name$: Observable<string>;

    constructor(private authService: AuthService, private router: Router) {
        this.auth$ = this.authService.auth;
        this.name$ = this.authService.name;
    }
        
    ngOnInit() {
    }
    
    logout() {
        this.authService.logout();
    }
    
}
