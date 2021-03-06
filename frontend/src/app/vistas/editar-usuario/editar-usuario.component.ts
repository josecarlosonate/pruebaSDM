import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { UsuarioI } from "../../modelos/usuario.interface";
import { ApiService } from '../../servicios/api/api.service';
import { ResponseI } from '../../modelos/response.interface';
import { AlertasService } from "../../servicios/alertas/alertas.service";

import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Location } from '@angular/common';

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
  
  constructor(private activaterouter:ActivatedRoute, private router:Router, private api:ApiService,private _location: Location, private alertas:AlertasService) { }
  
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
        'update_at': (Date.now() / 1000)
      });
    })
  }

  postForm(form:UsuarioI){
    let id = form.id;
    this.api.putUsuario(form,id).subscribe(data =>{
      let respuesta:ResponseI = data;
      if(respuesta.Code == 'Ok'){
        this.alertas.showSuccess('Datos actualizados con exito','Ok');
      }else{
        this.alertas.showError(respuesta.Status, 'Error');
      }
    })
    
  }

  goBack(){
    this._location.back();
  }

}
