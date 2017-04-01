import { Route } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { HistoricoSolicitudesComponent } from './components/historico-solicitudes/historico-solicitudes.component';
import { RegistrarSolicitudComponent } from './components/registrar-solicitud/registrar-solicitud.component';
import { NuevasSolicitudesComponent } from './components/nuevas-solicitudes/nuevas-solicitudes.component';
import { PublicarConvocatoriaComponent } from './components/publicar-convocatoria/publicar-convocatoria.component';

export const routes: Route[] = [
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'landing', component: LandingComponent },
    { path: 'historico-solicitudes', component: HistoricoSolicitudesComponent },
    { path: 'registrar-solicitud', component: RegistrarSolicitudComponent },
    { path: 'nuevas-solicitudes', component: NuevasSolicitudesComponent },
    { path: 'publicar-convocatoria', component: PublicarConvocatoriaComponent }

];