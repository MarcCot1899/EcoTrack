import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Residus } from '../../services/residus';
import { Residu } from '../../models/residu';

@Component({
  selector: 'app-formulari-residu',
  imports: [ReactiveFormsModule],
  templateUrl: './formulari-residu.html',
  styleUrl: './formulari-residu.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormulariResidu {
  private service = inject(Residus);
  private fb = inject(FormBuilder);

  form = this.fb.group({
    nom: ['', [Validators.required, Validators.minLength(2)]],
    tipus: ['Reciclable' as Residu['tipus'], Validators.required],
    pes: [null as number | null, [Validators.required, Validators.min(0.1)]],
    data: [new Date().toISOString().split('T')[0], Validators.required],
    estat: ['Pendent' as Residu['estat'], Validators.required],
  });

  enviar(): void {
    if (this.form.invalid) return;
    const v = this.form.getRawValue();
    this.service.afegir({
      nom: v.nom!,
      tipus: v.tipus!,
      pes: v.pes!,
      data: v.data!,
      estat: v.estat!,
    });
    this.form.reset({
      nom: '',
      tipus: 'Reciclable',
      pes: null,
      data: new Date().toISOString().split('T')[0],
      estat: 'Pendent',
    });
  }
}
