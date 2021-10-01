import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserLoginService } from 'src/Service/user-login.service';
import { User } from '../../Model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService :UserLoginService) { }

  user = new User('','');
 
  @Output() public childEventParent = new EventEmitter();
  @Output() public childEventTeacher = new EventEmitter();
  @Output() public childEvent = new EventEmitter();



  ngOnInit(): void {
  }

  onSubmit(){

    console.log(this.user);
    this.loginService.login(this.user)
        .subscribe(

           data => {
             console.log("success",data);
             localStorage.setItem("jwt",data.token)
             console.log("role is",data.roles[0]);
   
             if(data.roles[0]=="Parent")
             {

              this.childEventParent.emit(true);

             }else if(data.roles[0]=="Teacher")
            {
              this.childEventTeacher.emit(true);
        
            }
            },
           error=> console.log("error",error)

        )


  }
  fetch(){

    console.log(this.user);
    this.loginService.getSecure()
        .subscribe(

           data => {
             console.log("success auth",data);
            
            
            },
           error=> console.log("error",error)

        )


  }

}
