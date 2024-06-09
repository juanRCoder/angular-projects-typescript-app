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
    { name: 'Solv-Think', link: 'solvthink', icon: '../../assets/icons/solv-think.webp' },
    { name: 'Theme-Quizz', link: 'theme-quizz', icon: '../../assets/icons/theme-quizz.webp' },
    { name: 'To-do-List', link: 'to-do-list', icon: '../../assets/icons/to-do-list.webp' },
    { name: 'Translate-app', link: 'translate-app', icon: '../../assets/icons/translate-app.webp' },
  ];
  pages = [
    { name: '??', link: '??', icon: '../../assets/icons/solv-think.webp' },
  ];
}
