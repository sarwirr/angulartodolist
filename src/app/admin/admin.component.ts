import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TodosService } from '../todos.service';
import { UsersService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
 
  constructor(
   private us : UsersService,
    private router : Router,
   private ts: TodosService,
    
  ){}
  todosList: Todo[] = [];
   count= 0;

   
  ngOnInit(): void { 
    this.ts.getTodos().subscribe((data: Todo[]) => {
      console.log(data);
      this.todosList = [...data];
      this.count = this.todosList.length;
    });
  }




}
export interface Todo {
  _id: string;
  name: string;
  
}
