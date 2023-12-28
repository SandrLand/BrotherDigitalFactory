import { Router } from '@angular/router';
import { EncodeRulesService } from './../../../@core/services/encoderRule/encode-rules.service';
import { Component } from '@angular/core';
import { TableWidthConfig } from 'ng-devui';

@Component({
  selector: 'app-encoding-rules',
  templateUrl: './encoding-rules.component.html',
  styleUrls: ['./encoding-rules.component.scss']
})
export class EncodingRulesComponent {
  EncodingRules:any;//编码规则
  tableheight = 'calc(100vh - 380px)';
  allCheckedStatus = false;
  pager = {
    total: 20,
    pageIndex: 1,
    pageSize: 20
  };
  checkedIds = [];
  pageSizeOptions = [10, 20, 30, 50, 100];
  constructor(private EncodeRulesService:EncodeRulesService,private Router:Router){}
  ngOnInit(): void {
    this.EncodeRulesService.getEncodingRules(this.pager.pageIndex,this.pager.pageSize).subscribe((data:any)=>{
      this.EncodingRules=data.items;
      for (let rule of this.EncodingRules) {
        // 生成 code 属性
        rule.code = rule.items.map((item: { value: any; }) => item.value).join(rule.separator)
      }
      this.pager.total=data.totalCount;
      console.log(this.EncodingRules)
    })//获取编码规则
  }
  dataTableOptions = {
    columns: [
      {
        field: 'showType',
        header: '单据类型',
        fieldType: 'text'
      },
      {
        field: 'type',
        header: '编码',
        fieldType: 'text'
      },
      {
        field: 'enabled',
        header: '状态',
        fieldType: 'boolean'
      }
    ]
  };//表格数据
  tableWidthConfig: TableWidthConfig[] = [
    {
      field: 'checkbox',
      width: '80px'
    },
    {
      field:'caozuo',
      width:'150px'
    },
    {
      field: 'showType',
      width: '250px'
    },
    {
      field: 'type',
      width: '250px'
    },
    {
      field: 'enabled',
      width: '150px'
    }
  ];//表格宽度配置
  checkAllChange(checked: boolean) {
    this.allCheckedStatus = checked;
    this.updateCurrentPageDataCheck(checked);

    // 获取所有$checked属性为true的元素的id
     this.checkedIds = this.EncodingRules
      .filter((item: { $checked: any; }) => item.$checked)
      .map((item: { id: any; }) => item.id);

    console.log(this.EncodingRules);
    console.log(this.checkedIds); // 输出所有$checked属性为true的元素的id
  }//全选
  private updateCurrentPageDataCheck(checked: boolean) {
    for (let i = 0; i < this.pager.pageSize; i++) {
      if (this.EncodingRules[i]) {
        this.EncodingRules[i].$checked = checked;
      } else {
        console.error(`EncodingRules at index ${i} is undefined`);
      }
    }
  }//遍历所有项目
  checkItemChange(checked: boolean,rowItem:any) {
    rowItem.$checked = checked;
    this.allCheckedStatus = this.EncodingRules.every((item: { $checked: any; }) => item.$checked === true);
    this.checkedIds = this.EncodingRules
      .filter((item: { $checked: any; }) => item.$checked)
      .map((item: { id: any; }) => item.id);
    console.log(this.EncodingRules);
    console.log(this.checkedIds); // 输出所有$checked属性为true的元素的id
  }//单选
  pageIndexChange($event: any) {
    this.pager.pageIndex=$event;
    this.EncodeRulesService.getEncodingRules(this.pager.pageIndex,this.pager.pageSize).subscribe((data:any)=>{
      this.EncodingRules=data.items;
      for (let rule of this.EncodingRules) {
        // 生成 code 属性
        rule.code = rule.items.map((item: { value: any; }) => item.value).join(rule.separator)
      }

      console.log(this.EncodingRules)
    })//获取编码规则
  }//切换页码
  pageSizeChange($event: any){
    this.EncodeRulesService.getEncodingRules(this.pager.pageIndex,this.pager.pageSize).subscribe((data:any)=>{
      this.EncodingRules=data.items;
      for (let rule of this.EncodingRules) {
        // 生成 code 属性
        rule.code = rule.items.map((item: { value: any; }) => item.value).join(rule.separator)
      }
      console.log(this.EncodingRules)
    })//获取编码规则
  }//改变每页显示数量
  EnableCodeRule(){
    if(this.checkedIds){
      this.EncodeRulesService.EnableCodeRules(this.checkedIds).subscribe((data:any)=>{
        console.log(data);
        this.EncodeRulesService.getEncodingRules(this.pager.pageIndex,this.pager.pageSize).subscribe((data:any)=>{
          this.EncodingRules=data.items;
          for (let rule of this.EncodingRules) {
            // 生成 code 属性
            rule.code = rule.items.map((item: { value: any; }) => item.value).join(rule.separator);
          }
          this.pager.total=data.totalCount;
          console.log(this.EncodingRules)
        })//获取编码规则
      })
    }
  }//启用
  DisableCodeRule(){
    if(this.checkedIds){
      this.EncodeRulesService.DisableCodeRule(this.checkedIds).subscribe((data:any)=>{
        console.log(data);
        this.EncodeRulesService.getEncodingRules(this.pager.pageIndex,this.pager.pageSize).subscribe((data:any)=>{
          this.EncodingRules=data.items;
          for (let rule of this.EncodingRules) {
            // 生成 code 属性
            rule.code = rule.items.map((item: { value: any; }) => item.value).join(rule.separator);
          }
          this.pager.total=data.totalCount;
          console.log(this.EncodingRules)
        })//获取编码规则
      })
    }
  }//禁用
  DeleteEncodingRules(id:any){
    this.EncodeRulesService.DeleteEncodingRules(id).subscribe((data:any)=>{
      this.EncodeRulesService.getEncodingRules(this.pager.pageIndex,this.pager.pageSize).subscribe((data:any)=>{
        this.EncodingRules=data.items;
        for (let rule of this.EncodingRules) {
          // 生成 code 属性
          rule.code = rule.items.map((item: { value: any; }) => item.value).join(rule.separator);
        }
        this.pager.total=data.totalCount;
        console.log(this.EncodingRules)
      })//获取编码规则
    })
  }//删除
  edit(id:any){
    this.Router.navigate(['/pages/systemset/Edit-Encoding-Rules',id]);
  }
}
