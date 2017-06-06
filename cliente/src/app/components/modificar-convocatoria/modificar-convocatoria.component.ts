//angular
import { Component, OnInit } from '@angular/core';

//servicios
import { ConvocatoriasService } from "app/services/convocatorias.service";

@Component({
    moduleId: module.id,
    selector: 'modificar-convocatoria',
    templateUrl: 'modificar-convocatoria.component.html'
})

export class ModificarConvocatoriaComponent implements OnInit {

    error = '';
    modificar_convocatoria = false;
    convocatorias = [];
    convocatoria_seleccionada = {};
    cupos_convocatoria = [];
    estados_convocatoria = [
        'ABIERTA','CANCELADA','VALIDACION','PENDIENTE','CERRADA'
    ];

    constructor(
        private convocatoriasService : ConvocatoriasService
    ) {}

    ngOnInit() {
        this.getConvocatorias();
    }

    //trae los datos de las convocatorias
    getConvocatorias() :void {
            this.convocatoriasService.getConvocatorias()
                .subscribe(res => {
                        this.convocatorias = res;
                    }, err => {
                        this.error = err._body;
                    });
    }

    getCuposConvocatoria(id : number): void {
        this.convocatoriasService.getCuposConvocatoria(id)
            .subscribe(res => {
                        this.cupos_convocatoria = res;
                    }, err => {
                        this.error = err._body;
                    });
    }

    elegirConvocatoria(convocatoria: Object, id:number): void{
        this.convocatoria_seleccionada = convocatoria;
        this.modificar_convocatoria = true;
        this.getCuposConvocatoria(id);
    }

    updateConvocatoria(convocatoria: Object): void {
        this.error = '';
        this.convocatoriasService.updateConvocatoria(convocatoria)
            .subscribe(res => {
                        alert("Convocatoria modificada");
                        this.getConvocatorias();
                        this.modificar_convocatoria = false;
                    }, err => {
                        this.error = err._body;
                    });
    }

    actualizarCupos(subsidio: number, cupos: number, convocatoria: number): void{
        this.error = '';
        let actualizar_cupos = {
            "k_subsidio" : subsidio,
            "k_convocatoria" : convocatoria,
            "q_cupos" : cupos
        };
        this.convocatoriasService.updateCuposConvocatoria(actualizar_cupos)
            .subscribe(res => {
                        alert("Cupos actualizados");
                        this.getCuposConvocatoria(convocatoria);
                    }, err => {
                        this.error = err._body;
                    });
    }

    cancelarUpdate(): void {
        this.error = '';
        this.getConvocatorias();
        this.modificar_convocatoria = false;
    }

}