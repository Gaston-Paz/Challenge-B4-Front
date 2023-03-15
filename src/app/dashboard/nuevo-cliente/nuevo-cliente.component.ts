import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs/internal/observable/timer';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { ClienteService } from '../../services/cliente.service';
import { Router } from '@angular/router';
import { SpinnerService } from 'src/app/services/spinner.service';
import { HandlerErrorService } from '../../services/handler-error.service';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css']
})
export class NuevoClienteComponent implements OnInit {

  cliente: Cliente = {
    apellidos:'',
    celular:'',
    cuit:'',
    email:'',
    nombres:''
  }

  noValidaEmail:boolean = false;
  noValidaCuit:boolean = false;
  titulo:string = 'Nuevo Cliente';
  textButton:string = 'Guardar Cliente';

  constructor(private _serviceCliente: ClienteService, 
    private _router:Router,private _spinnerService: SpinnerService,
    private _serviceHandlerError:HandlerErrorService) { }

  ngOnInit(): void {
    let ruta = this._router.url;
    if(ruta.includes('actualizar')){
      if(this._serviceCliente.cliente.id === undefined){
        this._router.navigate(['']);
      }else{
        this.cliente = this._serviceCliente.cliente;
        this.titulo = 'Actualizar Cliente';
        this.textButton = this.titulo;        
      }
    }

    
  }

  FormValid(){    
    return !(this.cliente.apellidos !== '' && this.cliente.nombres !== '' && this.cliente.celular !== '' 
          && this.cliente.cuit !== '' &&this.cliente.email !== '');
  }

  clickButton(){
    if(this.titulo.includes('Nuevo')){

      this._serviceCliente.postCliente(this.cliente).subscribe(resp => {
        const espera = timer(1500);
        espera.subscribe(() => {
          this._router.navigate(['/clientes']);
        });
      },(error:HttpErrorResponse) => {
        console.log(error);
        this._serviceHandlerError.Error(error);
      });
    }else{
      this._serviceCliente.putCliente(this.cliente).subscribe(resp => {
        const espera = timer(1500);
        espera.subscribe(() => {
          this._router.navigate(['/clientes']);
        });
      },(error:HttpErrorResponse) => {
        console.log(error);
        this._serviceHandlerError.Error(error);
      });
    }
    
  }
}
