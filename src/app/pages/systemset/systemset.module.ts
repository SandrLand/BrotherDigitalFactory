import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemsetRoutingModule } from './systemset-routing.module';
import { SystemsetComponent } from './systemset.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { EncodingRulesComponent } from './encoding-rules/encoding-rules.component';
import { TextInputModule } from 'ng-devui/text-input';
import { ButtonModule } from 'ng-devui/button';
import { DataTableModule } from 'ng-devui/data-table';
import {DatepickerModule,
  FormModule,
  InputNumberModule,
  PaginationModule,
  SelectModule,
  TooltipModule,} from 'ng-devui';
import { StatusPipe } from 'src/app/@shared/pipes/status.pipe';
import { EditEncodeingRulesComponent } from './edit-encodeing-rules/edit-encodeing-rules.component';
import { AddEncodingRuleComponent } from './add-encoding-rule/add-encoding-rule.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToggleModule } from 'ng-devui/toggle';
import { ToastModule } from 'ng-devui/toast';
import { DirctoryComponent } from './dirctory/dirctory.component';
import { TreeModule } from 'ng-devui/tree';
import { ModalModule } from 'ng-devui/modal';
import { AddDirctoryTypeComponent } from './dirctory/add-dirctory-type/add-dirctory-type.component';
import { EditDirctoryTypeComponent } from './dirctory/edit-dirctory-type/edit-dirctory-type.component';
import { CascaderModule } from 'ng-devui/cascader';
import { AddDirctoryComponent } from './dirctory/add-dirctory/add-dirctory.component';
import { EditDirctoryComponent } from './dirctory/edit-dirctory/edit-dirctory.component';
@NgModule({
  declarations: [
    SystemsetComponent,
    EncodingRulesComponent,
    EditEncodeingRulesComponent,
    AddEncodingRuleComponent,
    DirctoryComponent,
    AddDirctoryTypeComponent,
    EditDirctoryTypeComponent,
    AddDirctoryComponent,
    EditDirctoryComponent,

  ],
  imports: [
    CommonModule,
    SystemsetRoutingModule,
    SharedModule,
    TextInputModule,
    ButtonModule,
    DataTableModule,
    DatepickerModule,
    InputNumberModule,
    PaginationModule,
    TooltipModule,
    FormModule,
    FormsModule,
    SelectModule,
    ToggleModule,
    ReactiveFormsModule,
    ToastModule,
    TreeModule,
    ModalModule,
    CascaderModule
  ]
})
export class SystemsetModule { }
