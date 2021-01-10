import { Component, OnInit } from '@angular/core';
import { ModelTasksService } from '../model-tasks.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.less']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private modelTasksService: ModelTasksService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.modelTasksService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }
}
