//angular
import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { FormsModule }            from '@angular/forms';
import { HttpModule }             from '@angular/http';
import { MaterialModule }         from '@angular/material';
import { RouterModule }           from '@angular/router';

//libraries
import { AngularFireModule }      from 'angularfire2';
import { FlexLayoutModule }       from '@angular/flex-layout';

//services
import { AuthService }            from './services/auth.service';

//app
import { AppComponent }           from './app.component';
import { APP_LAYOUT_COMPONENTS }  from './layout/index';
import { APP_PAGE_COMPONENTS }    from './pages/index';

//misc
import { APP_ROUTES }             from './app.routes';

export const firebaseConfig = {
  apiKey: "AIzaSyAeP2LufplZQu8plXZkV0C2FvHLI7d88lQ",
  authDomain: "jink-66278.firebaseapp.com",
  databaseURL: "https://jink-66278.firebaseio.com",
  storageBucket: "jink-66278.appspot.com",
  messagingSenderId: "430419991991"
}

@NgModule({
  declarations: [
    AppComponent,
    APP_LAYOUT_COMPONENTS,
    APP_PAGE_COMPONENTS
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES),
    AngularFireModule.initializeApp(firebaseConfig),
    FlexLayoutModule.forRoot()
  ],
  providers: [
    AuthService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
