import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';

import { FormGroup, FormControl, Validators } from "@angular/forms";

import { UsuarioI } from "../../modelos/usuario.interface";
import { ApiService } from '../../servicios/api/api.service';
import { ResponseI } from '../../modelos/response.interface';
import { AlertasService } from "../../servicios/alertas/alertas.service";

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {

  nuevoForm = new FormGroup({
    name: new FormControl(''),
    document: new FormControl(''),
    state: new FormControl(''),
    create_at: new FormControl(''),
    update_at: new FormControl('')
  });

  constructor(private _location: Location, private alertas:AlertasService, private router:Router, private api:ApiService) { }

  ngOnInit(): void {
    this.nuevoForm.patchValue({
      'create_at': (Date.now() / 1000),
      'update_at': (Date.now() / 1000)
    });
  }
  
  goBack(){
    this.router.navigate(['listarUsuarios']);
  }

  postForm(form:UsuarioI){
    this.api.postUser(form).subscribe(data => {
      let respuesta:ResponseI = data;
      if(respuesta.Code == 'Ok'){
        this.alertas.showSuccess('Usuario registrado con exito','Ok');
        this.router.navigate(['listarUsuarios']);
      }else{
        this.alertas.showError(respuesta.Status, 'Error');
      }
    });
  }

}
