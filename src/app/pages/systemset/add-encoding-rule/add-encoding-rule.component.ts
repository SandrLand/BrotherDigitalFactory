
import { EncodeRulesService } from './../../../@core/services/encoderRule/encode-rules.service';

import { Component, TemplateRef, ViewChild } from '@angular/core';
import { PostEncodeType, PostEncodeTypeItem } from '../encoding-rules/encoding-rule';
import { NgModel,  } from '@angular/forms';
import { Router } from '@angular/router';
import { EncodeSectionComponent } from 'src/app/@shared/components/encode-section/encode-section.component';

@Component({
  selector: 'app-add-encoding-rule',
  templateUrl: './add-encoding-rule.component.html',
  styleUrls: ['./add-encoding-rule.component.scss']
})
export class AddEncodingRuleComponent {
  separator = '-';
  selectValue = 2;//编码分段
  selectOptions = [{
    value: 2,
    label: '2'
  },

  {
    value: 3,
    label: '3'
  },
  ];
  items = [
    {
      rule: 0,
      value: '',
      length: 0,
      init: 0
    },
    {
      rule: 1,
      value: 'yyyyMMdd',
      length: 0,
      init: 0
    },
    {
      rule: 2,
      value: '',
      length: 0,
      init: 0
    }
  ];//编码分段数组
  item:{}={}

  AddEndcode:PostEncodeType = {
    typeName: '',
    type: '',
    separator: '-',
    enabled: false,
    itemsLength: 0,
    items: this.items,
  };//编码分段数组
  shouldValidate=false;
  @ViewChild('type') type!: NgModel;
  @ViewChild(EncodeSectionComponent) encodeSectionComponent!: EncodeSectionComponent;
  @ViewChild('customTemplate') customTemplate!: TemplateRef<any>;
  msgs: Array<Object> = [];
  constructor(private router:Router,private EncodeRulesService:EncodeRulesService){}
  getSelectValue($event: any) {
    this.selectValue = $event.value;
    this.AddEndcode.itemsLength = this.selectValue;
  }
  onDataChanged(item: PostEncodeTypeItem, index: number) {
    this.items[index] = item;
  }
  enabled($event: any) {
    this.AddEndcode.enabled=$event;
  }
  submit(){
    if(this.type.valid && this.AddEndcode.items[0].value){
      this.AddEndcode.typeName = this.AddEndcode.type
      if (this.selectValue === 2) {
        this.AddEndcode.items = this.items.slice(0, 2);
      } else {
        this.AddEndcode.items = this.items;
      }
      this.EncodeRulesService.PostEncodingRules(this.AddEndcode).subscribe(
        (respnse)=>{
          this.showToast('success','成功','编码规则添加成功！')
          this.router.navigate(['/pages/systemset/Encoding-Rules']);
        },(error:any)=>{
          this.showToast('warn','警告',error.error)
        }
      )
      console.log(this.AddEndcode)
    }else {
      this.shouldValidate = true;
      // 如果 type 控件无效，显示错误消息
      this.type.control.markAsTouched();
      this.encodeSectionComponent.triggerValidation();
      this.showToast('warn','警告','请按照要求填写表单！')
    }

  }
  showToast(type: any,summary:any,content:any) {
    switch (type) {
    default:
      this.msgs = [{ severity: type, summary: summary, content: content }];
    }
  }
  cancle(){
    this.router.navigate(['/pages/systemset/Encoding-Rules']);
  }
}


