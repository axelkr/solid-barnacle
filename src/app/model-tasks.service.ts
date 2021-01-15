import { Injectable } from '@angular/core';
import { ObjectEvent } from './objectEvent';
import { Task } from './task';
import { Observable, of } from 'rxjs';
import { ObjectStoreBackendService } from './object-store-backend.service';
import { ObjectEventFactoryService } from './object-event-factory.service';
import { ProcessCreateTaskService } from './process-create-task.service';
import { ProcessObjectEventService} from './processObjectEventService';

@Injectable({
  providedIn: 'root'
})
export class ModelTasksService {
  private tasks: Task[];
  private processors: Map<string,ProcessObjectEventService> = new Map<string,ProcessObjectEventService>();

  constructor(private backend: ObjectStoreBackendService, private objectEventFactory: ObjectEventFactoryService) {
    this.tasks = [];
    const availableProcessors: ProcessObjectEventService[] = [];
    availableProcessors.push(new ProcessCreateTaskService());

    availableProcessors.forEach(aService => this.processors.set(aService.objectEventTypeProcessing,aService));

    const allEvents = backend.getAllObjectEventsOfTopic(this.objectEventFactory.currentTopic);
    allEvents.forEach(x => this.processObjectEvent(x));
  }

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  public processObjectEvent(objectEvent: ObjectEvent): void {
    if ( ! this.processors.has(objectEvent.eventType)) {
      throw new Error('unknown object event '+objectEvent.eventType);
    }
    const aProcessor = this.processors.get(objectEvent.eventType);
    if (aProcessor !== undefined) {
      this.tasks = aProcessor.process(objectEvent,this.tasks);
      this.backend.storeObjectEvent(objectEvent);
    }
  }
}
