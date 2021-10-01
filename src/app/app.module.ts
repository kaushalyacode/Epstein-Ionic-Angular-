import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationTeacherComponent } from './navigation-teacher/navigation-teacher.component';
import { NavigationParentComponent } from './navigation-parent/navigation-parent.component';
import { MenuTeacherComponent } from './menu-teacher/menu-teacher.component';
import { MenuParentComponent } from './menu-parent/menu-parent.component';

export function tokenGetter()
{

  return localStorage.getItem("jwt");

}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    NavigationTeacherComponent,
    NavigationParentComponent,
    MenuParentComponent,
    MenuTeacherComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config:{
        tokenGetter :tokenGetter,
        whitelistedDomains:["localhost:44342"],
        blacklistedRoutes:[]
      }
   })
    
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
