import { Injectable } from '@angular/core';
import { ListaLibrosI } from "../../modelos/listaLibros.interface";
import { ListaUsuariosI } from "../../modelos/listaUsuarios.interface";
import { UsuarioI } from "../../modelos/usuario.interface";
import { ResponseI } from "../../modelos/response.interface";
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

  /* Actualizar usuario */
  putUsuario(form:UsuarioI,id:string):Observable<ResponseI>{
    let direccion = this.url + "user/edit/"+id;
    return this.http.put<ResponseI>(direccion,form);
  }

  /* Eliminar usuario (inactivar cambiar estado) */
  deleteUser(id:string):Observable<ResponseI>{
    let direccion = this.url + "user/delet/" + id;
    return this.http.delete<ResponseI>(direccion);
  }

  /* Insertar nuevo usuario */
  postUser(form:UsuarioI):Observable<ResponseI>{
    let direccion = this.url + "user/add/";
    return this.http.post<ResponseI>(direccion,form);
  }

  /* Obtener todos los libros */
  getAllBooks():Observable<ListaLibrosI[]>{
    let direccion = this.url + "book";
    return this.http.get<ListaLibrosI[]>(direccion);
  }

  /* Eliminar libro */
  deleteBook(id:string):Observable<ResponseI>{
    let direccion = this.url + "book/delet/" + id;
    return this.http.delete<ResponseI>(direccion);
  }

  /* Insertar libro */
  postBook(form:UsuarioI):Observable<ResponseI>{
    let direccion = this.url + "book/add";
    return this.http.post<ResponseI>(direccion,form);
  }

}
