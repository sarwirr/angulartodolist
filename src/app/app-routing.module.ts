import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { IsSignedInGuard } from './is-signed-in-guard';
import { StaySignedInGuard } from './stay-signed-in.guard';
import { AdminGuardGuard } from './admin-guard.guard';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent , canActivate : [StaySignedInGuard]},
  {path: 'todo',
  component: TodoComponent,
  canActivate: [IsSignedInGuard ]
  },
  { path: 'login', component: LoginComponent,  canActivate : [StaySignedInGuard]},
  { path: 'registration', component: RegistrationComponent , canActivate : [StaySignedInGuard]},
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuardGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [IsSignedInGuard]
})
export class AppRoutingModule {}
