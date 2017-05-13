import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './../../services/login.service';
import { FacultadesService } from './../../services/facultades.service';

@Component({
    moduleId: module.id,
    selector: 'publicar-convocatoria',
    templateUrl: 'publicar-convocatoria.component.html'
})

export class PublicarConvocatoriaComponent implements OnInit {

    datos_usuario = {};
    facultades = [];
    public editarCupos: boolean;
    constructor(
        private loginService: LoginService,
        private facultadesService: FacultadesService,
        private router: Router,

    ) {
        this.editarCupos = false;
        
    }

    ngOnInit() {
        this.datos_usuario = this.loginService.getDatosUsuario();
        this.facultades = this.facultadesService.getDatosFacultades();
        
       
    }
    //Array del tipo de Subsidios
    subsidios = [
        {
            "n_tiposubsidio": "Total",
            "t_porcentajesub": "100",
            "cupos": null
        },
        {
            "n_tiposubsidio": "Tipo A",
            "t_porcentajesub": "70",
            "cupos": null
        },
        {
            "n_tiposubsidio": "Tipo B",
            "t_porcentajesub": "40",
            "cupos": null
        }
    ];

    periodos = [
        { "n_periodo": "1" },
        { "n_periodo": "2" }
    ];

    estados = [
        { "n_estado": "Abierta" },
        { "n_estado": "Cancelada" },
        { "n_estado": "En validación" },
        { "n_estado": "Cerrada" }
    ];

    facultad = "";
    fechaInicio = "";
    fechaFin = "";

    regresar() {
        this.router.navigate(['/landing']);
    }

    enviardatos() {
        console.log("AQUI SE ENVIAN LOS DATOS PARA LA BD");
    }
    onChange(estado) {
        console.log(estado);
        if (estado === "1: Abierta") {         
            document.getElementById("cupos").removeAttribute("readonly");            
        }else{
             document.getElementById("cupos").setAttribute("readonly","readonly");
        }
    }
}