// app.component.ts
import { Component } from '@angular/core';
import { AppModule } from './app.module';
import { HeaderComponent } from './components/header/header.component';
import { TasksComponent } from './components/tasks/tasks.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:true
}) 

export class AppComponent {}
