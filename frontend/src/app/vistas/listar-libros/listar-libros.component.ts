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
    this.router.navigate(['nuevoUsuario']);
  }

  editarLibro(id:any){
    this.router.navigate(['nuevoUsuario']);
  }

  eliminarLibro(id:any){
    this.router.navigate(['nuevoUsuario']);
  }

}
