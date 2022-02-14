import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../servicios/api/api.service";
import { Router } from "@angular/router";
import { ListaUsuariosI } from "../../modelos/listaUsuarios.interface";

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  usuarios: ListaUsuariosI[] = [];
  constructor(private api:ApiService, private router:Router) { }
  
  ngOnInit(): void {
    this.api.getAllUsers().subscribe(data => {
      this.usuarios = data;
    })
  }

  editarUsuario(id: any){
    this.router.navigate(['editarUsuario',id]);
  }

  eliminarUsuario(id: any){
    this.api.deleteUser(id).subscribe(data => {
      location.reload();
    })
  }

  nuevoUsuario(){
    this.router.navigate(['nuevoUsuario']);
  }


}
