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
    var allEvents = backend.getAllObjectEventsOfTopic('someTopic');
    allEvents.forEach(x => this.processCreateObjectEvent(x));
  }

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  // TODO: extract service for processing an event
  // TODO: don't hardcode topic
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
