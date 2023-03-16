import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent {
  message: string = '';

  handleMessage(message: string): void {
    this.message = message;
  }
}
