import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArrayImpuro',
  pure: false
})
export class FiltroArrayImpuroPipe extends Pipe{

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
