import { Component, OnInit, Input } from '@angular/core';
import { Proyecto } from '../proyecto';

@Component({
  selector: 'app-proyecto-detalle',
  templateUrl: './proyecto-detalle.component.html',
  styleUrls: ['./proyecto-detalle.component.css']
})
export class ProyectoDetalleComponent implements OnInit {

  @Input() proyecto: Proyecto;

  constructor() { }

  ngOnInit() {
  }

}
