import { Injectable } from '@angular/core';
import { ProcessObjectEventService} from './processObjectEventService';
import { ObjectEvent } from './objectEvent';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class ProcessCreateTaskService implements ProcessObjectEventService {

  constructor() { }
  
  readonly objectEventTypeProcessing : string = 'CreateTask';

  process(objectEvent: ObjectEvent, tasks : Task[]) : Task[] {
    let name = objectEvent.payload.get('name');
    if (name === undefined) {
      name = '';
    }
    let state = objectEvent.payload.get('state');
    if (state === undefined) {
      state = '';
    }
    tasks.push({id:objectEvent.object,name:name,state:state});
    return tasks;
  }
}
