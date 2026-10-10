import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { TaskPanel } from './components/task-panel/task-panel';
import { TaskDetailsComponent } from './pages/task-details/task-details';
import { Login } from './pages/login/login';
import { AuthGuard } from './guards/auth-guard';



const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'tasks', component: TaskPanel, canActivate: [AuthGuard] },
  { path: 'tasks/:id', component: TaskDetailsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: Login },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }