import { Component, OnInit } from '@angular/core';
import { ModelTasksService } from '../model-tasks.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.less']
})
export class TaskAddComponent implements OnInit {

  constructor(private modelTasksService: ModelTasksService) { }

  ngOnInit(): void {
  }
  
  model = {name:'',state:'To Do'};

  onSubmit() { }

  states = ['To Do', 'In Work', 'Done'];

  newTask() : void{

  }
}
