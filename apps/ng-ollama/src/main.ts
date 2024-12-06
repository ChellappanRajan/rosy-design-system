import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));

// let animationSet = setInterval(()=>{
//     console.log(document.getAnimations().map((el)=>el?.effect.target.tagName === 'H1' ? debugger : ''))}
//     ,100);


   