import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

//servicios
import { ConvocatoriasService } from "app/services/convocatorias.service";
import { SolicitudesService } from 'app/services/solicitudes.service';


@Component({
    moduleId: module.id,
    selector: 'app-registrar-solicitud',
    templateUrl: 'registrar-solicitud.component.html'
})

export class RegistrarSolicitudComponent implements OnInit {

    error = '';
    convocatorias = [];
    datos_usuario = {};
    activar_formulario : boolean = false;

    datos_solicitud = {
        "k_convocatoria" : null,
        "datos": []
    };

    constructor(
        private router: Router,
        private convocatoriasService : ConvocatoriasService,
        private solicitudesService : SolicitudesService
        ) { }

    ngOnInit() {
        this.getConvocatorias();
        this.datos_usuario = JSON.parse(sessionStorage.getItem('datos_usuario'));
     }

    //trae los datos de las convocatorias
    getConvocatorias() :void {
            this.convocatoriasService.getConvocatoriasAbiertas()
                .subscribe(res => {
                        this.convocatorias = res;
                    }, err => {
                        this.error = err._body;
                    });
    }

    //función para ingresar al formulario de una convocatoria
    registrarse(convocatoria: number):void{
        this.error = '';
        this.solicitudesService.verifySolicitud(convocatoria)
            .subscribe(res => {
                        if(res.respuesta){
                            this.datos_solicitud.k_convocatoria = convocatoria;
                            this.activar_formulario = true;
                        } else {
                            this.error = 'Usted ya tiene una solicitud pendiente para esta convocatoria';
                        }
                    }, err => {
                        this.error = err._body;
                    });
    }

    //función para registrar una solicitud
    registrarSolicitud():void {
        this.error = ''
        this.datos_solicitud.datos = [];
        //llenamos la variable datos con todos los campo solicitud
        this.datos_solicitud.datos.push(this.ingresos_familiares,this.sostiene_su_hogar,this.sostenimiento_economico,this.vive_fuera,
            this.sostenimiento_personas,this.vive_en_arriendo,this.desplazamiento_forzado,this.origen,this.zona_riesgo,
            this.discapacidad_fisica,this.patologia_medica);
        this.solicitudesService.postSolicitud(this.datos_solicitud)
            .subscribe(res => {
                        alert("Solicitud registrada");
                        this.activar_formulario = false;
                    }, err => {
                        this.error = err._body;
                    });

    }

    ingresos_familiares = {
         "k_camposolicitud": 1,
         "valor": null,
         "n_soporte": "",
         "numerico": true,
         "booleano": false,
         "caracteres": false
     }

     sostiene_su_hogar = {
         "k_camposolicitud": 2,
         "valor": 'F',
         "n_soporte": "n/a",
         "numerico": false,
         "booleano": true,
         "caracteres": false
     }

     sostenimiento_economico = {
         "k_camposolicitud": 3,
         "valor": 'F',
         "n_soporte": "n/a",
         "numerico": false,
         "booleano": true,
         "caracteres": false
     }

     vive_fuera = {
         "k_camposolicitud": 4,
         "valor": 'F',
         "n_soporte": "n/a",
         "numerico": false,
         "booleano": true,
         "caracteres": false
     }

     sostenimiento_personas = {
         "k_camposolicitud": 5,
         "valor": 'F',
         "n_soporte": "n/a",
         "numerico": false,
         "booleano": true,
         "caracteres": false
     }

     vive_en_arriendo = {
         "k_camposolicitud": 6,
         "valor": 'F',
         "n_soporte": "n/a",
         "numerico": false,
         "booleano": true,
         "caracteres": false
     }

     desplazamiento_forzado = {
         "k_camposolicitud": 7,
         "valor": 'ninguna',
         "n_soporte": "n/a",
         "numerico": false,
         "booleano": false,
         "caracteres": true
     }

     origen = {
         "k_camposolicitud": 8,
         "valor": 'F',
         "n_soporte": "n/a",
         "numerico": false,
         "booleano": true,
         "caracteres": false
     }

     zona_riesgo = {
         "k_camposolicitud": 9,
         "valor": 1,
         "n_soporte": "",
         "numerico": true,
         "booleano": false,
         "caracteres": false
     }

     discapacidad_fisica = {
         "k_camposolicitud": 10,
         "valor": 'F',
         "n_soporte": "n/a",
         "numerico": false,
         "booleano": true,
         "caracteres": false
     }

     patologia_medica = {
         "k_camposolicitud": 11,
         "valor": 'F',
         "n_soporte": "n/a",
         "numerico": false,
         "booleano": true,
         "caracteres": false
     }
    
    volver(){
        this.activar_formulario = false;
    }

}