import { Injectable } from '@angular/core';
import { Task } from './task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelTasksService {
  private tasks: Task[];

  constructor() { 
    this.tasks = [];
    this.createTask('Dr Nice','In Work');
    this.createTask('Narco','In Work');
    this.createTask('Bombasto','In Work');
    this.createTask('Celeritas','In Work');
    this.createTask('Magneta','In Work');
    this.createTask('Magma','In Work');
  }

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  createTask(name:string,state:string) : void {
    let newId : number = this.tasks.length;

    this.tasks.push({id:newId,name:name,state:state});
  }
}
