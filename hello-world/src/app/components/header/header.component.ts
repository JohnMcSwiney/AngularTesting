import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  title: string = 'Angular Task Tracker';
  
  constructor() {}

  ngOnInit(): void {  
  }
  toggleAddTask() {
    console.log('toggle')
  }
}
