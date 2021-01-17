import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { ObjectEvent } from '../objectEvent';

@Injectable({
  providedIn: 'root'
})

export class ObjectStoreBackendService {

  constructor(private httpClient: HttpClient) {
  }

  public storeObjectEvent(objectEvent: ObjectEvent): void {
    console.log('storing event:');
    console.log(objectEvent);
    const asJSON = {
      topic:objectEvent.topic,
      time:objectEvent.time,
      id: objectEvent.id,
      eventType: objectEvent.eventType,
      object: objectEvent.object,
      objectType: objectEvent.objectType,
      payload: objectEvent.payload
    };
    this.httpClient.post('http://localhost:8000/objectEvent',asJSON).subscribe(
      (response)=> console.log(response),
      (error)=> console.log(error));
  }

  public getAllObjectEventsOfTopic(topic: string): Observable<ObjectEvent[]> {
    return this.httpClient.get<ObjectEvent[]>(`http://localhost:8000/objectEvent?topic=`+topic);
  }
}
