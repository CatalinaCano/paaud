//angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//servicios
import { FacultadesService } from './../../services/facultades.service';
import { ConvocatoriasService } from "app/services/convocatorias.service";

@Component({
    moduleId: module.id,
    selector: 'publicar-convocatoria',
    templateUrl: 'publicar-convocatoria.component.html'
})

export class PublicarConvocatoriaComponent implements OnInit {

    error = '';

    datos_convocatoria = {
        "k_facultad" : null,
        "f_inicioconvocatoria" : "",
        "f_iniciopublicacion" : "",
        "f_finpublicacion" : "",
        "f_iniciovalidacion" : "",
        "f_finvalidacion" : "",
        "f_publicacionresultados" : "",
        "q_periodo" : null,
        "cupos" : []
    };

    facultades = [];

    periodos = [
        { "periodo": 1 },
        { "periodo": 2 }
    ];

    subsidios = [
        {
            "k_subsidio": 1,
            "i_tiposubsidio": "TOTAL",
            "t_porcentajesub": 100,
            "n_cupos": 0
        },
        {
            "k_subsidio": 2,
            "i_tiposubsidio": "A",
            "t_porcentajesub": 75,
            "n_cupos": 0
        },
        {
            "k_subsidio": 3,
            "i_tiposubsidio": "B",
            "t_porcentajesub": 50,
            "n_cupos": 0
        }
    ];

    constructor(
        private facultadesService: FacultadesService,
        private convocatoriasService: ConvocatoriasService,
        private router: Router

    ) {}

    ngOnInit() {
        this.getDatosIniciales();
    }

    //trae los datos de las facultades
    getDatosIniciales() :void {
            this.facultadesService.getFacultades()
                .subscribe(res => {
                        this.facultades = res;
                    }, err => {
                        this.error = err._body;
                    });
    }

    enviardatos() {
        this.error = '';
        this.datos_convocatoria.cupos = []
        for (let i=0; i < this.subsidios.length; i++){
            let cupos = {
                "subsidio" : this.subsidios[i].k_subsidio,
                "cupos" : this.subsidios[i].n_cupos
            }
            this.datos_convocatoria.cupos.push(cupos);
        }
        this.convocatoriasService.postConvocatoria(this.datos_convocatoria)
            .subscribe(res => {
                        let respuesta = res;
                        console.log(respuesta);
                        if (respuesta.respuesta){
                            alert("Convocatoria creada");
                            this.router.navigate(['/landing']);
                        } else {
                            this.error = 'Ya existe una convocatoria para el mismo periodo y la misma facultad en proceso';
                        }
                    }, err => {
                        this.error = err._body;
                    });
    }

    regresar() {
        this.router.navigate(['/landing']);
    }

}