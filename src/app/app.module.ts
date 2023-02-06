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
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { JwtModule } from '@auth0/angular-jwt';
import { AdminComponent } from './admin/admin.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatGridListModule} from '@angular/material/grid-list';
export function tokenGetter() {
  return localStorage.getItem("token");
}


@NgModule({
  declarations: [AppComponent, TodoComponent, HomeComponent , LoginComponent, RegistrationComponent, AdminComponent],
  imports: [FormsModule,ReactiveFormsModule,MatGridListModule,MatProgressBarModule,MatCardModule,MatInputModule,MatSelectModule,MatIconModule, BrowserModule, AppRoutingModule, MatSlideToggleModule,MatAutocompleteModule, MatButtonModule,HttpClientModule, MatToolbarModule,BrowserAnimationsModule,MatSnackBarModule,
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
