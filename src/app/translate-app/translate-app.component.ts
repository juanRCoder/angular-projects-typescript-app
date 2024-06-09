import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateAppService } from './translate-app.service';
import { Translate } from './translate-app.models';

@Component({
  selector: 'app-translate-app',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './translate-app.component.html',
  styleUrl: './translate-app.component.scss',
})
export class TranslateAppComponent {
  //Idiomas actualmente seleccionados en cada bloque
  lng1?: string;
  lng2?: string;

  //Optimizacion para inicializar cada idioma por bloque
  idiomas = {
    block1: {es: '', fr: '', en: ''},
    block2: {es: '', fr: '', en: ''}
  }
  sendIdioma1?: string;
  sendIdioma2?: string;

  //Verificar en que bloque y que idioma esta haciendo click
  public seleccionado(str: string, n: number) {
    if (n === 1) {
      this.lng1 = str;
      this.toggle(str, n);
    } else if (n === 2) {
      this.lng2 = str;
      this.toggle(str, n);
    }
  }

  //Metodo para iluminar el idioma escogido segund el bloque 
  private toggle(str: string, n: number) {
    if (n === 1) {
      
      this.idiomas.block1.en = this.idiomas.block1.es = this.idiomas.block1.fr = '';

      if (str === 'es' && this.lng2 !== 'es') {
        this.idiomas.block1.es = '#4D5562'; 
        this.sendIdioma1 = 'es';
      }
      if (str === 'en' && this.lng2 !== 'en') {
        this.idiomas.block1.en = '#4D5562';
        this.sendIdioma1 = 'en';
      }
      if (str === 'fr' && this.lng2 !== 'fr') {
        this.idiomas.block1.fr = '#4D5562';
        this.sendIdioma1 = 'fr';
      }

    } else if (n === 2) {
      
      this.idiomas.block2.en = this.idiomas.block2.es = this.idiomas.block2.fr = '';
        
      if (str === 'es' && this.lng1 !== 'es') {
        this.idiomas.block2.es = '#4D5562';
        this.sendIdioma2 = 'es';
      }
      if (str === 'en' && this.lng1 !== 'en') {
        this.idiomas.block2.en = '#4D5562';
        this.sendIdioma2 = 'en';
      }
      if (str === 'fr' && this.lng1 !== 'fr') {
        this.idiomas.block2.fr = '#4D5562';
        this.sendIdioma2 = 'fr';
      }
    }
  }

  // Inicializacion de formulario reactivo y servicio http
  formulario!: FormGroup;
  inputText?: string;
  voiceText?: string;
  voiceText2?: string;
  outputText?: string;
  constructor(private formBuilder: FormBuilder, private _miServicio: TranslateAppService){
    this.formulario = this.formBuilder.group({
      description: ['',[Validators.required]]
    })
  }

  msgError: string = 'Selecciona uno de los lenguajes';
  statusError: boolean = false;
  submit(event: Event) {
    if (this.lng1 == undefined || this.lng2 == undefined) {
      setTimeout(() => {
        this.statusError = false
      }, 1500);
      this.statusError = true
    }
    event.preventDefault();
    this.inputText = this.formulario.value.description;
    this._miServicio
    .getResult(this.inputText || '', this.sendIdioma1 || '', this.sendIdioma2 || '')
    .subscribe((data: Translate) => {
      console.log(`Entrada: ${data.matches[0].segment}`);
      console.log(`Salida: ${data.matches[0].translation}`);
      this.outputText = data.matches[0].translation;
      this.voiceText2 = this.outputText;
    })
  }

  // Cambiar el orden de lenguaje segun el bloque
  public changeLanguage() {
    [this.lng1, this.lng2] = [this.lng2, this.lng1];
    [this.voiceText, this.voiceText2] = [this.outputText, this.inputText];
    this.toggle(this.lng1 || '', 1);
    this.toggle(this.lng2 || '', 2);
  
  
    this.formulario.patchValue({
      description: this.outputText
    });
    [this.outputText, this.inputText] = [this.inputText, this.outputText];
  }

  cantidadCaracteres: number = 0;
  lengthCharacters(event: Event){
    const caracteres = event.target as HTMLInputElement;
    this.voiceText = caracteres.value
    
    if (this.cantidadCaracteres >= 300) {
      caracteres.value = caracteres.value.substring(0, 300);
    }
    this.cantidadCaracteres = (caracteres.value).length;
  }

  // Copia del texto mediante el clipboard del navigator
  messageCopy?: string;
  showMessage?: boolean;

  copyText(str: string){
    try {
      navigator.clipboard.writeText(str)
        .then(() => {
          this.messageCopy = 'Copied to clipboard!'
          setTimeout(() => {
            this.showMessage = false;
            this.messageCopy = ''
          }, 1500);
          this.showMessage = true;
          console.log(str || '');
        })

        .catch(e => console.log('Error al copiar', e))
    }catch(e){
      console.error('Error al intentar copiar!', e)
    }
  }

  // Sintetizar voz del texto
  voice(str: string){
    //objeto que convierte el parametro listo para inicar el habla
    const speech = new SpeechSynthesisUtterance(str);
    //iniciar el habla
    window.speechSynthesis.speak(speech);
  }
}