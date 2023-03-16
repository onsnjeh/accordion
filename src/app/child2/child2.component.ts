import { Component } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {
  entier: number;

  constructor() {
    this.entier = 0;
  }

  onSubmit() {
    console.log(this.entier);
  }
}
