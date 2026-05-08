import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LlistaResidus } from './components/llista-residus/llista-residus';

@Component({
  selector: 'app-root',
  imports: [LlistaResidus],
  template: `<app-llista-residus />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
