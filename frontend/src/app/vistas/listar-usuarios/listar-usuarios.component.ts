import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../servicios/api/api.service";
import { Router } from "@angular/router";
import { ListaUsuariosI } from "../../modelos/listaUsuarios.interface";
import { ResponseI } from '../../modelos/response.interface';
import { AlertasService } from "../../servicios/alertas/alertas.service";

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  usuarios: ListaUsuariosI[] = [];
  constructor(private api:ApiService, private router:Router, private alertas:AlertasService) { }
  
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
      let respuesta:ResponseI = data;
      if(respuesta.Code == 'Ok'){
        this.alertas.showSuccess('Eliminado con exito','Ok');
        setTimeout(function(){
          location.reload();
        },1000);        
      }else{
        this.alertas.showError(respuesta.Status, 'Error');
      }
    })
  }

  nuevoUsuario(){
    this.router.navigate(['nuevoUsuario']);
  }


}
