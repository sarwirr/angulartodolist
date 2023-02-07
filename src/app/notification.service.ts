import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';



@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient,
    private jwtHelper : JwtHelperService) { 
    }


    getallnotifications(){
      return this.http.get<any[]>('http://localhost:3000/notification');
    }

    getnotifications(){
      return this.http.get<any[]>('http://localhost:3000/notification/user');
    }

    deletenotification(id : any){
      return this.http.delete(`http://localhost:3000/notification/${id}`);
    }
}
