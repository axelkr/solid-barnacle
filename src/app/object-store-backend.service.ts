import { Injectable } from '@angular/core';
import { ObjectEvent } from './objectEvent';
import { ObjectEventFactoryService } from './object-event-factory.service';

@Injectable({
  providedIn: 'root'
})
export class ObjectStoreBackendService {
  private inMemoryDB : ObjectEvent[] = [];

  constructor(private objectEventFactory: ObjectEventFactoryService) { 
    this.inMemoryDB.push(this.objectEventFactory.constructCreateTaskEvent('Dr Nice','In Work'));
    this.inMemoryDB.push(this.objectEventFactory.constructCreateTaskEvent('Narco','In Work'));
    this.inMemoryDB.push(this.objectEventFactory.constructCreateTaskEvent('Bombasto','In Work'));
    this.inMemoryDB.push(this.objectEventFactory.constructCreateTaskEvent('Celeritas','In Work'));
    this.inMemoryDB.push(this.objectEventFactory.constructCreateTaskEvent('Magneta','In Work'));
    this.inMemoryDB.push(this.objectEventFactory.constructCreateTaskEvent('Magma','In Work'));
  }

  public storeObjectEvent(objectEvent:ObjectEvent) : void {
      this.inMemoryDB.push(objectEvent);
  }

  public getAllObjectEventsOfTopic(topic:string) : ObjectEvent[] {
    return this.inMemoryDB;
  }
}
