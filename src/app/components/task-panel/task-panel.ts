import { Component, inject } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-panel',
  standalone: false,
  templateUrl: './task-panel.html',
  styleUrl: './task-panel.scss',
})
export class TaskPanel {
  private taskService = inject(TaskService);
  private fb = inject(FormBuilder);

  taskTitle = '';

  tasks: Task[] = this.taskService.getTasks();
  filter: 'all' | 'pending' | 'completed' = 'all';

  taskForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
    description: ['', [Validators.maxLength(250)]],
    priority: ['Medium' as 'Low' | 'Medium' | 'High', [
      Validators.required
    ]],
    dueDate: ['', [
      Validators.required
    ]]
  });
  

  addTask(): void {
    const title = this.taskTitle.trim();

    this.taskService.addTask(title);

    this.taskTitle = '';
  }

  toggleTask(task: Task): void {
    this.taskService.toggleTask(task.id);
  }

  get completedCount(): number {
    return this.tasks.filter(task => task.completed).length;
  }


  readonly today = new Date();

  readonly projectBudget = 1250.5;

  get pendingCount(): number {
    return this.tasks.filter(task => !task.completed).length;
  }

  get filteredTasks(): Task[] {
    if (this.filter === 'pending') {
      return this.tasks.filter(task => !task.completed);
    }

    if (this.filter === 'completed') {
      return this.tasks.filter(task => task.completed);
    }

    return this.tasks;
  }
}
