import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LoginService } from './../../services/login.service';
import { FacultadesService } from './../../services/facultades.service';
import { CustomFormsModule } from 'ng2-validation';


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
       //Obtener los Subsidios 
       
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
            document.getElementById("Totalnumber").removeAttribute("readonly"); 
            document.getElementById("Tipo Anumber").removeAttribute("readonly");
            document.getElementById("Tipo B-number").removeAttribute("readonly");
          
                 
        }else{
             document.getElementById("Totalnumber").setAttribute("readonly","readonly");
             document.getElementById("Tipo Anumber").setAttribute("readonly","readonly");
             document.getElementById("Tipo Bnumber").setAttribute("readonly","readonly");
        }
    }
}