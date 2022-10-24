import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusIcon'
})
export class StatusIconPipe implements PipeTransform {

  transform(value: string | null | undefined, ...args: unknown[]): string {
    if (!value) {
      return 'users';
    }
    if (value.search(/prospect/i) === 0) {
      return 'online';
    }
    if (value.search(/purchased/i) === 0) {
      return 'money';
    }
    if (value.search(/initial/i) === 0) {
      return 'users';
    }
    return 'users';
  }

}
