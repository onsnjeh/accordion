import { Component, EventEmitter, Output } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent {
  @Output() messageOutput = new EventEmitter<string>();

  sendMessage(): void {
    const message = 'Hello from Component A';
    this.messageOutput.emit(message);
  }


}
