import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mini-apps',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './mini-apps.component.html',
  styleUrl: './mini-apps.component.scss',
})
export class MiniAppsComponent {
  apps = [
    { name: 'Solv-Think', link: 'solvthink'},
    { name: 'Translate-app', link: 'translate-app',},
    { name: 'calculo-financiero', link: 'calculo-financiero'}
  ];
}
