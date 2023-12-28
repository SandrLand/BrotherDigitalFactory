import { Component, Input } from '@angular/core';
import { CascaderItem, PutDictionaryType } from '../dirctory';

@Component({
  selector: 'app-edit-dirctory-type',
  templateUrl: './edit-dirctory-type.component.html',
  styleUrls: ['./edit-dirctory-type.component.scss']
})
export class EditDirctoryTypeComponent {
  @Input() data: any;
  options :any;//字典类别
  PutDictionaryType: PutDictionaryType={
    name:'',
    description:'',
    parentCategoryId:''
  };//新增字典类别
  constructor(){
  }
  ngOnInit(): void {
    this.options = this.convertToCascaderItem(this.data.options)
    this.PutDictionaryType.name = this.data.option.name,
    this.PutDictionaryType.description = this.data.option.description,
    this.PutDictionaryType.parentCategoryId = this.data.option.parentCategoryId
    console.log(this.data)
  }
  convertToCascaderItem(data: any[]): CascaderItem[] {
    return data.map(item => {
      let cascaderItem: CascaderItem = {
        label: item.name,
        value: item.categoryId,
        icon: item.icon
      };
      if (item.subCategories) {
        cascaderItem.children = this.convertToCascaderItem(item.subCategories);
      }
      return cascaderItem;
    });
  }//转换数据格式为华为库练级菜单的数据格式
  onChanges($event: string | any[]){
    this.PutDictionaryType.parentCategoryId = $event[$event.length-1]
  }
}
