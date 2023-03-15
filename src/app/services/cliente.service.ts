import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../interfaces/cliente.interface';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  cliente:Cliente = {
    apellidos:'',
    celular:'',
    cuit:'',
    email:'',
    nombres:''
  };

  constructor(private httpClient: HttpClient) { }

  getClientes():Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(environment.url + "/api/Cliente")
  }

  postCliente(cliente:Cliente):Observable<Cliente> {
    return this.httpClient.post<Cliente>(environment.url + "/api/Cliente", cliente)
  }

  putCliente(cliente:Cliente):Observable<Cliente> {
    return this.httpClient.put<Cliente>(environment.url + "/api/Cliente", cliente)
  }

  getClienteById(id:number):Observable<Cliente> {
    return this.httpClient.get<Cliente>(environment.url + "/api/Cliente/" + id)
  }

  getClienteByNombre(nombre:string):Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(environment.url + "/api/Cliente/nombre/" + nombre)
  }

}
