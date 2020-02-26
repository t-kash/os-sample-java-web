import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { HelloComponent } from './hello/hello.component';
import { CounterComponent } from './counter/counter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { DashboardTodoDetailComponent } from './dashboard-todo-detail/dashboard-todo-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'todo', component: TodoComponent },
  { path: 'hello', component: HelloComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:index', component: DashboardTodoDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
