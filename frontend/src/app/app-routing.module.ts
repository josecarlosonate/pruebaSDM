import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./vistas/dashboard/dashboard.component";
import {ListarUsuariosComponent} from "./vistas/listar-usuarios/listar-usuarios.component";
import { NuevoUsuarioComponent } from './vistas/nuevo-usuario/nuevo-usuario.component';
import { EditarUsuarioComponent } from "./vistas/editar-usuario/editar-usuario.component";
import { ListarLibrosComponent } from "./vistas/listar-libros/listar-libros.component";
import { ListarReservasComponent } from "./vistas/listar-reservas/listar-reservas.component";

const routes: Routes = [
  {path:'', redirectTo:'dashboard', pathMatch:'full'},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'listarUsuarios', component:ListarUsuariosComponent},
  {path: 'nuevoUsuario', component:NuevoUsuarioComponent},
  {path: 'editarUsuario/:id', component: EditarUsuarioComponent},
  {path: 'listarLibros', component:ListarLibrosComponent},
  {path: 'listarReservas', component:ListarReservasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  DashboardComponent,
  NuevoUsuarioComponent,
  ListarUsuariosComponent,
  EditarUsuarioComponent,
  ListarLibrosComponent,
  ListarReservasComponent]
