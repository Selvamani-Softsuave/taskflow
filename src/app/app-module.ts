import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { TaskHeader } from './components/task-header/task-header';
import { TaskPanel } from './components/task-panel/task-panel';
import { TaskCardComponent } from './components/task-card/task-card';
import { Dashboard } from './pages/dashboard/dashboard';
import { TaskDetailsComponent } from './pages/task-details/task-details';
import { Login } from './pages/login/login';

@NgModule({
  declarations: [App, TaskHeader, TaskPanel, TaskCardComponent, Dashboard, TaskDetailsComponent, Login],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration(withEventReplay())],
  bootstrap: [App],
})
export class AppModule {}
