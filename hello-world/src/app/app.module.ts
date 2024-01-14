// app.module.ts
import { DoBootstrap, NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { ButtonComponent } from './components/button/button.component';
import { TaskItemComponent } from './components/task-item/task-item.component';

@NgModule({
  declarations: [
     
    HeaderComponent,
    TasksComponent,
    ButtonComponent,
    TaskItemComponent
  ],
  imports: [BrowserModule,FontAwesomeModule],
  exports:[HeaderComponent, TasksComponent, ButtonComponent, TaskItemComponent]
})
export class AppModule implements DoBootstrap{
  ngDoBootstrap(appRef: ApplicationRef): void {
    appRef.bootstrap(AppComponent);
  }
 }





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

