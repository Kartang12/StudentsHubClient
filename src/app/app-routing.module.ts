import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { TaskComponent } from './student/task/task.component';
import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from './_Guards/admin.guard';
import { RegisterComponent } from './admin/register/register.component';
import { TeatcherComponent } from './teatcher/teatcher.component';
import { TeatcherGuard } from './_Guards/teatcher.guard';
import { TeatcherTaskComponent } from './teatcher/teatcher-task/teatcher-task.component';
import { MarksComponent } from './student/marks/marks.component';
import { UsersComponent } from './admin/users/users.component';
import { FormsComponent } from './admin/forms/forms.component';
import { SubjectsComponent } from './admin/subjects/subjects.component';

const studentRoutes: Routes = [
  // { path: '/changeMe', component: RegisterComponent  },
  { path: 'task/:id', component: TaskComponent},
  { path: 'marks', component: MarksComponent}
];

const adminRoutes: Routes = [
  { path: 'forms', component: FormsComponent  },
  { path: 'subjects/:id', component: SubjectsComponent  },
  { path: 'users', component: UsersComponent},
  { path: 'create', component: RegisterComponent }
];

const teatcherRoutes: Routes = [
  { path: 'task/:id', component: TeatcherTaskComponent }
];

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'teatcher', component: TeatcherComponent, canActivate: [TeatcherGuard] },
  { path: 'teatcher', component: TeatcherComponent, children: teatcherRoutes },
  { path: 'student', component: StudentComponent },
  { path: 'student', component: StudentComponent, children: studentRoutes },
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
  { path: 'admin', component: AdminComponent, children: adminRoutes }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
