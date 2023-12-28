import { Component, Input } from '@angular/core';
import { PutDictionary } from '../dirctory';
import { CascaderItem, DialogService } from 'ng-devui';

@Component({
  selector: 'app-edit-dirctory',
  templateUrl: './edit-dirctory.component.html',
  styleUrls: ['./edit-dirctory.component.scss']
})
export class EditDirctoryComponent {
  @Input() data: any;
  options :any;//字典类别
  PutDictionary: PutDictionary={
    entryName:'',
    description:'',
    categoryId:'',
    entryValue:''
  };//新增字典类别
  constructor(private dialogService: DialogService){
  }
  ngOnInit(): void {
    this.options = this.convertToCascaderItem(this.data.options)
    this.PutDictionary.entryName = this.data.dictionary.entryName,
    this.PutDictionary.description = this.data.dictionary.description,
    this.PutDictionary.entryValue = this.data.dictionary.entryValue,
    this.PutDictionary.categoryId = this.data.pathPids[this.data.pathPids.length-1]
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
    this.PutDictionary.categoryId = $event[$event.length-1]
  }
}
