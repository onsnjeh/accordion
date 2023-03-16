import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() entier:number=0;
  
  div:number[] =[] 
 constructor()  {  }
     ngOnInit(){
       console.log(this.entier);
     }
     ndiv(){
       this.div = Array(this.entier).fill(this.entier);
     }
     
}

