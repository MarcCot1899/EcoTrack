export interface Residu {
  id: number;
  nom: string;
  tipus: 'Perillós' | 'Reciclable' | 'Especial';
  pes: number;
  data: string;
  estat: 'Pendent' | 'Processat';
}