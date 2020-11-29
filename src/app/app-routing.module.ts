import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { TaskComponent } from './student/task/task.component';
import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from './admin.guard';
import { RegisterComponent } from './admin/register/register.component';

const studentRoutes: Routes = [
  // { path: '/changeMe', component: RegisterComponent  },
  { path: 'subjects', component: LoginComponent },
  { path: 'subjects/task/:id', component: TaskComponent}
];

const adminRoutes: Routes = [
  // { path: '/changeMe', component: RegisterComponent  },
  { path: 'create', component: RegisterComponent },
  { path: 'users', component: TaskComponent}
];

const appRoutes: Routes = [
  // { path: 'registration', component: RegisterComponent  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  //{ path: 'Change', component: ChangeMeComponent },
  { path: 'student', component: StudentComponent },
  { path: 'student', component: StudentComponent, children: studentRoutes },
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
  { path: 'admin', component: AdminComponent, children: adminRoutes },
  // { path: 'Admin', component: AdminComponent, canActivate: [AdminGuard]},
  // { path: 'Admin', component: AdminComponent, children: adminRoutes , canActivate: [AdminGuard]},
];





@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
