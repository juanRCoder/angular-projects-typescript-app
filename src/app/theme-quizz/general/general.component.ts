import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { AnimeMangaComponent } from '../anime-manga/anime-manga.component';

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [RouterLink, NgClass, AnimeMangaComponent],
  templateUrl: './general.component.html',
  styleUrl: './general.component.scss'
})
export class GeneralComponent {
  generalApiUrl: string = 'https://raw.githubusercontent.com/juanRCoder/dataJSON-my-dataBase/main/Theme-Quizz/QZ_general.json';
}