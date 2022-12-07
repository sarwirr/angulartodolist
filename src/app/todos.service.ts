import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: any;
  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get<any[]>('http://localhost:3636/todo');
  }

  addTodo(data: any) {
    return this.http.post('http://localhost:3636/todo/create', data);
  }

  removeTodo(id: string) {
    return this.http.delete(`http://localhost:3636/todo/${id}`);
  }
}
