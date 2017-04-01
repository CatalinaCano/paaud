import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { NavComponent } from './components/nav/nav.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { HistoricoSolicitudesComponent } from './components/historico-solicitudes/historico-solicitudes.component';
import { RegistrarSolicitudComponent } from './components/registrar-solicitud/registrar-solicitud.component';
import { NuevasSolicitudesComponent } from './components/nuevas-solicitudes/nuevas-solicitudes.component';
import { PublicarConvocatoriaComponent } from './components/publicar-convocatoria/publicar-convocatoria.component';
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
    PublicarConvocatoriaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
