import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Translate } from './translate-app.models';

@Injectable({
  providedIn: 'root'
})
export class TranslateAppService {

  private http = inject(HttpClient)

  
  private urlBase = 'https://api.mymemory.translated.net/get';

  //Llamar a la api dinamicamente para traducir mediante los parametros
  getResult(texto: string, idioma1: string, idioma2: string): Observable<Translate> {
    const url = `${this.urlBase}?q=${texto}&langpair=${idioma1}|${idioma2}`;
    return this.http.get<Translate>(url);
  }
}
