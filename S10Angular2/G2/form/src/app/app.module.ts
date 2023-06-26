import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //utilizzato per i Template Driven Forms
import { AppComponent } from './app.component';
import { SuperPoteriComponent } from './super-poteri/super-poteri.component';
import { ReactiveFormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    SuperPoteriComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
