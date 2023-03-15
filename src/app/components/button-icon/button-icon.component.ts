import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.css']
})
export class ButtonIconComponent implements OnInit {

  @Input('icon')icon:string='';
  @Input('color')color:string='';
  @Input('disabled')disabled:boolean=false;
  @Output() clickButton = new EventEmitter<MouseEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  clickearon(ev:MouseEvent){
    this.clickButton.emit(ev);    
  }

}
