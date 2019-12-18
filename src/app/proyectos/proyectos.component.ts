import { Component, OnInit } from '@angular/core';
import { proyectos } from '../mocks-provider';
import { Proyecto } from '../proyecto';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos = proyectos;

  proyectoSeleccionado: Proyecto;

  constructor() { }

  ngOnInit() {
  }

  onSelect(unProyecto: Proyecto): void {
    this.proyectoSeleccionado = unProyecto;
  }
}
