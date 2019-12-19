import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProyectoDetalleComponent } from './proyecto-detalle/proyecto-detalle.component';
import { MatFormFieldModule } from '@angular/material';

/*
const routes: Routes = [
  { path: 'proyectos', component: ProyectosComponent }
];
*/

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'proyecto/:id', component: ProyectoDetalleComponent },
  { path: 'proyectos', component: ProyectosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            MatFormFieldModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }