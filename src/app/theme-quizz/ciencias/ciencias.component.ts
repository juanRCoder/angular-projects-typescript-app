import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { AnimeMangaComponent } from '../anime-manga/anime-manga.component';

@Component({
  selector: 'app-ciencias',
  standalone: true,
  imports: [RouterLink, NgClass, AnimeMangaComponent],
  templateUrl: './ciencias.component.html',
  styleUrl: './ciencias.component.scss',
})
export class CienciasComponent {
  cienciasApiUrl: string = 'https://raw.githubusercontent.com/juanRCoder/dataBase-juanRCoder/main/Theme-Quizz/QZ_scienceNature.json';
}
