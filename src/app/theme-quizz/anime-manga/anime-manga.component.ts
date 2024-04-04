import { HttpClient } from '@angular/common/http';
import { Component, Injectable, Input  } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-anime-manga',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './anime-manga.component.html',
  styleUrl: './anime-manga.component.scss',
})
export class AnimeMangaComponent {
  @Input() title: string = 'Anime/Manga';
  @Input() apiUrl: string = 'https://raw.githubusercontent.com/juanRCoder/dataJSON-my-dataBase/main/Theme-Quizz/QZ_animeManga.json';

  //VARIABLES DE LOGICA
  optionDifficult: string = '';
  questions: any;
  questionsViews: number[] = [];
  position: number = 0;
  answerCorrect: boolean = false;
  answerIncorrect1: boolean = false;
  answerIncorrect2: boolean = false;
  answerIncorrect3: boolean = false;


  //VARIABLES PARA RENDERIZAR
  question: string = '';
  correct_answer: string = '';
  incorrect_answers: string[] = [];
  corrects: number = 0;
  incorrects: number = 0;

  //SOLICITUD API Y OBTENCION DE DIFICULTAD POR LOCALSTORAGE
  constructor(private requestGet: HttpClient) {}

  ngOnInit(): void {
    this.optionDifficult = localStorage.getItem('difficult') || '';
    this.requestGet.get(this.apiUrl).subscribe((data) => {
      this.questions = data;
      this.renderQuestions();
    });
  }

  ////PREGUNTAS RANDOM FILTRADO POR DIFICULTAD
  renderQuestions() {
    if (this.questions.length > 0) {
      //filtrado de preguntas segun la dificultad
      const quizzies = this.questions.filter(
        (qz: any) => qz.difficulty === this.optionDifficult
      );
      
      //reinicio de repguntas vistas
      if (this.questionsViews.length === quizzies.length) {
        this.questionsViews = [];
      }

      let random: number = -1;
      // Seleccionar una pregunta aleatoria que no ha sido vista antes
      while (random === -1 || this.questionsViews.includes(random)) {
        random = Math.floor(Math.random() * quizzies.length);
      }

      this.questionsViews.push(random);

      setTimeout(() => {
        //variables para renderizar
        this.question = quizzies[random].question;
        this.correct_answer = quizzies[random].correct_answer;
        this.incorrect_answers = quizzies[random].incorrect_answers;
        this.position = Math.floor(Math.random() * 4);
        this.resetAnswerState();
      }, 600);
    } else {
      console.log('No se encontraron resultados');
    }
  }

  //SCORE DEL USUARIO
  score(value: boolean, pst: number) {
    if (value) {
      this.corrects += 1;
      this.answerCorrect = true;
    } else {
      this.incorrects += 1;

      if (pst === 1) {
        this.answerIncorrect1 = true;
      } else if (pst === 2) {
        this.answerIncorrect2 = true;
      } else if (pst === 3) {
        this.answerIncorrect3 = true;
      }
      this.answerCorrect = true;
    }
  }
  //RESET RESPONSE
  resetAnswerState() {
    this.answerCorrect = false;
    this.answerIncorrect1 = false;
    this.answerIncorrect2 = false;
    this.answerIncorrect3 = false;
  }
}
