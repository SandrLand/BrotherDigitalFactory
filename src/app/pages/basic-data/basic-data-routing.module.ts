import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicDataComponent } from './basicdata.component';

const routes: Routes = [
  {
    path:'',
    component:BasicDataComponent,
    children:[

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicDataRoutingModule { }
