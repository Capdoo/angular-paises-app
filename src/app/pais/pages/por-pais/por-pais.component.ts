import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = 'Hola Mundo';
  hayError: boolean = false;

  constructor(private PaisService:PaisService) { }

  buscar(){
    this.hayError = false;

    console.log(this.termino)
    this.PaisService.buscarPais(this.termino).subscribe(    //Tiene dos partes: next y error
      (resp)=>{
        console.log(resp);
      },
      (err)=>{
        console.log('Error');
        console.info(err);
        this.hayError = true;
      }
    );
  }

}
