import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const rutasDeNavegacion: any[] = [
  {
    id:'Clientes',
    url:'/clientes'
  },
  {
    id:'Buscar Cliente',
    url:'/cliente'
  },
  {
    id:'Nuevo Cliente',
    url:'/nuevo-cliente'
  },
  {
    id:'Actualizar Cliente',
    url:'/actualizar-cliente'
  },
  {
    id:'Documentación',
    url:'https://documenter.getpostman.com/view/17368678/2s93JwP39n'
  }
];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  ruteo(ev:string){
    let { url } = rutasDeNavegacion.find(f => f.id === ev);    
    this._router.navigate([url]);
  }

}
