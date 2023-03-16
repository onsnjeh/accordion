import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css']
})
export class ComponentTwoComponent {
  @Input() messageInput: string = '';
  @Output() messageOutput = new EventEmitter<string>();
  
  sendMessage(): void {
  const newMessage = 'Hello from Component B';
  this.messageOutput.emit(newMessage);
}
}
