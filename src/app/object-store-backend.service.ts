import { Injectable } from '@angular/core';
import { ObjectEvent } from './objectEvent';
import { ObjectEventFactory } from './objectEventFactory';

@Injectable({
  providedIn: 'root'
})
export class ObjectStoreBackendService {
  private inMemoryDB : ObjectEvent[] = [];

  constructor() { 
    var objectEventFactory = new ObjectEventFactory();
    this.inMemoryDB.push(objectEventFactory.constructCreateTaskEvent('Dr Nice','In Work'));
    this.inMemoryDB.push(objectEventFactory.constructCreateTaskEvent('Narco','In Work'));
    this.inMemoryDB.push(objectEventFactory.constructCreateTaskEvent('Bombasto','In Work'));
    this.inMemoryDB.push(objectEventFactory.constructCreateTaskEvent('Celeritas','In Work'));
    this.inMemoryDB.push(objectEventFactory.constructCreateTaskEvent('Magneta','In Work'));
    this.inMemoryDB.push(objectEventFactory.constructCreateTaskEvent('Magma','In Work'));
  }

  public storeObjectEvent(objectEvent:ObjectEvent) : void {
      this.inMemoryDB.push(objectEvent);
  }

  public getAllObjectEventsOfTopic(topic:string) : ObjectEvent[] {
    return this.inMemoryDB;
  }
}
