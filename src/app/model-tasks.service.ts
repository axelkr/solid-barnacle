import { Injectable } from '@angular/core';
import { Task } from './task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelTasksService {
  private tasks: Task[] = [
    { id: 11, name: 'Dr Nice' , state: 'In Work'},
    { id: 12, name: 'Narco' , state: 'In Work'},
    { id: 13, name: 'Bombasto' , state: 'In Work'},
    { id: 14, name: 'Celeritas' , state: 'In Work'},
    { id: 15, name: 'Magneta' , state: 'In Work'},
    { id: 16, name: 'RubberMan' , state: 'In Work'},
    { id: 17, name: 'Dynama' , state: 'In Work'},
    { id: 18, name: 'Dr IQ' , state: 'In Work'},
    { id: 19, name: 'Magma' , state: 'In Work'},
    { id: 20, name: 'Tornado' , state: 'In Work'}
  ];

  constructor() { }

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }
}
