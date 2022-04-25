import { Component, Input, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { PorPaisComponent } from '../../pages/por-pais/por-pais.component';
import {Country} from '../../interfaces/pais-interface';


@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
})

//Como minicomponente
export class PaisTablaComponent{


  constructor() { }
  
  //Atrapar valores de otro componente
  //Los inpus se traen desde html con [nameImput]="propiedad de componente mayor"
  @Input() paises:Country[] = [];
  

}
