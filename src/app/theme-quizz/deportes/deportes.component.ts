import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { AnimeMangaComponent } from '../anime-manga/anime-manga.component';

@Component({
  selector: 'app-deportes',
  standalone: true,
  imports: [RouterLink, NgClass, AnimeMangaComponent],
  templateUrl: './deportes.component.html',
  styleUrl: './deportes.component.scss'
})
export class DeportesComponent {
  deportesApiUrl: string = 'https://raw.githubusercontent.com/juanRCoder/dataJSON-my-dataBase/main/Theme-Quizz/QZ_deportes.json';
}