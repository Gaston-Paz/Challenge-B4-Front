import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteComponent } from './cliente/cliente.component';
import { NuevoClienteComponent } from './nuevo-cliente/nuevo-cliente.component';
import { ComponentsModule } from '../components/components.module';
import { DashboardComponent } from './dashboard.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    ClientesComponent,
    ClienteComponent,
    NuevoClienteComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatRadioModule,
    NgxSpinnerModule,
    MatSnackBarModule
  ]
})
export class DashboardModule { }
