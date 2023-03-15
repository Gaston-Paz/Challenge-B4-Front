import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input('text') text:string='';
  @Input('color') color:string='';
  @Input('clase') clase:string='';
  @Input('habilita') habilita:boolean=false;

  @Output() clickButton = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  clickearon(){
    this.clickButton.emit(this.text);    
  }

}
