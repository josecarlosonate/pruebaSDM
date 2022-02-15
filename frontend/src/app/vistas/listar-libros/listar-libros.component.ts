import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../servicios/api/api.service";
import { Router } from "@angular/router";
import { ListaLibrosI } from "../../modelos/listaLibros.interface";
import { ResponseI } from '../../modelos/response.interface';
import { AlertasService } from "../../servicios/alertas/alertas.service";

@Component({
  selector: 'app-listar-libros',
  templateUrl: './listar-libros.component.html',
  styleUrls: ['./listar-libros.component.css']
})
export class ListarLibrosComponent implements OnInit {
  
  libros: ListaLibrosI[] = [];
  constructor(private api:ApiService, private router:Router, private alertas:AlertasService) { }

  ngOnInit(): void {
    this.api.getAllBooks().subscribe(data => {
      this.libros = data;
    })
  }

  nuevoLibro(){
    this.router.navigate(['nuevoLibro']);
  }

  editarLibro(id:any){
    this.router.navigate(['editarLibro',id]);
  }

  eliminarLibro(id:any){
    this.api.deleteBook(id).subscribe(data => {
      let respuesta:ResponseI = data;
      if(respuesta.Code == 'Ok'){
        this.alertas.showSuccess('Eliminado con exito','Ok');
        setTimeout(function(){
          location.reload();
        },1000);        
      }else{
        this.alertas.showError(respuesta.Status, 'Error');
      }
    });
  }

}
