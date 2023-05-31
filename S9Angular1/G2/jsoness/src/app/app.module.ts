import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ActivePostsComponentComponent } from './active-posts-component/active-posts-component.component';
import { InactivePostsComponentComponent } from './inactive-posts-component/inactive-posts-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivePostsComponentComponent,
    InactivePostsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
