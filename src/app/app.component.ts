import { Component } from '@angular/core';
import { UsersService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public us: UsersService){}
  title = 'project';

   isAuth : any;

  ngOnInit() {
    this.isAuth = this.us.isAuthenticated();
  }


}
