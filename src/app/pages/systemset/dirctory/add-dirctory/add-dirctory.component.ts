import { Component, Input } from '@angular/core';
import { CascaderItem, PostDictionary, PostDictionaryType } from '../dirctory';
import { DialogService } from 'ng-devui';

@Component({
  selector: 'app-add-dirctory',
  templateUrl: './add-dirctory.component.html',
  styleUrls: ['./add-dirctory.component.scss']
})
export class AddDirctoryComponent {
  @Input() data: any;
  options :any;//字典类别
  PostDictionary: PostDictionary={
    entryName:'',
    description:'',
    categoryId:'',
    entryValue:''
  };//新增字典类别
  constructor(private dialogService: DialogService){
  }
  ngOnInit(): void {
    this.options = this.convertToCascaderItem(this.data.options)
    this.PostDictionary.categoryId = this.data.pathPids[this.data.pathPids.length-1]
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
    this.PostDictionary.categoryId = $event[$event.length-1]
  }

}
