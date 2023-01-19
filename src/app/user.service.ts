import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  todos: any;
  constructor(private http: HttpClient) {}


 login(data: any) {
    return this.http.post('http://localhost:3000/auth/login', data );
  }

  register( data:any){
    return this.http.post('http://localhost:3000/user/register', data );
 
  }
 

}
