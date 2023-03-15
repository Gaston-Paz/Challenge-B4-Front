import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InputComponent } from './input/input.component';
import {MatIconModule} from '@angular/material/icon';
import { ButtonIconComponent } from './button-icon/button-icon.component';
import { SnackComponent } from './snack/snack.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    TableComponent,
    InputComponent,
    ButtonIconComponent,
    SnackComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule
  ],
  exports:[
    HeaderComponent,
    TableComponent,
    InputComponent,
    ButtonComponent,
    ButtonIconComponent,
    SnackComponent
  ]
})
export class ComponentsModule { }
