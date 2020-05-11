import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing.module';
import { HttpClientModule , HttpClient} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, RoutingModule, HttpClientModule],
  declarations: [ AppComponent, HelloComponent, LoginComponent, HomeComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AuthService, HttpClient, HttpClientModule]
})
export class AppModule { }
