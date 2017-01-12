//angular
import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { MaterialModule } from '@angular/material';

//libraries
import { AuthService }    from './services/auth.service';

//app
import { AppComponent }   from './app.component';
import { HeaderComponent } from './layout/header/header.component';

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
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [
    AuthService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
