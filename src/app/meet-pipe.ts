import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'meet',
})
export class MeetPipe implements PipeTransform {
  transform(value: String): String {
    if (!value) return '';

    const words = value.split(' ');
    const abbr = words.map((word) => word.charAt(0).toUpperCase());
    return abbr.join('.') + '';
  }
}
