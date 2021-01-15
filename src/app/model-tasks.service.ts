import { Injectable } from '@angular/core';
import { ObjectEvent } from './objectEvent';
import { Task } from './task';
import { Observable, of } from 'rxjs';
import { ObjectStoreBackendService } from './object-store-backend.service';

@Injectable({
  providedIn: 'root'
})
export class ModelTasksService {
  private tasks: Task[];

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
    const eventIdDiscardedByBackend : number = 0;
    let createObjectEvent : ObjectEvent = {
      'topic' :'constTopic',
      'time' : new Date(),
      'id' : eventIdDiscardedByBackend,
      'eventType' : "CreateTask",
      'object': this.createUUID(),
      'objectType' : "Task",
      'payload' : new Map([['name',name],['state',state]])
    };

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

  private createUUID():string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
