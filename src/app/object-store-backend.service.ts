import { Injectable } from '@angular/core';
import { ObjectEvent } from './objectEvent';
import { ObjectEventFactoryService } from './object-event-factory.service';

//const sqlite3 = require('sqlite3').verbose();

@Injectable({
  providedIn: 'root'
})
export class ObjectStoreBackendService {
  private inMemoryDB: ObjectEvent[] = [];
  //private db: Database;

  constructor(private objectEventFactory: ObjectEventFactoryService) {
    //this.db = new sqlite3.Database(':memory:');
    this.inMemoryDB.push(this.objectEventFactory.constructCreateTaskEvent('Dr Nice','In Work'));
    this.inMemoryDB.push(this.objectEventFactory.constructCreateTaskEvent('Narco','In Work'));
    this.inMemoryDB.push(this.objectEventFactory.constructCreateTaskEvent('Bombasto','In Work'));
    this.inMemoryDB.push(this.objectEventFactory.constructCreateTaskEvent('Celeritas','In Work'));
    this.inMemoryDB.push(this.objectEventFactory.constructCreateTaskEvent('Magneta','In Work'));
    this.inMemoryDB.push(this.objectEventFactory.constructCreateTaskEvent('Magma','In Work'));
  }

  public storeObjectEvent(objectEvent: ObjectEvent): void {
      this.inMemoryDB.push(objectEvent);
  }

  public getAllObjectEventsOfTopic(topic: string): ObjectEvent[] {
    return this.inMemoryDB;
  }
}
