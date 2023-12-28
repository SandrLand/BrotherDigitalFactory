import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DirctoryService {

  constructor(private http: HttpClient) { }
  DictionaryType = '/Dictionary';
  private createPaginationParams(currentPage: number, itemsPerPage: number): HttpParams {
    return new HttpParams()
      .set('pageNumber', currentPage.toString())
      .set('pageSize', itemsPerPage.toString());
  }// 创建分页参数
  getDictionaryType(currentPage: number, itemsPerPage: number) {
    const GetPagedCategories = '/GetPagedCategories';
    const params = this.createPaginationParams(currentPage, itemsPerPage);
    return this.http.get(environment.apiUrl+this.DictionaryType+GetPagedCategories, { params });
  }// 从后端获取字典类别列表
  postDictionaryType(data:any) {
    const CreateCategory = '/CreateCategory';
    return this.http.post(environment.apiUrl+this.DictionaryType+CreateCategory,data);
  }// 向后端发送新增字典类别
  deleteDictionaryType(id: string) {
    const DeleteCategory = '/DeleteCategory';
    const params = new HttpParams().set('id', id);
    return this.http.delete(environment.apiUrl+this.DictionaryType + DeleteCategory ,{params});
  }// 删除字典类别
  putDictionaryType(id: any, data: {}) {
    const updateCategory = '/updateCategory';
    const params = new HttpParams().set('id', id);
    return this.http.put(`${environment.apiUrl}${this.DictionaryType}${updateCategory}`, data,{params});
  }// 修改字典类别





  Dictionary='/Dictionary';
  getDictionary(pageIndex:any,pageSize:any,categoryId: any,) {
    const params = {
      page: pageIndex.toString(),
      pageSize: pageSize.toString(),
      categoryId: categoryId.toString()
    };
    const GetPagedDictionaryEntries = '/GetPagedDictionaryEntries';
    return this.http.get(environment.apiUrl + this.Dictionary+GetPagedDictionaryEntries, { params });
  }// 从后端获取字典列表

  getDictionaryNumber(categoryId: string){
    const params = {
      categoryId: categoryId.toString()
    };
    return this.http.get(environment.apiUrl + this.Dictionary, { params });
  }
  postDictionary(data:any) {
    const CreateDictionaryEntry = '/CreateDictionaryEntry';
    return this.http.post(environment.apiUrl+this.Dictionary+CreateDictionaryEntry,data);
  }// 向后端发送新增字典
  putDictionary(id: any,data:any) {
    const UpdateDictionaryEntry = '/UpdateDictionaryEntry';
    const params = new HttpParams().set('id', id);
    return this.http.put(`${environment.apiUrl}${this.Dictionary}${UpdateDictionaryEntry}`,data,{params});
  }// 向后端发送编辑字典
  deleteDictionary(id:any) {
    const DeleteDictionaryEntryRange='/DeleteDictionaryEntryRange';
    const options = {
      body: id
    };
    return this.http.delete(environment.apiUrl+this.Dictionary+DeleteDictionaryEntryRange,options);
  }// 向后端发送删除字典
}
