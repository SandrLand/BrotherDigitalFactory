import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemsetComponent } from './systemset.component';
import { EncodingRulesComponent } from './encoding-rules/encoding-rules.component';
import { EditEncodeingRulesComponent } from './edit-encodeing-rules/edit-encodeing-rules.component';
import { AddEncodingRuleComponent } from './add-encoding-rule/add-encoding-rule.component';
import { DirctoryComponent } from './dirctory/dirctory.component';

const routes: Routes = [
  {
   path: '',
   component: SystemsetComponent,
   children:[
    {
      path:"Encoding-Rules",
      component:EncodingRulesComponent
    },{
      path:"AddEncoding-Rules",
      component:AddEncodingRuleComponent
    },{
      path:"Edit-Encoding-Rules/:id",
      component:EditEncodeingRulesComponent
    },{
      path:"Dirctory",
      component:DirctoryComponent
    }
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemsetRoutingModule { }
