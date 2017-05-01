import { Route } from '@angular/router';
import { LoginComponent } from "app/components/login/login.component";
import { LandingComponent } from "app/components/landing/landing.component";
import { HistoricoSolicitudesComponent } from "app/components/historico-solicitudes/historico-solicitudes.component";
import { RegistrarSolicitudComponent } from "app/components/registrar-solicitud/registrar-solicitud.component";
import { NuevasSolicitudesComponent } from "app/components/nuevas-solicitudes/nuevas-solicitudes.component";
import { PublicarConvocatoriaComponent } from "app/components/publicar-convocatoria/publicar-convocatoria.component";
import { ConsultarConvocatoriaComponent } from "app/components/consultar-convocatoria/consultar-convocatoria.component";
import { TiqueteraComponent } from "app/components/tiquetera/tiquetera.component";
import { InscribirConvocatoriaComponent } from "app/components/inscribir-convocatoria/inscribir-convocatoria.component";
import { ConfirmacionSolicitudComponent } from "app/components/confirmacion-solicitud/confirmacion-solicitud.component";
import { RegistroEstudiantesComponent } from "app/components/registro-estudiantes/registro-estudiantes.component";
import { VerHistoricoSolicitudesComponent } from "app/components/ver-historico-solicitudes/ver-historico-solicitudes.component";
import { VerSolicitudesRadicadasComponent } from "app/components/ver-solicitudes-radicadas/ver-solicitudes-radicadas.component";
import { RegistrarTareaComponent } from "app/components/registrar-tarea/registrar-tarea.component";
import { AsignarTareaComponent } from "app/components/asignar-tarea/asignar-tarea.component";
import { ModificarTareaComponent } from "app/components/modificar-tarea/modificar-tarea.component";
import { EliminarTareaComponent } from "app/components/eliminar-tarea/eliminar-tarea.component";
import { VerTareasAsignadasComponent } from "app/components/ver-tareas-asignadas/ver-tareas-asignadas.component";




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
    { path: 'asignar-tarea', component:AsignarTareaComponent},
    { path: 'modificar-tarea', component:ModificarTareaComponent},
    { path: 'eliminar-tarea',component:EliminarTareaComponent},
    { path: 'ver-tareas-asignadas',component:VerTareasAsignadasComponent}
];