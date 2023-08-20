import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toKm',
})
export class ToKmPipe implements PipeTransform {
  transform(value: number | undefined, ...args: unknown[]): number | undefined {
    return !!value ? value * 1.60934 : undefined;
  }
}
