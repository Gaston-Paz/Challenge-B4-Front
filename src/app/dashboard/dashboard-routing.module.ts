import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { DashboardComponent } from './dashboard.component';
import { ClienteComponent } from './cliente/cliente.component';
import { NuevoClienteComponent } from './nuevo-cliente/nuevo-cliente.component';

const routes: Routes = [
  {
    path: 'clientes',
    component: ClientesComponent
  },
  {
    path: 'cliente',
    component: ClienteComponent
  },
  {
    path: 'nuevo-cliente',
    component: NuevoClienteComponent
  },
  {
    path: 'actualizar-cliente',
    component: NuevoClienteComponent
  },
  {
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
