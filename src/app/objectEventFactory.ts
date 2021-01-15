import { ObjectEvent } from './objectEvent';

export class ObjectEventFactory {

  public constructCreateTaskEvent(name:string,state:string) : ObjectEvent {
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
    return createObjectEvent;
  }

  private createUUID():string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
