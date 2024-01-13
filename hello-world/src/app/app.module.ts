// app.module.ts
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { ButtonComponent } from './components/button/button.component';
import { TaskItemComponent } from './components/task-item/task-item.component';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent,
    TasksComponent,
    ButtonComponent,
    TaskItemComponent
  ],
  imports: [BrowserModule,FontAwesomeModule],
  bootstrap: [AppComponent]
})
export class AppModule { }





// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { HttpClientModule } from '@angular/common/http';

// import { HeaderComponent } from './components/header/header.component';
// import { ButtonComponent } from './components/button/button.component';
// import { TasksComponent } from './components/tasks/tasks.component';
// import { TaskItemComponent } from './components/task-item/task-item.component';

// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     HeaderComponent,
//     ButtonComponent,
//     TasksComponent,
//     TaskItemComponent,
//   ],
//   imports: [
//     BrowserModule,
//     FontAwesomeModule,
//     HttpClientModule,
//   ],
//   exports: [HeaderComponent, TasksComponent],
//   bootstrap: [AppComponent]
// })
// export class AppModule {}

