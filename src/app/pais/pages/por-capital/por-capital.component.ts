import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

import {Country} from '../../interfaces/pais-interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = 'Hola Mundo';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private PaisService:PaisService) { }

  buscar(termino: string){

    this.hayError = false;
    this.termino = termino;

    console.log(this.termino)
    this.PaisService.buscarCapital(this.termino).subscribe(    //Tiene dos partes: next y error
      (paises)=>{

        console.log(paises);
        //resp[0].languages[0].
        this.paises = paises;

      },
      (err)=>{
        console.log('Error');
        console.info(err);
        this.hayError = true;
        this.paises = [];
      }
    );
  }

  sugerencias(termino: string){
    this.hayError = false;
    //TODO: Crear sugerencias
  }


}
