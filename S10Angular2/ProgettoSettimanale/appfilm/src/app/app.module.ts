import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListafilmComponent } from './components/listafilm/listafilm.component';
import { ProfiloComponent } from './components/profilo/profilo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { Error404Component } from './components/error404/error404.component';
const rotte: Route[] = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'listafilm',
        component: ListafilmComponent
    },
    {
        path: 'profilo',
        component: ProfiloComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: '**',
        component: Error404Component
    }
]
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ListafilmComponent,
        ProfiloComponent,
        NavbarComponent,
        LoginComponent,
        Error404Component
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(rotte)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
