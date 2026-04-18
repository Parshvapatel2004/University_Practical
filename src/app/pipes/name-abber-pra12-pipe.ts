import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameAbberPra12',
})
export class NameAbberPra12Pipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    const words = value.split(' ');
    const abbr = words.map((word) => word.charAt(0).toUpperCase());
    return abbr.join('.') + '.';
  }
}
