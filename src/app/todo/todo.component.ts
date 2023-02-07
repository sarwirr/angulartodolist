import { Component, Input } from '@angular/core';
import { TodosService } from '../todos.service';
import { UsersService } from '../user.service';

import { Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Roles } from 'src/roles.enum';
import { NotificationService } from '../notification.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  count = 0;
  roles :any;
shownotif : boolean = false;
countnotif =0;

  constructor(private ts: TodosService, 
    private us : UsersService,
    private router : Router,
    private ns: NotificationService,
    
    @Inject('JWT_TOKEN') private token: string) {}

  todosList: Todo[] = [];
  @Input() title = '';
  @Input() items: any[] = [];
  notifs : any[] = [];
  name: string = '';

  ngOnInit(): void {
    this.us.findalltodos().subscribe((data: Todo[]) => {
      this.todosList = [...data, ...this.items];
      this.count = this.todosList.length;
    });

    
    this.ns.getnotifications().subscribe((notifs : Array<any>) => {
      this.notifs = [...notifs];
      this.countnotif = this.notifs.length;
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

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  nagivatetoadmin(){ 
    this.router.navigate(['admin']);
  }



showadminbutton(){    
 const role = this.us.showmeroles();
   
      if(role == Roles.ADMIN)
      {
        return true;
      }
      else
     return false;
    }

  

    deletenotif(id: any){
      this.ns.deletenotification(id).subscribe((data) => {
        this.ngOnInit();
      });
    }


}




 export interface Todo {
  _id: string;
  name: string;
  
}