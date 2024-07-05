import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-grafico',
  standalone: true,
  imports: [],
  templateUrl: './grafico.component.html',
  // styleUrl: './grafico.component.scss'
})
export class GraficoComponent implements OnChanges {
  @Input() labelsOfIngresos?: string[];
  @Input() valuesOfIngresos?: number[];
  @Input() labelsOfGastos?: string[];
  @Input() valuesOfGastos?: number[];
  // @Input() sumIngresos?: number;
  private chart?: Chart | any;
  private chart2?: Chart | any;

  // Detecta cambios en las propiedades de entrada 'labels' o 'values'
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['labelsOfIngresos'] || changes['valuesOfIngresos'] || changes['labelsOfGastos'] || changes['valuesOfGastos']) {
      this.updateChart();
      this.updateChart2();
    }
  }
  private updateChart() {
    if (this.chart) {
      this.chart.destroy();
    }

    const ctx = document.getElementById('graficoIngresos') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: this.labelsOfIngresos,
        datasets: [
          {
            label: 'Ingresos',
            data: this.valuesOfIngresos,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
            ],
            hoverOffset: 2,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: 'bottom', // Coloca las etiquetas debajo del gráfico
          },
        },
      },
    });
  }
  private updateChart2() {
    if (this.chart2) {
      this.chart2.destroy();
    }

    const ctx = document.getElementById('graficoGastos') as HTMLCanvasElement;
    this.chart2 = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: this.labelsOfGastos,
        datasets: [
          {
            label: 'Gastos',
            data: this.valuesOfGastos,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
            ],
            hoverOffset: 2,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: 'bottom', // Coloca las etiquetas debajo del gráfico
          },
        },
      },
    });
  }
}
