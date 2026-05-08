import { Injectable, signal, computed } from '@angular/core';
import { Residu } from '../models/residu';

@Injectable({ providedIn: 'root' })
export class ResidusService {
  private residus = signal<Residu[]>([
    { id: 1, nom: 'Oli mineral', tipus: 'Perillós', pes: 25, data: '2025-05-01', estat: 'Pendent' },
    { id: 2, nom: 'Cartró', tipus: 'Reciclable', pes: 10, data: '2025-05-03', estat: 'Processat' },
    { id: 3, nom: 'Bateries', tipus: 'Especial', pes: 5, data: '2025-05-07', estat: 'Pendent' },
  ]);

  tots = computed(() => this.residus());
  pendents = computed(() => this.residus().filter(r => r.estat === 'Pendent'));

  afegir(residu: Omit<Residu, 'id'>) {
    const nou = { ...residu, id: Date.now() };
    this.residus.update(r => [...r, nou]);
  }

  actualitzarEstat(id: number, estat: 'Pendent' | 'Processat') {
    this.residus.update(r =>
      r.map(res => res.id === id ? { ...res, estat } : res)
    );
  }

  eliminar(id: number) {
    this.residus.update(r => r.filter(res => res.id !== id));
  }
}