import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackComponent } from '../components/snack/snack.component';

@Injectable({
  providedIn: 'root'
})
export class SnackService {

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, clases:string) {
    this._snackBar.openFromComponent(SnackComponent, {
      panelClass:clases,
      data:{
        message:message
      }
    });

    
  }
}
