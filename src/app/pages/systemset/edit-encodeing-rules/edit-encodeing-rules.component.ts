import { ActivatedRoute, Router } from '@angular/router';
import { EncodeRulesService } from './../../../@core/services/encoderRule/encode-rules.service';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { PostEncodeType, PutEncodeType, PutEncodeTypeItem } from '../encoding-rules/encoding-rule';
import { NgModel } from '@angular/forms';
import { EncodeSectionComponent } from 'src/app/@shared/components/encode-section/encode-section.component';

@Component({
  selector: 'app-edit-encodeing-rules',
  templateUrl: './edit-encodeing-rules.component.html',
  styleUrls: ['./edit-encodeing-rules.component.scss']
})
export class EditEncodeingRulesComponent {
  selectOptions = [
    2,3
  ];
  items = [
    {
      id:0,
      rule: 0,
      value: '',
      length: 0,
      init: 0
    },
    {
      id:0,
      rule: 1,
      value: 'yyyyMMdd',
      length: 0,
      init: 0
    },
    {
      id:0,
      rule: 2,
      value: '',
      length: 0,
      init: 0
    }
  ];//编码分段数组
  editEndcode:PutEncodeType = {
    typeName: '',
    type: '',
    separator: '-',
    enabled: false,
    itemsLength: 0,
    items: this.items,
  };
  typeOptions = [
    { label: '常量', rule: 0 },
    { label: '日期', rule: 1 },
    { label: '流水号', rule: 2 },
  ];
  rule!:number
  shouldValidate=false;
  @ViewChild(EncodeSectionComponent) encodeSectionComponent!: EncodeSectionComponent;
  @ViewChild('type') type!: NgModel;
  @ViewChild('customTemplate') customTemplate!: TemplateRef<any>;
  msgs: Array<Object> = [];
  constructor(private EncodeRulesService:EncodeRulesService,private ActivatedRoute: ActivatedRoute,private router:Router) { }
  ngOnInit(): void {
    const id = this.ActivatedRoute.snapshot.paramMap.get('id');
    this.EncodeRulesService.getEncodingRulesById(id!).subscribe((data:any)=>{
      this.editEndcode.itemsLength = data.items.length;
      this.editEndcode.separator = data.separator;
      this.editEndcode.enabled = data.enabled;
      this.editEndcode.items = data.items.map((item: { id: any; rule: any; value: any; length: any; init: any; sequenceId: any; }) => {
        let length = item.length || 0;
        let init = item.init || 0;
        if (item.rule === 2) {
          length = item.value.length;
          init = parseInt(item.value.charAt(item.value.length - 1));
        }
        return {
          id: item.id,
          rule: item.rule || 0,
          value: item.value || '',
          length: length,
          init: init,
        };

      });
      while (this.editEndcode.items.length < 3) {
        this.editEndcode.items.push({
          id: 0,
          rule: 0,
          value: '',
          length: 0,
          init: 0,
        });
      }
      this.editEndcode.type = data.type;
      console.log(this.editEndcode);
    })
  }
  onDataChanged(item: PutEncodeTypeItem, index: number) {
    this.editEndcode.items[index] = item;
  }
  submit(){
    if(this.type.valid && this.editEndcode.items[0].value){
      this.editEndcode.typeName = this.editEndcode.type
      if (this.editEndcode.itemsLength === 2) {
        this.editEndcode.items = this.editEndcode.items.slice(0, 2);
      } else {
        this.editEndcode.items = this.editEndcode.items;
      }
      this.EncodeRulesService.putEncodingRules(this.ActivatedRoute.snapshot.paramMap.get('id'),this.editEndcode).subscribe(
        (response)=>{
          this.showToast('success','成功','编码规则修改成功！')
          setTimeout(() => {
            this.router.navigate(['/pages/systemset/Encoding-Rules']);
          },2000)
        },
        (error:any)=>{
          this.showToast('error','失败',error.error())
        }
      )
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
