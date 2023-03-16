import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { OneComponent } from './exemple/one/one.component';
import { ComponentTwoComponent } from './exemple/component-two/component-two.component';
import { ComponentThreeComponent } from './exemple/component-three/component-three.component';
import { ComponentComponent } from './exemple/component/component.component';
import { AccordionComponent } from './accordion/accordion.component';
import { NgbAccordionModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Accordion2Component } from './accordion2/accordion2.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    Child2Component,
    OneComponent,
    ComponentTwoComponent,
    ComponentThreeComponent,
    ComponentComponent,
    AccordionComponent,
    Accordion2Component,
   
  ],
  imports: [
    BrowserModule, FormsModule ,AppRoutingModule, NgbModule,
    NgbAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
