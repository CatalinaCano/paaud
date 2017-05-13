import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormsModule } from '@angular/forms';

import { LoginService } from './../../services/login.service';
import { RegistrarSolicitudService } from './../../services/registrar-solicitud.service';
import { CustomFormsModule } from 'ng2-validation'


@Component({
    moduleId: module.id,
    selector: 'app-registrar-solicitud',
    templateUrl: 'registrar-solicitud.component.html'
})

export class RegistrarSolicitudComponent implements OnInit {

    datos_usuario = {};

    constructor(
        private loginService: LoginService,
        private registrarSolicitudService: RegistrarSolicitudService,
        private router: Router
    ) { }

    ngOnInit() {
        this.datos_usuario = this.loginService.getDatosUsuario();
        console.log(this.datos_usuario);
     }

    volver(){
        this.router.navigate(['/landing']);
    }

     error = "";
     valor_ultima_solicitud = null;

     ingresos_familiares = {
         "k_camposolicitud": 1,
         "q_numerico": null,
         "url": 'http://localhost:8000/post_camponumerico/'
     }

     sostiene_su_hogar = {
         "k_camposolicitud": 2,
         "i_booleano": 'f',
         "url": 'http://localhost:8000/post_campobooleano/'
     }

     sostenimiento_economico = {
         "k_camposolicitud": 3,
         "i_booleano": 'f',
         "url": 'http://localhost:8000/post_campobooleano/'
     }

     vive_fuera = {
         "k_camposolicitud": 4,
         "i_booleano": 'f',
         "url": 'http://localhost:8000/post_campobooleano/'
     }

     sostenimiento_personas = {
         "k_camposolicitud": 5,
         "i_booleano": 'f',
         "url": 'http://localhost:8000/post_campobooleano/'
     }

     vive_en_arriendo = {
         "k_camposolicitud": 6,
         "i_booleano": 'f',
         "url": 'http://localhost:8000/post_campobooleano/'
     }

     desplazamiento_forzado = {
         "k_camposolicitud": 7,
         "n_valorcampo": "ninguna",
         "url": 'http://localhost:8000/post_campostring/'
     }

     origen = {
         "k_camposolicitud": 8,
         "i_booleano": 'f',
         "url": 'http://localhost:8000/post_campobooleano/'
     }

     zona_riesgo = {
         "k_camposolicitud": 9,
         "q_numerico": 1,
         "url": 'http://localhost:8000/post_camponumerico/' 
     }

     discapacidad_fisica = {
         "k_camposolicitud": 10,
         "i_booleano": 'f',
         "url": 'http://localhost:8000/post_campobooleano/'
     }

     patologia_medica = {
         "k_camposolicitud": 11,
         "i_booleano": 'f',
         "url": 'http://localhost:8000/post_campobooleano/'
     }

     //envia la solicitud
     enviarSolicitud(usuario, codigo){
         let solicitud = {
            "usuario": usuario,
            "password": String(codigo),
            "codigo": String(codigo)
         }

         this.registrarSolicitudService
            .postSolicitud(solicitud)
            .then(data => {
                //obtiene la ultima solicitud
                this.registrarSolicitudService
                    .getUltimaSolicitud(usuario,String(codigo))
                    .then(data => {
                        
                        this.valor_ultima_solicitud = this.registrarSolicitudService.getValorUltimaSolicitud();
                        console.log(this.valor_ultima_solicitud.max);
                        //ingresos_familiares
                        this.registrarSolicitudService
                            .postSolicitudCampo(usuario,String(codigo),String(this.valor_ultima_solicitud.max),String(this.ingresos_familiares.k_camposolicitud),String(this.ingresos_familiares.q_numerico),String(this.ingresos_familiares.url))
                            .then(data => {
                                console.log("ingresado ingresos_familiares")
                            })
                            .catch( error => {
                                this.error = error;
                                console.log("Error ingresos familiares: "+error)
                            })

                        //sostiene_su_hogar
                        this.registrarSolicitudService
                            .postSolicitudCampo(usuario,String(codigo),String(this.valor_ultima_solicitud.max),String(this.sostiene_su_hogar.k_camposolicitud),String(this.sostiene_su_hogar.i_booleano),String(this.sostiene_su_hogar.url))
                            .then(data => {
                                console.log("ingresado sostiene_su_hogar")
                            })
                            .catch( error => {
                                this.error = error;
                                console.log("Error sostiene_su_hogar: "+error)
                            })

                        //sostenimiento_economico
                        this.registrarSolicitudService
                            .postSolicitudCampo(usuario,String(codigo),String(this.valor_ultima_solicitud.max),String(this.sostenimiento_economico.k_camposolicitud),String(this.sostenimiento_economico.i_booleano),String(this.sostenimiento_economico.url))
                            .then(data => {
                                console.log("ingresado sostenimiento_economico")
                            })
                            .catch( error => {
                                this.error = error;
                                console.log("Error sostenimiento_economico: "+error)
                            })

                        //vive_fuera
                        this.registrarSolicitudService
                            .postSolicitudCampo(usuario,String(codigo),String(this.valor_ultima_solicitud.max),String(this.vive_fuera.k_camposolicitud),String(this.vive_fuera.i_booleano),String(this.vive_fuera.url))
                            .then(data => {
                                console.log("ingresado vive_fuera")
                            })
                            .catch( error => {
                                this.error = error;
                                console.log("Error vive_fuera: "+error)
                            })

                        //sostenimiento_personas
                        this.registrarSolicitudService
                            .postSolicitudCampo(usuario,String(codigo),String(this.valor_ultima_solicitud.max),String(this.sostenimiento_personas.k_camposolicitud),String(this.sostenimiento_personas.i_booleano),String(this.sostenimiento_personas.url))
                            .then(data => {
                                console.log("ingresado sostenimiento_personas")
                            })
                            .catch( error => {
                                this.error = error;
                                console.log("Error sostenimiento_personas: "+error)
                            })

                        //vive_en_arriendo
                        this.registrarSolicitudService
                            .postSolicitudCampo(usuario,String(codigo),String(this.valor_ultima_solicitud.max),String(this.vive_en_arriendo.k_camposolicitud),String(this.vive_en_arriendo.i_booleano),String(this.vive_en_arriendo.url))
                            .then(data => {
                                console.log("ingresado vive_en_arriendo")
                            })
                            .catch( error => {
                                this.error = error;
                                console.log("Error vive_en_arriendo: "+error)
                            })

                        //desplazamiento_forzado
                        this.registrarSolicitudService
                            .postSolicitudCampo(usuario,String(codigo),String(this.valor_ultima_solicitud.max),String(this.desplazamiento_forzado.k_camposolicitud),String(this.desplazamiento_forzado.n_valorcampo),String(this.desplazamiento_forzado.url))
                            .then(data => {
                                console.log("ingresado desplazamiento_forzado")
                            })
                            .catch( error => {
                                this.error = error;
                                console.log("Error desplazamiento_forzado: "+error)
                            })

                        //origen
                        this.registrarSolicitudService
                            .postSolicitudCampo(usuario,String(codigo),String(this.valor_ultima_solicitud.max),String(this.origen.k_camposolicitud),String(this.origen.i_booleano),String(this.origen.url))
                            .then(data => {
                                console.log("ingresado origen")
                            })
                            .catch( error => {
                                this.error = error;
                                console.log("Error origen: "+error)
                            })

                        //zona_riesgo
                        this.registrarSolicitudService
                            .postSolicitudCampo(usuario,String(codigo),String(this.valor_ultima_solicitud.max),String(this.zona_riesgo.k_camposolicitud),String(this.zona_riesgo.q_numerico),String(this.zona_riesgo.url))
                            .then(data => {
                                console.log("ingresado zona_riesgo")
                            })
                            .catch( error => {
                                this.error = error;
                                console.log("Error zona_riesgo: "+error)
                            })

                        //discapacidad_fisica
                        this.registrarSolicitudService
                            .postSolicitudCampo(usuario,String(codigo),String(this.valor_ultima_solicitud.max),String(this.discapacidad_fisica.k_camposolicitud),String(this.discapacidad_fisica.i_booleano),String(this.discapacidad_fisica.url))
                            .then(data => {
                                console.log("ingresado discapacidad_fisica")
                            })
                            .catch( error => {
                                this.error = error;
                                console.log("Error discapacidad_fisica: "+error)
                            })

                        //patologia_medica
                        this.registrarSolicitudService
                            .postSolicitudCampo(usuario,String(codigo),String(this.valor_ultima_solicitud.max),String(this.patologia_medica.k_camposolicitud),String(this.patologia_medica.i_booleano),String(this.patologia_medica.url))
                            .then(data => {
                                console.log("ingresado patologia_medica")
                            })
                            .catch( error => {
                                this.error = error;
                                console.log("Error patologia_medica: "+error)
                            })
                        
                            this.router.navigate(['/confirmacion-solicitud']);

                    })
                    .catch( error => {
                        this.error = error;
                        console.log("Error obteniendo ultima solicitud: "+error)
                    })

            })
            .catch( error => {
                this.error = error;
                console.log("Error en crear solicitud: "+error)
            })
     }

}