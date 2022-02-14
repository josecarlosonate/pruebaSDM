import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./vistas/dashboard/dashboard.component";
import {ListarUsuariosComponent} from "./vistas/listar-usuarios/listar-usuarios.component";
import { NuevoUsuarioComponent } from './vistas/nuevo-usuario/nuevo-usuario.component';
import { EditarUsuarioComponent } from "./vistas/editar-usuario/editar-usuario.component";

const routes: Routes = [
  {path:'', redirectTo:'dashboard', pathMatch:'full'},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'listarUsuarios', component:ListarUsuariosComponent},
  {path: 'nuevoUsuario', component:NuevoUsuarioComponent},
  {path: 'editarUsuario/:id', component: EditarUsuarioComponent}
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
  EditarUsuarioComponent]
