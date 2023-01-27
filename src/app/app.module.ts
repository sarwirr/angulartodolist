import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Todo1Interceptor } from './todo1.interceptor';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { AdminComponent } from './admin/admin.component';
export function tokenGetter() {
  return localStorage.getItem("token");
}


@NgModule({
  declarations: [AppComponent, TodoComponent, HomeComponent , LoginComponent, RegistrationComponent, AdminComponent],
  imports: [FormsModule,ReactiveFormsModule, BrowserModule, AppRoutingModule, MatSlideToggleModule, HttpClientModule, BrowserAnimationsModule,
    JwtModule.forRoot({
    config: {
      tokenGetter: tokenGetter,
    },
  }), 
  
],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: Todo1Interceptor, 
      multi: true, 
    }, 
    { provide: 'JWT_TOKEN', useValue: 'token' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
