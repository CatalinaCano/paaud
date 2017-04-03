import { Component, OnInit } from '@angular/core';

import { LoginEstudianteService } from './../../services/login-estudiante.service';
import { RegistrarSolicitudService } from './../../services/registrar-solicitud.service';

@Component({
    moduleId: module.id,
    selector: 'app-registrar-solicitud',
    templateUrl: 'registrar-solicitud.component.html'
})

export class RegistrarSolicitudComponent implements OnInit {

    datos_usuario = {};

    constructor(
        private loginEstudianteService: LoginEstudianteService,
        private registrarSolicitudService: RegistrarSolicitudService
    ) { }

    ngOnInit() {
        this.datos_usuario = this.loginEstudianteService.getDatosUsuario();
        console.log(this.datos_usuario);
     }

     error = "";

     ingresos_familiares = {
         "k_camposolicitud": 1
     }

     sostiene_su_hogar = {
         "k_camposolicitud": 2,
         "i_booleano": 'f'
     }

     sostenimiento_economico = {
         "k_camposolicitud": 3,
         "i_booleano": 'f'
     }

     vive_fuera = {
         "k_camposolicitud": 4,
         "i_booleano": 'f'
     }

     sostenimiento_personas = {
         "k_camposolicitud": 5,
         "i_booleano": 'f'
     }

     vive_en_arriendo = {
         "k_camposolicitud": 6,
         "i_booleano": 'f'
     }

     desplazamiento_forzado = {
         "k_camposolicitud": 7,
         "n_valorcampo": "ninguna"
     }

     origen = {
         "k_camposolicitud": 8,
         "i_booleano": 'f'
     }

     zona_riesgo = {
         "k_camposolicitud": 9,
         "q_numerico": 1 
     }

     discapacidad_fisica = {
         "k_camposolicitud": 10,
         "i_booleano": 'f'
     }

     patologia_medica = {
         "k_camposolicitud": 11,
         "i_booleano": 'f'
     }

     enviarSolicitud(usuario, codigo){
         let solicitud = {
            "usuario": usuario,
            "password": String(codigo),
            "codigo": String(codigo)
         }
         console.log(solicitud);
         this.registrarSolicitudService
            .postSolicitud(solicitud)
            .then(data => {
                console.log(data);
            })
            .catch( error => {
                this.error = error;
                console.log("Error: "+error)
            })
     }

}