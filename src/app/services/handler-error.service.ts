import { Injectable } from '@angular/core';
import { SnackService } from './snack.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HandlerErrorService {

  constructor(private _snackService:SnackService) { }

  Error(error:HttpErrorResponse){
    let msj = '';
    const errores = error.error.errors;
    let keys = Object.keys(errores);

    keys.forEach(key => {
      errores[key].forEach((element: string) => {
        msj += element + '\n';
      });
    });    
    
    this._snackService.openSnackBar(msj,'error');
    
  }
}
