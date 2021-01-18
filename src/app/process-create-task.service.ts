import { Injectable } from '@angular/core';
import { ProcessObjectEventService} from './processObjectEventService';
import { ObjectEvent } from './objectEvent';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class ProcessCreateTaskService implements ProcessObjectEventService {
  readonly objectEventTypeProcessing: string = 'CreateTask';

  constructor() { }

  process(objectEvent: ObjectEvent, tasks: Task[]): Task[] {
    let name = objectEvent.payload.get('name');
    if (name === undefined) {
      name = '';
    }
    let state = objectEvent.payload.get('state');
    if (state === undefined) {
      state = '';
    }
    if ( ! this.objectAlreadyCreated(tasks,objectEvent.object)) {
      tasks.push({id:objectEvent.object,name,state});
    }
    return tasks;
  }

  private objectAlreadyCreated(tasks: Task[], objectId: string): boolean {
    let alreadyCreated = false;
    tasks.forEach(aTask => {
      if ( aTask.id === objectId) {
        alreadyCreated = true;
      }
    });
    return alreadyCreated;
  }
}
