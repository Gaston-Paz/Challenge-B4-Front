import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { SpinnerService } from 'src/app/services/spinner.service';
import { HandlerErrorService } from '../../services/handler-error.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  type:string = 'number';
  label:string = 'ID';
  valor:string = 'ID';
  valorRadio:string = '1';
  valorBuscar:any = '';

  clientes: Cliente[] = [];
  columnas:string[] = ['nombre','apellido','nacimiento','cuit','domicilio','celular','email'];

  constructor(private _serviceCliente: ClienteService,
    private _spinnerService: SpinnerService,
    private _serviceHandlerError:HandlerErrorService) { }

  ngOnInit(): void {
  }

  InputCorrecto(ev:any){
    if(ev.value === '1'){
      this.type = 'number';
      this.label = 'ID';
    }else{
      this.type = 'text';
      this.label = 'Nombre';
    }
    this.valor = '';
    this.valorBuscar = '';
    
  }

  valorBusqueda(ev:any){
    if(this.valorRadio === '1'){
      this.valorBuscar = parseInt(ev);
    }else{
      this.valorBuscar = ev;
    }
    
  }

  clickButton(){
    this.clientes = [];
    if(this.valorRadio === '1'){
      this._serviceCliente.getClienteById(this.valorBuscar).subscribe(resp => {
        this.clientes.push(resp);
      },(error:HttpErrorResponse) => {
        console.log(error);
        this._serviceHandlerError.Error(error);
        
      });
    }else{
      this._serviceCliente.getClienteByNombre(this.valorBuscar).subscribe(resp => {
        this.clientes = resp;
      },(error:HttpErrorResponse) => {
        console.log(error);
        this._serviceHandlerError.Error(error);        
      });
    }
  }

}
