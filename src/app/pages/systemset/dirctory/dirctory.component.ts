import { DirctoryService } from './../../../@core/services/dirctory/dirctory.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { DialogService, TableWidthConfig, TreeComponent } from 'ng-devui';
import { AddDirctoryTypeComponent } from './add-dirctory-type/add-dirctory-type.component';
import { EditDirctoryTypeComponent } from './edit-dirctory-type/edit-dirctory-type.component';
import { AddDirctoryComponent } from './add-dirctory/add-dirctory.component';
import { EditDirctoryComponent } from './edit-dirctory/edit-dirctory.component';
@Component({
  selector: 'app-dirctory',
  templateUrl: './dirctory.component.html',
  styleUrls: ['./dirctory.component.scss']
})
export class DirctoryComponent {
  tableheight = 'calc(100vh - 380px)';
  pager = {
    total: 20,
    pageIndex: 1,
    pageSize: 20
  };
  pageSizeOptions = [10, 20, 30, 50, 100];
  treeData:any;
  categoryId!:string
  dirctorData:any;
  allCheckedStatus = false;
  checkedIds = [];
  option:any;//字典类别option
  pathPids:any//字典类被路径
  dataTableOptions = {
    columns: [
      {
        field: 'name',
        header: '名称',
        fieldType: 'text'
      },
      {
        field: 'value',
        header: '值',
        fieldType: 'text'
      },
      {
        field: 'description',
        header: '描述',
        fieldType: 'boolean'
      }
    ]
  };//表头数据
  tableWidthConfig: TableWidthConfig[] = [
    {
      field: 'checkbox',
      width: '80px'
    },
    {
      field:'name',
      width:'250px'
    },
    {
      field: 'value',
      width: '150px'
    },
    {
      field: 'description',
      width: '250px'
    }
  ];//表格宽度配置
  msgs: Array<Object> = [];
  @ViewChild('basicTree', { static: true }) basicTree!: TreeComponent;
  constructor(private DirctoryService:DirctoryService,private dialogService: DialogService){}
  ngOnInit(): void {
    this.DirctoryService.getDictionaryType(this.pager.pageIndex,this.pager.pageSize).subscribe((data:any)=>{
      this.treeData=data.items;
      this.option=this.treeData[0]
      this.categoryId = this.treeData[0].categoryId
      this.pathPids = this.getPathPids(this.option, this.treeData);// 输出路径 PID
      this.pager.total=data.totalCount;
      console.log(this.treeData)
      this.DirctoryService.getDictionary(this.pager.pageIndex,this.pager.pageSize,this.categoryId).subscribe((data:any)=>{
        this.dirctorData=data.items;
        this.pager.total=data.totalCount;
      })
    })
  }
  nodeSelected($event:any){
    this.option=$event.data.originItem
    this.categoryId = $event.data.originItem.categoryId;
    this.DirctoryService.getDictionary(this.pager.pageIndex,this.pager.pageSize,this.categoryId).subscribe((data:any)=>{
      this.dirctorData=data.items;
      this.pager.total=data.totalCount;
    })
   this.pathPids = this.getPathPids(this.option, this.treeData);// 输出路径 PID
   console.log(this.pathPids);
  }
  checkAllChange(checked: boolean) {
    this.allCheckedStatus = checked;
    this.updateCurrentPageDataCheck(checked);
    // 获取所有$checked属性为true的元素的id
     this.checkedIds = this.dirctorData
      .filter((item: { $checked: any; }) => item.$checked)
      .map((item: { dictionaryEntryId: any; }) => item.dictionaryEntryId);

    console.log(this.dirctorData);
    console.log(this.checkedIds); // 输出所有$checked属性为true的元素的id
  }//全选
  private updateCurrentPageDataCheck(checked: boolean) {
    for (let i = 0; i < this.dirctorData; i++) {
      if (this.dirctorData[i]) {
        this.dirctorData[i].$checked = checked;
      } else {
        console.error(`dirctorData at index ${i} is undefined`);
      }
    }
  }//遍历所有项目
  checkItemChange(checked: boolean,rowItem:any) {
    rowItem.$checked = checked;
    this.allCheckedStatus = this.dirctorData.every((item: { $checked: any; }) => item.$checked === true);
    this.checkedIds = this.dirctorData
      .filter((item: { $checked: any; }) => item.$checked)
      .map((item: { dictionaryEntryId: any; }) => item.dictionaryEntryId);
    console.log(this.dirctorData);
    console.log(this.checkedIds); // 输出所有$checked属性为true的元素的id
  }//单选
  config = {
    id: 'Add-Dirctoy-Type',
    maxHeight: '400px',
    width: '400px',
    backdropCloseable: true,
  }//弹窗配置
  addDirctoyType(dialogtype?: string) {
    let data = {
      options: this.treeData,
      pathPids: this.pathPids,
      display: false
    };
    const results = this.dialogService.open({
      ...this.config,
      title: '新增字典类型',
      content: AddDirctoryTypeComponent,
      dialogtype: dialogtype,
      onClose: () => {

      },
      data:data,
      buttons: [
        {
          cssClass: 'stress',
          text: '确定',
          handler: ($event: Event) => {
            if(results.modalContentInstance.PostDictionaryType.name){
              this.DirctoryService.postDictionaryType(results.modalContentInstance.PostDictionaryType).subscribe((data:any)=>{
                this.showToast('success','成功','字典类别添加成功！')
                results.modalInstance.hide();
                this.DirctoryService.getDictionaryType(this.pager.pageIndex,this.pager.pageSize).subscribe((data:any)=>{
                  this.treeData=data.items;
                  this.pager.total=data.totalCount;
                })
              },error=>{
                this.showToast('danger','失败',error.error)
              }
              )
            }else{
              data.display = true;
            }
          },
        },
        {
          id: 'btn-cancel',
          cssClass: 'common',
          text: '取消',
          handler: ($event: Event) => {
            results.modalInstance.hide();
          },
        },
      ],
    });
  }//新增字典类别
  EditDirctoyType(dialogtype?: string) {
    let data = {
      options: this.treeData,
      pathPids: this.pathPids.slice(0, -1),
      display: false,
      option:this.option
    };
    const results = this.dialogService.open({
      ...this.config,
      title: '更新字典类型',
      content: EditDirctoryTypeComponent,
      dialogtype: dialogtype,
      onClose: () => {
      },
      data:data,
      buttons: [
        {
          cssClass: 'stress',
          text: '确定',
          handler: ($event: Event) => {
            if(results.modalContentInstance.PutDictionaryType.name){
              this.DirctoryService.putDictionaryType(this.categoryId,results.modalContentInstance.PutDictionaryType).subscribe((data:any)=>{
                this.showToast('success','成功','字典类别修改成功！')
                results.modalInstance.hide();
                this.DirctoryService.getDictionaryType(this.pager.pageIndex,this.pager.pageSize).subscribe((data:any)=>{
                  this.treeData=data.items;
                  this.pager.total=data.totalCount;
                })
              },error=>{
                this.showToast('danger','失败',error.error)
              }
              )
            }else{
              data.display = true;
            }
          },
        },
        {
          id: 'btn-cancel',
          cssClass: 'common',
          text: '取消',
          handler: ($event: Event) => {
            results.modalInstance.hide();
          },
        },
      ],
    });
  }//更新字典类别
  DeleteDirctoyType(dialogtype?: string){
    const results = this.dialogService.open({
      ...this.config,
      title: '新增字典',
      content: '确认删除该字典类别？',
      dialogtype: dialogtype,
      onClose: () => {
      },
      buttons: [
        {
          cssClass: 'stress',
          text: '确定',
          handler: ($event: Event) => {
            this.DirctoryService.deleteDictionaryType(this.categoryId).subscribe((data:any)=>{
              this.showToast('success','成功','字典类别删除成功！')
              results.modalInstance.hide();
              this.DirctoryService.getDictionaryType(this.pager.pageIndex,this.pager.pageSize).subscribe((data:any)=>{
                this.treeData=data.items;
                this.pager.total=data.totalCount;
              })
            },error=>{
              this.showToast('danger','失败',error.error)
            }
            )
          },
        },
        {
          id: 'btn-cancel',
          cssClass: 'common',
          text: '取消',
          handler: ($event: Event) => {
            results.modalInstance.hide();
          },
        },
      ],
    });
  }
  addDirctoy(dialogtype?: string) {
    let data = {
      options: this.treeData,
      pathPids: this.pathPids,
      display: false
    };
    const results = this.dialogService.open({
      ...this.config,
      title: '新增字典',
      content: AddDirctoryComponent,
      dialogtype: dialogtype,
      onClose: () => {
      },
      data:data,
      buttons: [
        {
          cssClass: 'stress',
          text: '确定',
          handler: ($event: Event) => {
            if(results.modalContentInstance.PostDictionary.entryName&&results.modalContentInstance.PostDictionary.entryValue){
              this.DirctoryService.postDictionary(results.modalContentInstance.PostDictionary).subscribe((data:any)=>{
                this.showToast('success','成功','字典添加成功！')
                results.modalInstance.hide();
                this.DirctoryService.getDictionary(this.pager.pageIndex,this.pager.pageSize,this.categoryId).subscribe((data:any)=>{
                  this.dirctorData=data.items;
                  this.pager.total=data.totalCount;
                })
              },error=>{
                this.showToast('danger','失败',error.error)
              }
              )
            }else{
              data.display = true;
            }
          },
        },
        {
          id: 'btn-cancel',
          cssClass: 'common',
          text: '取消',
          handler: ($event: Event) => {
            results.modalInstance.hide();
          },
        },
      ],
    });
  }//新增字典
  editDirctoy(dictionary:any,dialogtype?: string) {
    let data = {
      options: this.treeData,
      pathPids: this.pathPids,
      display: false,
      dictionary:dictionary
    };
    const results = this.dialogService.open({
      ...this.config,
      title: '更新字典',

      content: EditDirctoryComponent,
      dialogtype: dialogtype,
      onClose: () => {
      },
      data:data,
      buttons: [
        {
          cssClass: 'stress',
          text: '确定',
          handler: ($event: Event) => {
            if(results.modalContentInstance.PutDictionary.entryName&&results.modalContentInstance.PutDictionary.entryValue){
              this.DirctoryService.putDictionary(dictionary?.dictionaryEntryId,results.modalContentInstance.PutDictionary).subscribe((data:any)=>{
                this.showToast('success','成功','字典更新成功！')
                results.modalInstance.hide();
                this.DirctoryService.getDictionary(this.pager.pageIndex,this.pager.pageSize,this.categoryId).subscribe((data:any)=>{
                  this.dirctorData=data.items;
                  this.pager.total=data.totalCount;
                })
              },error=>{
                this.showToast('danger','失败',error.error)
              }
              )
            }else{
              data.display = true;
            }
          },
        },
        {
          id: 'btn-cancel',
          cssClass: 'common',
          text: '取消',
          handler: ($event: Event) => {
            results.modalInstance.hide();
          },
        },
      ],
    });
  }//更新字典
  deleteDirctoy(dialogtype?: string){
    const results = this.dialogService.open({
      ...this.config,
      title: '新增字典',
      content: '确认删除该字典？',
      dialogtype: dialogtype,
      onClose: () => {
      },
      buttons: [
        {
          cssClass: 'stress',
          text: '确定',
          handler: ($event: Event) => {
            this.DirctoryService.deleteDictionary(this.checkedIds).subscribe((data:any)=>{
              this.showToast('success','成功','字典删除成功！')
              results.modalInstance.hide();
              this.DirctoryService.getDictionary(this.pager.pageIndex,this.pager.pageSize,this.categoryId).subscribe((data:any)=>{
                this.dirctorData=data.items;
                this.pager.total=data.totalCount;
              })
            },error=>{
              this.showToast('danger','失败',error.error)
            }
            )
          },
        },
        {
          id: 'btn-cancel',
          cssClass: 'common',
          text: '取消',
          handler: ($event: Event) => {
            results.modalInstance.hide();
          },
        },
      ],
    });
  }
  getPathPids(node: any, nodes: any[]): string[] {
    let pathPids = [];
    let currentNode = node;
    while (currentNode && currentNode.parentCategoryId) {
      pathPids.push(currentNode.parentCategoryId);
      currentNode = nodes.find(n => n.categoryId === currentNode.parentCategoryId);
    }
    pathPids.reverse().push(node.categoryId);
    return pathPids
  }//获取树形菜单pid的路径


  showToast(type: any,summary:any,content:any) {
    switch (type) {
    default:
      this.msgs = [{ severity: type, summary: summary, content: content }];
    }
  }
  afterTreeInit($event: any){
    console.log($event);
    if($event["1"]){
      $event["1"].data.isActive=true
    }
  }
  pageIndexChange($event: any) {
    this.pager.pageIndex=$event;
    this.DirctoryService.getDictionary(this.pager.pageIndex,this.pager.pageSize,this.categoryId).subscribe((data:any)=>{
      this.dirctorData=data.items;
      this.pager.total=data.totalCount;
    })
  }//切换页码
  pageSizeChange($event: any){
    this.DirctoryService.getDictionary(this.pager.pageIndex,this.pager.pageSize,this.categoryId).subscribe((data:any)=>{
      this.dirctorData=data.items;
      this.pager.total=data.totalCount;
    })
  }//改变每页显示数量
}
