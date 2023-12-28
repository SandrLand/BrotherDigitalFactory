import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ruleToText'
})
export class RuleToTextPipe implements PipeTransform {

  transform(value: number): string {
    if (value === undefined) {
      return '';
    }
    switch (value) {
      case 0: return '常量';
      case 1: return '日期';
      case 2: return '流水号';
      default: return '';
    }
  }

}
