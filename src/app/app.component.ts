import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  title          = 'epstain-front';
  isAuthenticate = false;
  public isTeacher      = false;
  public isParent       = false;
  public isAdmin        = false;
  public isStudent      = false;

  isParenter(event){
   
    this.isAuthenticate =event;
    this.isParent =true;
  }

  isTeacherer(event){
   
    this.isAuthenticate =event;
    this.isTeacher =true;
  }
}
