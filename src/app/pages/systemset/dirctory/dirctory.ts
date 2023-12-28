export interface CascaderItem {
  label: string;
  value: number | string;
  isLeaf?: boolean;
  children?: CascaderItem[];
  disabled?: boolean;
  icon?: string;
}
export interface PostDictionaryType {
  parentCategoryId:number;
  name:string;
  description:string;
}
export interface PutDictionaryType {
  parentCategoryId:string;
  name:string;
  description:string;
}
export interface PostDictionary {
  categoryId:string;
  entryValue:string;
  description:string;
  entryName:string;
}
export interface PutDictionary {
  categoryId:string;
  entryValue:string;
  description:string;
  entryName:string;
}

