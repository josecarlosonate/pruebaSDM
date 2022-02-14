import { Injectable } from '@angular/core';
import { ListaUsuariosI } from "../../modelos/listaUsuarios.interface";
import { UsuarioI } from "../../modelos/usuario.interface";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  url:string = "http://localhost:3000/api/";

  constructor(private http:HttpClient) { }

  /* Obtener todos los usuarios */
  getAllUsers():Observable<ListaUsuariosI[]>{
    let direccion = this.url + "user";
    return this.http.get<ListaUsuariosI[]>(direccion);
  }

  /* Obtener un usuario */
  getSingleUsuario(id: string | null):Observable<UsuarioI>{
    let direccion = this.url + "user/"+id;
    return this.http.get<UsuarioI>(direccion);
  }

}
