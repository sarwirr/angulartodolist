import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { JwtHelperService } from '@auth0/angular-jwt';
import { Todo } from './todo/todo.component';


@Injectable({
  providedIn: 'root',
})
export class UsersService {
  user:any;
  todos: any;
  constructor(private http: HttpClient,
    private jwtHelper : JwtHelperService
    ) {}


 login(data: any): Observable<any>{
    return this.http.post<any>('http://localhost:3000/auth/login', data )
    .pipe(tap(res => {
      const token = res.user;
      localStorage.setItem('token', token);
    }));
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

    findalltodos(){
      return this.http.get<Todo[]>('http://localhost:3000/user/findalltodos');
    }

  register( data:any){
    return this.http.post('http://localhost:3000/user/register', data );
 
  }

  showmeroles(){
    return this.http.get('http://localhost:3000/user/showmeroles');
  }

  getprofile(data : any) {
    return this.http.get('http://localhost:3000/profile', data );
  }
 
  finduserbyid(id: any) {
    return this.http.get(`http://localhost:3000/user/finduserbyid/${id}`);
  }

}
