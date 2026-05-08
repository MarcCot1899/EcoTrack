import { Injectable, computed, signal } from '@angular/core';
import { Residu } from '../models/residu';

@Injectable({
  providedIn: 'root',
})
export class Residus {
  private _residus = signal<Residu[]>([
    { id: 1, nom: 'Bateries de liti', tipus: 'Perillós', pes: 12.5, data: '2026-05-01', estat: 'Pendent' },
    { id: 2, nom: 'Paper i cartró', tipus: 'Reciclable', pes: 45.0, data: '2026-05-03', estat: 'Processat' },
    { id: 3, nom: 'Residus mèdics', tipus: 'Especial', pes: 8.2, data: '2026-05-07', estat: 'Pendent' },
  ]);

  private nextId = signal(4);

  tots = computed(() => this._residus());
  pendents = computed(() => this._residus().filter(r => r.estat === 'Pendent'));

  afegir(residu: Omit<Residu, 'id'>): void {
    const id = this.nextId();
    this._residus.update(list => [...list, { ...residu, id }]);
    this.nextId.update(n => n + 1);
  }

  actualitzarEstat(id: number, estat: Residu['estat']): void {
    this._residus.update(list =>
      list.map(r => r.id === id ? { ...r, estat } : r)
    );
  }

  eliminar(id: number): void {
    this._residus.update(list => list.filter(r => r.id !== id));
  }
}
