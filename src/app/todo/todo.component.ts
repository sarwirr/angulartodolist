import { Component, Input } from '@angular/core';
import { TodosService } from '../todos.service';
import { UsersService } from '../user.service';

import { Inject } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  count = 0;


  constructor(private ts: TodosService, 
    private us : UsersService,
    
    @Inject('JWT_TOKEN') private token: string) {}

  todosList: Todo[] = [];
  @Input() title = '';
  @Input() items: any[] = [];

  name: string = '';

  ngOnInit(): void {
    this.us.findalltodos().subscribe((data: Todo[]) => {
      console.log(data);
      this.todosList = [...data, ...this.items];
      this.count = this.todosList.length;
    });
  }

  public todo: any;

  addTodo() {
    this.ts.addTodo({ name: this.name }).subscribe(
      (data) => {
        // Simple message with an action.
     
        this.ngOnInit();
      },
      (err) => console.log(err)
    );
    // this._snackBar.open('Todo Added', 'dismiss');
  }

  removeTodo(id: string) {
    this.ts.removeTodo(id).subscribe((data) => {
      this.ngOnInit();
    });
  }


}

 export interface Todo {
  _id: string;
  name: string;
  
}