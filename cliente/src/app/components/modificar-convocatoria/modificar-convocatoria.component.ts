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
    convocatorias = [];

    constructor(
        private convocatoriasService : ConvocatoriasService
    ) {}

    ngOnInit() {
        this.getDatosIniciales();
    }

    //trae los datos de las convocatorias
    getDatosIniciales() :void {
            this.convocatoriasService.getConvocatorias()
                .subscribe(res => {
                        this.convocatorias = res;
                        console.log(this.convocatorias);
                    }, err => {
                        this.error = err._body;
                    });
    }

}