import { useAnimation } from '@angular/animations';
import { Component, Inject, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { TodosService } from '../todos.service';
import { UsersService } from '../user.service';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminComponent {

  selectedUser: any;
  user_id: any;
 

  constructor(
    private us: UsersService,
    private router: Router,
    private ts: TodosService,
    private _snackBar: MatSnackBar,
    @Inject('JWT_TOKEN') private token: string
  ) {}

  users : any[] | undefined; 
  todosList: any[] | undefined;
  @Input() title = '';
  @Input() items: any[] = [];

  count = 0;

  name = '';

  ngOnInit(): void {
    this.ts.getTodos().subscribe((todosList : Array<any>) => {
    
      this.todosList = [...todosList];
      console.log(this.todosList);
      this.count = this.todosList.length;
    });

    this.us.findallusers().subscribe((users: Array<any>) => {
      this.users = [...users]
     console.log(users);}   

      )
      ;
  }

  addTodo() {
    if (!this.name) {
      console.log('name is required');
      return;
    }
    
    console.log(this.selectedUser);
    if (!this.selectedUser) {
      console.log('user is required');
      return;
    }

    this.ts.addtodoforuser({ name: this.name },  this.selectedUser )
      .subscribe(
        (data) => {
          this.ngOnInit();
          this._snackBar.open("todo added", 'close', { duration: 2000});

        },
        (err) => {
        console.log(err);
        }
      );
  }

  removeTodo(id: string) {
    this.ts.removeTodo(id).subscribe((data) => {
      this.ngOnInit();
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

 
}
export interface Todo {
  user: any;
  owner: any;
  _id: string;
  name: string;
}
