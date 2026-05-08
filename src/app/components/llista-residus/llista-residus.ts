import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Residus } from '../../services/residus';
import { FormulariResidu } from '../formulari-residu/formulari-residu';

@Component({
  selector: 'app-llista-residus',
  imports: [FormulariResidu],
  templateUrl: './llista-residus.html',
  styleUrl: './llista-residus.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LlistaResidus {
  service = inject(Residus);
  nomesOberts = signal(false);
  llista = computed(() => this.nomesOberts() ? this.service.pendents() : this.service.tots());
}
