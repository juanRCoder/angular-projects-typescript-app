import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  difficults: { id: number; difficult: string }[] = [
    { id: 1, difficult: 'easy' },
    { id: 2, difficult: 'medium' },
    { id: 3, difficult: 'hard' },
  ];

  selectDifficult: string = '';

  //Directiva que establece el valor inicial de la propiedad en 'easy'
  ngOnInit() {
    this.selectDifficult = 'easy';
  }

  //Enviar el valor a localStorage
  sendDifficult() {
    localStorage.setItem('difficult', this.selectDifficult);
  }
}
