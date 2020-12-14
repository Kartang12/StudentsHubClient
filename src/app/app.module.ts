import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { TaskComponent } from './student/task/task.component';
import { AdminComponent } from './admin/admin.component';
import { TeatcherComponent } from './teatcher/teatcher.component';
import { TeatcherTaskComponent } from './teatcher/teatcher-task/teatcher-task.component';
import { RegisterComponent } from './admin/register/register.component';
import { MarksComponent } from './student/marks/marks.component';
import { UsersComponent } from './admin/users/users.component';
import { SubjectsComponent } from './admin/subjects/subjects.component';
import { FormsComponent } from './admin/forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent,
    TaskComponent,
    AdminComponent,
    TeatcherComponent,
    TeatcherTaskComponent,
    RegisterComponent,
    MarksComponent,
    UsersComponent,
    SubjectsComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
