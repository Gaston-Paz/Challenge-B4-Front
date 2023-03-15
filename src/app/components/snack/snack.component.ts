import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrls: ['./snack.component.css']
})
export class SnackComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data:any,
  public _snackBarRef: MatSnackBarRef<SnackComponent>) { }

  ngOnInit(): void {
  }

  Close(){
    this._snackBarRef.dismiss();
  }

}
