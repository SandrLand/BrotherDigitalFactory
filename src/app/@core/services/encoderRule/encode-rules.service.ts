import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EncodeRulesService {
  data = '/CodeRule';
  constructor(private http: HttpClient) { }
  private createPaginationParams(currentPage: number, itemsPerPage: number): HttpParams {
    return new HttpParams()
      .set('pageNumber', currentPage.toString())
      .set('pageSize', itemsPerPage.toString());
  }// 创建分页参数
  getEncodingRules(currentPage: number, itemsPerPage: number) {
    const GetAllCodeRules = '/GetPagedCodeRules';
    const params = this.createPaginationParams(currentPage, itemsPerPage);
    return this.http.get<any>(`${environment.apiUrl}${this.data}${GetAllCodeRules}`, { params });
  }// 从后端获取编码规则
  getEncodingRulesTemp(){
    const GetAllCodeRules = '/GetAllCodeRules';
    return this.http.get(environment.apiUrl+ this.data+GetAllCodeRules);
  }// 从后端获取编码规则
  PostEncodingRules(EncodingRules:{}) {
    const CreateCodeRule = '/CreateCodeRule';
    return this.http.post(environment.apiUrl+ this.data+CreateCodeRule, EncodingRules);
  }// 编码规则提交到后端
  DeleteEncodingRules(id: string) {
    const HardDeleteCodeRule = '/HardDeleteCodeRule';
    return this.http.delete(environment.apiUrl+ this.data + HardDeleteCodeRule, { params: { id } });
  }// 删除编码规则
  getEncodingRulesById(id: string) {
    const getCodeRulebyid = '/GetCodeRuleById';
    return this.http.get(environment.apiUrl+this.data+getCodeRulebyid + '/' + id);
  }// 根据id获取编码规则
  putEncodingRules(id: any, EncodingRules: {}) {
    const UpdateCodeRule = '/UpdateCodeRule';
    const params = new HttpParams().set('id', id);
    return this.http.put(`${environment.apiUrl}${this.data}${UpdateCodeRule}`, EncodingRules,{params});
  }// 编码规则修改提交到后端
  getEncodingRulesByType(type: string,currentPage: number, itemsPerPage: number) {
    const GetPagedCodeRules = '/GetPagedCodeRules'
    const params = new HttpParams()
    .set('pageNumber', currentPage.toString())
    .set('pageSize', itemsPerPage.toString())
    .set('ruleName', type)
    // 发送 GET 请求
    return this.http.get<any[]>(environment.apiUrl+ this.data+GetPagedCodeRules, { params });
  }// 根据类型获取编码规则
  DisableCodeRule(id:any){
    const disableCodeRule = 'DisableCodeRules'
    return this.http.post(`${environment.apiUrl}${this.data}/${disableCodeRule}`,id,{responseType: 'text'});
  }
  EnableCodeRules(id:any){
    const enableCodeRule = 'EnableCodeRules'
    return this.http.post(`${environment.apiUrl}${this.data}/${enableCodeRule}`,id,{responseType: 'text'});
  }
}
