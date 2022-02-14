import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { UsuarioI } from "../../modelos/usuario.interface";
import { ApiService } from '../../servicios/api/api.service';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  datosUsuario:UsuarioI | undefined;
  state:string | undefined;
  editarForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    document: new FormControl(''),
    state: new FormControl(''),
    create_at: new FormControl(''),
    update_at: new FormControl('')
  });
  
  constructor(private activaterouter:ActivatedRoute, private router:Router, private api:ApiService) { }
  
  ngOnInit(): void {
    let usuarioid = this.activaterouter.snapshot.paramMap.get('id');
    
    this.api.getSingleUsuario(usuarioid).subscribe( data =>{
      this.datosUsuario = data;
      this.state = data.state;
      this.editarForm.setValue({
        'id': usuarioid,
        'name': this.datosUsuario.name,
        'document': this.datosUsuario.document,
        'state': this.datosUsuario.state,
        'create_at': this.datosUsuario.create_at,
        'update_at': Date.now()
      });
    })
  }

  postForm(form:UsuarioI){
    console.log(form);
  }

}
