import { Component, Input } from '@angular/core';
import { TodosService } from '../todos.service';
import { UsersService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  count = 0;


  constructor(private ts: TodosService, 
    private us : UsersService,
    private router: Router) {}

  todosList: any[] = [];
  @Input() title = '';
  @Input() items: any[] = [];

  name: string = '';

  ngOnInit(): void {


    this.ts.getTodos().subscribe((data) => {
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
