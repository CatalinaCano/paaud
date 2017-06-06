//angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//servicios
import { SolicitudesService } from "app/services/solicitudes.service";

@Component({
    moduleId: module.id,
    selector: 'ver-solicitudes-radicadas',
    templateUrl: 'ver-solicitudes-radicadas.component.html'
})

export class VerSolicitudesRadicadasComponent implements OnInit {

    error = '';
    solicitudes = [];
    ver_solicitud = false;
    solicitud_campo = [];
    solicitud_seleccionada = {};

    constructor(
        private solicitudesService: SolicitudesService
    ) { }

    ngOnInit() {
        this.getDatosIniciales();
     }

    //trae los datos de las facultades
    getDatosIniciales() :void {
            this.solicitudesService.getSolicitudes()
                .subscribe(res => {
                        this.solicitudes = res;
                        console.log(this.solicitudes);
                    }, err => {
                        this.error = err._body;
                    });
    }

    getSolicitudCampoSolicitud(solicitud:number) : void {
        this.solicitudesService.get_solicitudCampoSolicitud(solicitud)
                .subscribe(res => {
                        this.solicitud_campo = res;
                        console.log(this.solicitud_campo);
                    }, err => {
                        this.error = err._body;
                    });
    }

    verSolicitud(solicitud:Object,id:number): void {
        this.ver_solicitud = true;
        this.solicitud_seleccionada = solicitud;
        this.getSolicitudCampoSolicitud(id);
    }

    actualizarSolicitud(solicitud:number, estado: string) : void {
        let valores = {
            "k_solicitud" : solicitud,
            "i_estadosolicitud" : estado
        };
        this.solicitudesService.updateSolicitud(valores)
                .subscribe(res => {
                            if(res.respuesta){
                                this.getDatosIniciales();
                                this.solicitud_seleccionada = {};
                                this.ver_solicitud = false;
                                alert('Solicitud actualizada');
                            }
                        }, err => {
                            this.error = err._body;
                        });
    }

    cancelarValidacion() : void{
        this.solicitud_seleccionada = {};
        this.ver_solicitud = false;
    }
}