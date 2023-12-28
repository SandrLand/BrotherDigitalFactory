
export interface PostEncodeType {
  typeName: string;
  type: string;
  separator: string;
  enabled: boolean;
  itemsLength: number;
  items: PostEncodeTypeItem[];
}
 export interface PostEncodeTypeItem {
  rule: number;
  value: string;
  length: number;
  init: number;
}
export interface GetEncodeType {
  id:string;
  type: string;
  separator: string;
  enabled: boolean;
  categoryId: string|null;
  showType: string;
  currentValue: number;
  isDeleted: boolean;
  rowVersion: string;
  items: GetEncodeTypeItem[];
}
export interface GetEncodeTypeItem {
  id:string;
  rule: number;
  value: string;
  sequenceId:string
}
export interface PutEncodeType {
  typeName: string,
  type: string,
  separator: string,
  itemsLength: number,
  enabled: boolean,
  items: PutEncodeTypeItem[];
}
export interface PutEncodeTypeItem {
  id:number;
  rule: number;
  value: string;
  length: number;
  init: number;
}

