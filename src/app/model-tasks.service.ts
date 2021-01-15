import { Injectable } from '@angular/core';
import { ObjectEvent } from './objectEvent';
import { Task } from './task';
import { Observable, of } from 'rxjs';
import { ObjectStoreBackendService } from './object-store-backend.service';
import { ObjectEventFactoryService } from './object-event-factory.service';

@Injectable({
  providedIn: 'root'
})
export class ModelTasksService {
  private tasks: Task[];

  constructor(private backend: ObjectStoreBackendService, private objectEventFactory : ObjectEventFactoryService) { 
    this.tasks = [];
    var allEvents = backend.getAllObjectEventsOfTopic(objectEventFactory.currentTopic);
    allEvents.forEach(x => this.processCreateObjectEvent(x));
  }

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  createTask(name:string,state:string) : void {
    let createObjectEvent : ObjectEvent = this.objectEventFactory.constructCreateTaskEvent(name,state);
    this.processObjectEvent(createObjectEvent);
  }

  public processObjectEvent(objectEvent:ObjectEvent) : void {
    switch(objectEvent.eventType) {
      case "CreateTask":
        this.processCreateObjectEvent(objectEvent);
        break;
      default:
        throw "unknown object event "+objectEvent.eventType;
    }
    this.backend.storeObjectEvent(objectEvent);
  }

  // TODO: extract service for processing an event
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
