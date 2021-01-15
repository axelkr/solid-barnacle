import { Injectable } from '@angular/core';
import { ObjectEvent } from './objectEvent';
import { Task } from './task';
import { Observable, of } from 'rxjs';
import { ObjectStoreBackendService } from './object-store-backend.service';
import { ObjectEventFactory } from './objectEventFactory';

@Injectable({
  providedIn: 'root'
})
export class ModelTasksService {
  private tasks: Task[];
  private objectEventFactory : ObjectEventFactory = new ObjectEventFactory();

  constructor(private backend: ObjectStoreBackendService) { 
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
    let createObjectEvent : ObjectEvent = this.objectEventFactory.constructCreateTaskEvent(name,state);
    this.processCreateObjectEvent(createObjectEvent);
    this.backend.storeObjectEvent(createObjectEvent);
  }

  private processCreateObjectEvent(objectEvent:ObjectEvent) : void {
    let name = objectEvent.payload.get('name');
    if (name === undefined) {
      name = '';
    }
    let state = objectEvent.payload.get('state');
    if (state === undefined) {
      state = '';
    }
    this.tasks.push({id:objectEvent.object,name:name,state:state});
  }
}
