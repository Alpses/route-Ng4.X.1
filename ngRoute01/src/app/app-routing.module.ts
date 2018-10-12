import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroFormComponent } from './hero-form/hero-form.component' ;
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
const routes: Routes = [
  { path:'',redirectTo:'/heroform',pathMatch:'full'  },
  { path:'heroform',component:HeroFormComponent },
  { path:'form1',component:Form1Component },
  { path:'form2',component:Form2Component },
  { path:'form3',component:Form3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
