import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit{
  
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();  //Cuando la persona deja de escribir

  //Para cambiar el placeholder
  @Input() placeholder:string = "";

  //Observable especial
  //Objetivo: Emitirse luego de dejar de escribir
  debouncer: Subject<string> = new Subject();

  termino:string = "";

  //Se dispara una unica vez, cuando el componente es creado
  ngOnInit(): void {
    //Subscribe significa subscribirse a sus eventos
    this.debouncer
      .pipe(
        //Transformar la salida del debouncer
        debounceTime(300)//Cuantas milesimas esperar antes de imprimir el sgte valor
      )
      .subscribe(valor => {
        //console.log('debouncer:', valor);
        this.onDebounce.emit(valor); //Ya emitimos el valor hacia Output OnDebounce
      });
  }

  buscar(){
    console.log("En buscar");
    this.onEnter.emit(this.termino);
    console.log("Luego de emitir");

  }

  //No subscribimos al debouncer y aplicamos un siguiente valor
  //En este caso sera termino
  teclaPresionada(){
    this.debouncer.next(this.termino);
  }

}
