import { Route } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { HistoricoSolicitudesComponent } from './components/historico-solicitudes/historico-solicitudes.component';
import { RegistrarSolicitudComponent } from './components/registrar-solicitud/registrar-solicitud.component';
import { NuevasSolicitudesComponent } from './components/nuevas-solicitudes/nuevas-solicitudes.component';
import { TiqueteraComponent } from './components/tiquetera/tiquetera.component';
import { ConsultarConvocatoriaComponent } from "app/components/consultar-convocatoria/consultar-convocatoria.component";
import { PublicarConvocatoriaComponent } from "app/components/publicar-convocatoria/publicar-convocatoria.component";
import {InscribirConvocatoriaComponent} from "app/components/inscribir-convocatoria/inscribir-convocatoria.component";
import { ConfirmacionSolicitudComponent } from "app/components/confirmacion-solicitud/confirmacion-solicitud.component";
import { RegistroEstudiantesComponent } from "app/components/registro-estudiantes/registro-estudiantes.component"
import { VerHistoricoSolicitudesComponent } from "app/components/ver-historico-solicitudes/ver-historico-solicitudes.component";
import { VerSolicitudesRadicadasComponent } from "app/components/ver-solicitudes-radicadas/ver-solicitudes-radicadas.component";
import { RegistrarTareaComponent } from "app/components/registrar-tarea/registrar-tarea.component";

export const routes: Route[] = [
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'landing', component: LandingComponent },
    { path: 'historico-solicitudes', component: HistoricoSolicitudesComponent },
    { path: 'registrar-solicitud', component: RegistrarSolicitudComponent },
    { path: 'nuevas-solicitudes', component: NuevasSolicitudesComponent },
    { path: 'publicar-convocatoria', component: PublicarConvocatoriaComponent },
    { path: 'consultar-convocatoria', component:ConsultarConvocatoriaComponent },
    { path: 'tiquetera', component: TiqueteraComponent },
    { path: 'inscribir-convocatoria', component: InscribirConvocatoriaComponent },
    { path: 'confirmacion-solicitud', component: ConfirmacionSolicitudComponent },
    { path: 'registro-estudiantes', component: RegistroEstudiantesComponent},
    { path: 'ver-historico-solicitudes', component:VerHistoricoSolicitudesComponent},
    { path: 'ver-solicitudes-radicadas', component:VerSolicitudesRadicadasComponent},
    { path: 'registrar-tarea', component:RegistrarTareaComponent},
];