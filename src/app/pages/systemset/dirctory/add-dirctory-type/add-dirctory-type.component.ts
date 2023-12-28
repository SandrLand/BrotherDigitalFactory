import { Component, Input, OnChanges } from '@angular/core';
import { CascaderItem, DialogService } from 'ng-devui';
import { PostDictionaryType } from '../dirctory';
@Component({
  selector: 'app-add-dirctory-type',
  templateUrl: './add-dirctory-type.component.html',
  styleUrls: ['./add-dirctory-type.component.scss']
})
export class AddDirctoryTypeComponent {
  @Input() data: any;
  options :any;//字典类别
  PostDictionaryType: PostDictionaryType={
    name:'',
    description:'',
    parentCategoryId:0
  };//新增字典类别
  constructor(private dialogService: DialogService){
  }
  ngOnInit(): void {
    this.options = this.convertToCascaderItem(this.data.options)
    this.PostDictionaryType.parentCategoryId = this.data.pathPids[this.data.pathPids.length-1]
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
    this.PostDictionaryType.parentCategoryId = $event[$event.length-1]
  }

}
