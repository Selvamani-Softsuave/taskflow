import { Component } from '@angular/core';

@Component({
  selector: 'app-task-header',
  standalone: false,
  templateUrl: './task-header.html',
  styleUrl: './task-header.scss',
})
export class TaskHeader {
  title = 'TaskWorkflow';
  subtitle = 'Manage your task efficiently';
}
