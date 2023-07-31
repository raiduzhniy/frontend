import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformAcceptTypes',
  standalone: true,
})
export class TransformAcceptTypesPipe implements PipeTransform {
  transform(value: string[]): string {
    return value.join(', ');
  }
}
