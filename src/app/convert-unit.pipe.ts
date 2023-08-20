import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertUnit',
})
export class ConvertUnitPipe implements PipeTransform {
  transform(value: number | undefined, targetUnit: string): number | undefined {
    if (!value) return undefined;

    switch (targetUnit) {
      case 'km':
        return value * 1.60934;
      case 'm':
        return value * 1.60934 * 1000;
      case 'cm':
        return value * 1.60934 * 1000 * 100;
      default:
        return value;
    }
  }
}
