import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {

  }

  buscarPais(termino: string): Observable<Country[]>{
    
    const url = `${this.apiUrl}/name/${ termino }`;

    //Para que se ejecute tenemos que llamar al subscribe
    return this.http.get<Country[]>(url); //Colocar el tipado
  }

  buscarCapital(termino: string): Observable<Country[]>{
    
    const url = `${this.apiUrl}/capital/${ termino }`;

    //Para que se ejecute tenemos que llamar al subscribe
    return this.http.get<Country[]>(url); //Colocar el tipado
  }

}
