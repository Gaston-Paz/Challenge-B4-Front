import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/interfaces/cliente.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource();

  //Inputs
  @Input('data')data:any[]=[];
  @Input('columns')columns:string[]=[];

  @Output() clickButton = new EventEmitter<Cliente>();

  constructor() {}

  ngOnInit(): void {  
    this.displayedColumns = this.columns;     
    this.dataSource.data = this.data;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  clickearon(element:Cliente){
    this.clickButton.emit(element);    
  }

}
