import { Component, EventEmitter, input, Input, OnChanges, OnDestroy, OnInit, output, Output, SimpleChanges } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-card',
  standalone: false,
  templateUrl: './task-card.html',
  styleUrl: './task-card.scss',
})

export class TaskCardComponent implements OnInit, OnChanges, OnDestroy {

  @Input({ required: true }) task!: Task;

  @Output() toggle = new EventEmitter<Task>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['task']) {
      console.log('Task input changed:', changes['task'].currentValue);
    }
  }

  ngOnInit(): void {
    console.log('TaskCard initialized:', this.task.title);
  }

  onToggle(): void {
    this.toggle.emit(this.task);
  }

  ngOnDestroy(): void {
    console.log('TaskCard destroyed:', this.task.title);
  }
}
