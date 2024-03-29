import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent implements OnInit{
  @Input() text: string = 'Default';
  @Input() color: string ='black';
  @Output() btnClick = new EventEmitter();
  
  constructor() {}

  ngOnInit(): void {  
  }

  onClick() {
    this.btnClick.emit();
  }

}
