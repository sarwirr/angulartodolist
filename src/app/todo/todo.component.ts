import { Component, Input } from '@angular/core';
import { TodosService } from '../todos.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  count = 0;
  constructor(private ts: TodosService) {}

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
        // alert('success');
        this.ngOnInit();
      },
      (err) => console.log(err)
    );
  }

  removeTodo(id: string) {
    this.ts.removeTodo(id).subscribe((data) => {
      this.ngOnInit();
    });
  }
}
