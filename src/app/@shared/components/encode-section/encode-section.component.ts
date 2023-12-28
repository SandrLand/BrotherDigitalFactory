import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { PutEncodeTypeItem } from 'src/app/@core/data/encoderule';
import { PostEncodeTypeItem, PutEncodeType } from 'src/app/pages/systemset/encoding-rules/encoding-rule';

@Component({
  selector: 'app-encode-section',
  templateUrl: './encode-section.component.html',
  styleUrls: ['./encode-section.component.scss']
})
export class EncodeSectionComponent {
 @Input() selectRule = 0;
 @Input() value = '';
 @Input() length = 0;
 @Input() init = 0;
 @Input() id = 0;
 @Input() selected={ label: '常量', rule: 0 }
 @Input() dataselected={ label: 'yyyyMMdd', value:'yyyyMMdd' }
 @Output() PostdataChange = new EventEmitter<PostEncodeTypeItem>();
 @Output() PutdataChange = new EventEmitter<PutEncodeTypeItem>();
 @ViewChild('type') type!: NgModel;
  typeOptions = [
    { label: '常量', rule: 0 },
    { label: '日期', rule: 1 },
    { label: '流水号', rule: 2 },
  ];
  dateOptions = [
    { label: 'yyyy', value:'yyyy'  },
    { label: 'yyyyMM', value: 'yyyyMM' },
    { label: 'yyyyMMdd', value: 'yyyyMMdd' },
    { label: 'yyyyMMddHHmmss', value: 'yyyyMMddHHmmss' }
  ];
  Postitem: PostEncodeTypeItem = {
    rule: 0,
    value: '',
    length: 0,
    init: 0,
  };//POST编码分段数组
  Putitem: PutEncodeTypeItem = {
    id: 0,
    rule: 0,
    value: '',
    length: 0,
    init: 0,
  };//PUT编码分段数组
  @Input() shouldValidate = false;
  constructor() { }
  onSelectChange($event: any) {
    this.Putitem.id = this.id;  // 更新 this.Putitem 的 id
    this.selectRule =$event.rule ;
    this.Postitem.rule = this.selectRule;
    this.Putitem.rule = this.selectRule;  // 更新 this.Putitem 的 rule
    console.log(this.Putitem)
    this.PostdataChange.emit(this.Postitem);
    this.PutdataChange.emit(this.Putitem);
  }
  onConstantValueChange($event: any){
    this.Putitem.id = this.id;  // 更新 this.Putitem 的 id
    const target = $event.target as HTMLInputElement;
    this.Postitem.rule = 0;
    this.Putitem.rule = 0;
    this.Postitem.value=target.value;
    this.Putitem.value=target.value;
    this.PostdataChange.emit(this.Postitem);
    this.PutdataChange.emit(this.Putitem);
    console.log(this.Putitem)

  }
  onDateOptionChange($event: any){
    this.Putitem.id = this.id;  // 更新 this.Putitem 的 id
    this.Postitem.value = $event.value;
    this.Putitem.value = $event.value;
    this.Postitem.rule = 1;
    this.Putitem.rule = 1;
    this.PostdataChange.emit(this.Postitem);
    this.PutdataChange.emit(this.Putitem);
  }
  onLengthValueChange($event:any){
    this.Putitem.id = this.id;  // 更新 this.Putitem 的 id
    this.Postitem.length = $event;
    this.Putitem.length = $event;
    this.value = Array(this.length).join('#') + this.init;
    this.Postitem.rule = 2;
    this.Putitem.rule = 2;
    this.Postitem.value = this.value;
    this.Putitem.value = this.value;
    this.PostdataChange.emit(this.Postitem);
    this.PutdataChange.emit(this.Putitem);
    this.shouldValidate = true;
  }
  onInitValueChange($event:any){
    this.Putitem.id = this.id;  // 更新 this.Putitem 的 id
    this.Postitem.init = $event;
    this.Putitem.init = $event;
    this.value = Array(this.length).join('#') + this.init;
    this.Postitem.rule = 2;
    this.Postitem.value = this.value;
    this.PostdataChange.emit(this.Postitem);
    this.PutdataChange.emit(this.Putitem);
  }
  triggerValidation() {
    if(this.type){
      this.type.control.markAsTouched();
    }
  }
}
