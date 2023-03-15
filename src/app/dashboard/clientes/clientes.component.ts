import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../interfaces/cliente.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { SpinnerService } from 'src/app/services/spinner.service';
import { HandlerErrorService } from '../../services/handler-error.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes:Cliente[] = [];
  columnas:string[] = ['nombre','apellido','nacimiento','cuit','domicilio','celular','email','edit'];

  constructor(private _serviceCliente: ClienteService, 
    private _router: Router,
    private _spinnerService: SpinnerService,
    private _serviceHandlerError:HandlerErrorService) { }

  ngOnInit(): void {
    this._serviceCliente.getClientes().subscribe(resp => {
      this.clientes = resp;
      this.clientes.forEach(c => {
        if(c.fechaNacimiento)c.fechaConvertida = new Date(c.fechaNacimiento).toISOString().slice(0, 10);  
      });
    },(error:HttpErrorResponse) => {
      console.log(error);
      this._serviceHandlerError.Error(error);
    });
  }

  editar(cliente:Cliente){
    this._serviceCliente.cliente = cliente;
    this._router.navigate(['actualizar-cliente']);
  }

}
