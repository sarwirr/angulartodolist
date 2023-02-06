import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: any;
  constructor(private http: HttpClient) {}


  getTodos() 
  {
    return this.http.get<any[]>('http://localhost:3000/todo1'  );
  }

  addTodo(data: any) {
    return this.http.post('http://localhost:3000/todo1', data );
  }

  addtodoforuser(data:any, id:any ) 
  {
    return this.http.post(`http://localhost:3000/todo1/createforuser/${id}`, data);
  }

  removeTodo(id: string) {
    return this.http.delete(`http://localhost:3000/todo1/${id}`);
  }
}
