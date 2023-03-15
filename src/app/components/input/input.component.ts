import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const CUIT_REGEX = /^[0-9]+-[0-9]+-[0-9]$/;

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input('label')label:string = '';
  @Input('valor')valor:any;
  @Input('tabindex')tabindex:number = 0;
  @Input('placeHolder')placeHolder:string = '';
  @Input('type')type:string = '';
  @Input('requerido')requerido:boolean = false;
  @Input('readOnly')readOnly:boolean = false;
  @Input('maximo')maximo:number = 250;
  validaRequerido:boolean = false;
  validaMail:boolean = false;
  validaCuit:boolean = false;
  @Output() cambio = new EventEmitter<any>();
  @Output() valida = new EventEmitter<any>();
  msj:string = '-';

  constructor() { }

  ngOnInit(): void {
  }

  cambios(ev:any){           
    this.cambio.emit(ev.target.value);
    if(this.label === 'Cuit')this.valida.emit(this.validaCuit);
    if(this.label === 'E-mail')this.valida.emit(this.validaMail);
  }

  valido(ev:any){
    if(this.type === 'email') {
      this.validaMail = EMAIL_REGEX.test(ev.target.value);
      if(!this.validaMail) this.msj = `El formato del e-mail es incorrecto`;
    }else if(this.label === 'Cuit'){
      this.validaCuit = CUIT_REGEX.test(ev.target.value);
      if(!this.validaCuit) this.msj = `El formato del ${this.label} es incorrecto. XX-XXXXXXXX-X`;
    }

    this.validaRequerido = ev.target.value === "";       
    if(this.validaRequerido) this.msj = `${this.label} es obligatorio`
  }

}
