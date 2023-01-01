import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'todo',component: TodoComponent,},
    { path: 'login', component: LoginComponent},
    { path: 'registration', component: RegistrationComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
