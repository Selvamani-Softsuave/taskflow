import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-details',
  standalone: false,
  templateUrl: './task-details.html',
  styleUrl: './task-details.scss'
})
export class TaskDetailsComponent implements OnInit {
  taskId = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id') ?? '';
  }
}