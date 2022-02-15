import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";


// Rutas
import { AppRoutingModule, routingComponents } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './plantillas/header/header.component';
import { FooterComponent } from './plantillas/footer/footer.component';

//
import { ApiService } from "./servicios/api/api.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { ListarLibrosComponent } from './vistas/listar-libros/listar-libros.component';
import { ListarReservasComponent } from './vistas/listar-reservas/listar-reservas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    ListarLibrosComponent,
    ListarReservasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [ ApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
