import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'; // se imporata esta clase http para poder hacer peticiones http
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'; // para que funcionen los formularios
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatRadioModule} from '@angular/material/radio';




//import {MatCardModule} from '@angular/material/card';


// COMPONENTS
import { NavComponent } from './pages/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { PersonasComponent } from './pages/personas/personas.component';
import { CitasComponent } from './pages/citas/citas.component';

//SERVICIOS


import { PersonasService} from './pages/personas/service/personas.service';
import { CitasService} from './pages/citas/service/citas.service'; // se importa el servicio


@NgModule({ declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        PersonasComponent,
        CitasComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule, // se inicializa el modulo http para poder hacer peticiones http
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatSliderModule,
        MatRadioModule], providers: [
        PersonasService, // se importa el servicio en providers debido a que no se puede inyectar en el componente
        CitasService,
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
export class AngularMaterialModule { }
export class MaterialModule { }


