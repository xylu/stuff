import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppGameControllerComponent } from './app-game-controller/app-game-controller.component';
import { AppOddComponent } from './app-odd/app-odd.component';
import { AppEvenComponent } from './app-even/app-even.component';

@NgModule({
  declarations: [
    AppComponent,
    AppGameControllerComponent,
    AppOddComponent,
    AppEvenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
