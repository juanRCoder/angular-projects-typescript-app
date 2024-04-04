import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-configuration',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FormsModule],
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
})
export class ConfigurationComponent {
  operators = [
    { id: 1, operator: '+' },
    { id: 2, operator: '-' },
    { id: 3, operator: '*' },
    {id: 4, operator: '/'},
  ];
  currentOperator: string = '';

  ngOnInit() {
    this.currentOperator = '+';
  }

   enviarString() {
    localStorage.setItem('sharedString', this.currentOperator);
  }

}
