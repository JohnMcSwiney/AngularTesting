import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// following this tutorial: https://www.youtube.com/watch?v=3dHNOWTI7H8


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
