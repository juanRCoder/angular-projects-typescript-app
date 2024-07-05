import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormArray,
} from '@angular/forms';
import { GraficoComponent } from './grafico/grafico.component';

@Component({
  selector: 'app-calculo-financiero',
  standalone: true,
  imports: [ReactiveFormsModule, GraficoComponent],
  templateUrl: './calculo-financiero.component.html',
  styleUrl: './calculo-financiero.component.scss',
})
export class CalculoFinancieroComponent {
  private fb = inject(FormBuilder);
  labelsIngresos?: string[];
  valuesIngresos?: number[];

  labelsGastos?: string[];
  valuesGastos?: number[];

  showChart?: boolean = false;

  formulario: FormGroup = this.fb.group({
    mensual: [0],
    ingresos: this.fb.array([]),
    insumoDiario: [0],
    gastos: this.fb.array([]),
  });

  ingresos(): FormArray {
    return this.formulario.get('ingresos') as FormArray;
  }
  gastos(): FormArray {
    return this.formulario.get('gastos') as FormArray;
  }
  

  addIngreso() {
    const addIngreso = this.fb.group({
      newIngreso: '',
      newValor: 0,
    });
    this.ingresos().push(addIngreso);
  }
  addGasto() {
    const addGasto = this.fb.group({
      newGasto: '',
      newValor: 0,
    });
    this.gastos().push(addGasto);
  }

  onSubmit() {
    // INGRESOS
    const ingresosArray = this.formulario.get('ingresos') as FormArray;

    let labelsOfIngresos: string[] = [];
    let valuesOfIngresos: number[] = [];
    let sumValuesOfIngresos: number = 0;

    // ITERAR SOBRE LOS VALORES DEL ARRAY DE INGRESOS
    ingresosArray.controls.forEach((ingresoGroup) => {
      const newLabels = ingresoGroup.get('newIngreso');
      const newValues = ingresoGroup.get('newValor');

      sumValuesOfIngresos += newValues?.value;
      labelsOfIngresos.push(newLabels?.value);
      valuesOfIngresos.push(newValues?.value);
    });
    valuesOfIngresos.push(this.formulario.get('mensual')?.value);
    labelsOfIngresos.push('mensual');
    this.labelsIngresos = labelsOfIngresos;
    this.valuesIngresos = valuesOfIngresos;
    console.log(labelsOfIngresos);

    // GASTOS
    const gastosArray = this.formulario.get('gastos') as FormArray;

    let labelsOGastos: string[] = [];
    let valuesOfGasto: number[] = [];
    let sumValuesOfGasto: number = 0;

    // ITERAR SOBRE LOS VALORES DEL ARRAY DE GASTOS
    gastosArray.controls.forEach((gastoGroup) => {
      const newLabels = gastoGroup.get('newGasto');
      const newValues = gastoGroup.get('newValor');

      sumValuesOfGasto += newValues?.value;
      labelsOGastos.push(newLabels?.value);
      valuesOfGasto.push(newValues?.value);
    });

    valuesOfGasto.push(this.formulario.get('insumoDiario')?.value);
    labelsOGastos.push('insumoDiario');
    this.labelsGastos = labelsOGastos;
    this.valuesGastos = valuesOfGasto;
    console.log(labelsOfIngresos);

    this.showChart = true;
  }

  removeIngreso(i: number) {
    this.ingresos().removeAt(i);
    this.onSubmit();
  }
  removeGasto(i: number) {
    this.gastos().removeAt(i);
    this.onSubmit();
  }
}
