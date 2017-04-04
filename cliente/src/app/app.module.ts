import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
/**Componentes */
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { NavComponent } from './components/nav/nav.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { HistoricoSolicitudesComponent } from './components/historico-solicitudes/historico-solicitudes.component';
import { RegistrarSolicitudComponent } from './components/registrar-solicitud/registrar-solicitud.component';
import { NuevasSolicitudesComponent } from './components/nuevas-solicitudes/nuevas-solicitudes.component';
import { PublicarConvocatoriaComponent } from './components/publicar-convocatoria/publicar-convocatoria.component';
import { ConsultarConvocatoriaComponent } from './components/consultar-convocatoria/consultar-convocatoria.component';
import { TiqueteraComponent } from './components/tiquetera/tiquetera.component';
import { InscribirConvocatoriaComponent } from "app/components/inscribir-convocatoria/inscribir-convocatoria.component";
import { ConfirmacionSolicitudComponent } from "app/components/confirmacion-solicitud/confirmacion-solicitud.component";
/**Servicios */
import { LoginEstudianteService } from './services/login-estudiante.service';
import { RegistrarSolicitudService } from './services/registrar-solicitud.service';
import { HistoricoSolicitudesService } from './services/historico-solicitudes.service';
/**Importamos la directiva que valida el login*/
import {SinEspacios} from './components/login/validacion.directive';
import { routes } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    NavComponent,
    InformacionComponent,
    HistoricoSolicitudesComponent,
    RegistrarSolicitudComponent,
    NuevasSolicitudesComponent,
    PublicarConvocatoriaComponent,
    ConsultarConvocatoriaComponent,
    TiqueteraComponent,
    SinEspacios,
    InscribirConvocatoriaComponent,
    ConfirmacionSolicitudComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    LoginEstudianteService,
    RegistrarSolicitudService,
    HistoricoSolicitudesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
