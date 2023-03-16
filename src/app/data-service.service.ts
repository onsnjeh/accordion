import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  componentAMessage: EventEmitter<string> = new EventEmitter();
  componentCMessage: EventEmitter<string> = new EventEmitter();
}
