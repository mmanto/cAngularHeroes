import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ProyectoDetalleComponent }  from './proyecto-detalle/proyecto-detalle.component';
import { ProyectosComponent }      from './proyectos/proyectos.component';
import { MessagesComponent }    from './messages/messages.component';

import { AppRoutingModule }     from './app-routing.module';

import { MatSnackBarModule } from "@angular/material";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatSnackBarModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ProyectosComponent,
    ProyectoDetalleComponent,
    MessagesComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
/**
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FormsModule } from '@angular/forms';
import { ProyectoDetalleComponent } from './proyecto-detalle/proyecto-detalle.component';
import { MessagesComponent } from './messages/messages.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSnackBarModule } from "@angular/material";
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ProyectosComponent,
    ProyectoDetalleComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
*/