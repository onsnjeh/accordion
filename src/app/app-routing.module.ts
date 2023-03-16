import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionComponent } from './accordion/accordion.component';
import { Accordion2Component } from './accordion2/accordion2.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { OneComponent } from './exemple/one/one.component';


const routes: Routes = [
{path:'',component:AccordionComponent},
{path:'acc2',component:Accordion2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
