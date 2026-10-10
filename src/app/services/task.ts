import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
    {
      id: 1,
      title: 'Learn Angular components',
      completed: true
    },
    {
      id: 2,
      title: 'Understand data binding',
      completed: false
    },
    {
      id: 3,
      title: 'Build TaskFlow dashboard',
      completed: false
    }
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(
    title: string,
    description = '',
    priority: 'Low' | 'Medium' | 'High' = 'Medium',
    dueDate = ''
  ): void {
    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      return;
    }

    this.tasks.push({
      id: Date.now(),
      title: trimmedTitle,
      completed: false,
      description: description.trim(),
      priority,
      dueDate
    });
  }

  toggleTask(taskId: number): void {
    const task = this.tasks.find(t => t.id === taskId);

    if (task) {
      task.completed = !task.completed;
    }
  }
}