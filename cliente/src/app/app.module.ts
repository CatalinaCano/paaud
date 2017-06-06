import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CustomFormsModule } from 'ng2-validation';

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
import { VerHistoricoSolicitudesComponent } from "app/components/ver-historico-solicitudes/ver-historico-solicitudes.component";
import { RegistrarTareaComponent } from "app/components/registrar-tarea/registrar-tarea.component";
import { AsignarTareaComponent } from "app/components/asignar-tarea/asignar-tarea.component";
import { ModificarTareaComponent } from "app/components/modificar-tarea/modificar-tarea.component";
import { EliminarTareaComponent } from "app/components/eliminar-tarea/eliminar-tarea.component";
import { VerSolicitudesRadicadasComponent } from "app/components/ver-solicitudes-radicadas/ver-solicitudes-radicadas.component";
import { VerTareasAsignadasComponent } from "app/components/ver-tareas-asignadas/ver-tareas-asignadas.component";
import { ModificarConvocatoriaComponent } from "app/components/modificar-convocatoria/modificar-convocatoria.component";

/**Servicios */
import { LoginService } from './services/login.service';
import { SiginService } from './services/sigin.service';
import { FacultadesService } from './services/facultades.service';
import { ConvocatoriasService } from "app/services/convocatorias.service";
import { SolicitudesService } from './services/solicitudes.service';
import { HistoricoSolicitudesService } from './services/historico-solicitudes.service';

/**Importamos la directiva que valida el login*/
import { SinEspacios } from "./directives/validacionSinEspacios.directive";
import { routes } from './app.routes';



import { ModalModule, ModalComponent } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap'






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
    VerHistoricoSolicitudesComponent,
    VerSolicitudesRadicadasComponent,
    RegistrarTareaComponent,
    AsignarTareaComponent,
    ModificarTareaComponent,
    EliminarTareaComponent,
    VerTareasAsignadasComponent,
    ModificarConvocatoriaComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    CustomFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    LoginService,
    SiginService,
    FacultadesService,
    ConvocatoriasService,
    SolicitudesService,
    HistoricoSolicitudesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
