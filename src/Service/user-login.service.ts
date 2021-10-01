import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/Model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

   _url ="https://localhost:44342/api/User/token";
   _url1 ="https://localhost:44342/api/Secured/getAuth";
  constructor(private _http : HttpClient) { }
  
  login(user :User){

   return  this._http.post<any>(this._url,user)

  }
  getSecure():Observable<User>{

   return this._http.get<User>(this._url1);
  }
}
