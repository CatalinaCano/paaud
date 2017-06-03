import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'asignar-tarea',
    templateUrl: 'asignar-tarea.component.html'
})

export class AsignarTareaComponent implements OnInit {
    constructor(
         private router: Router,
    ) { }

    ngOnInit() { }
    estudiantes = [
        {
            "n_codigo": "20121020079",
            "n_nombres": "Diana Catalina",
            "n_apellidos": "Cano Narvaez",
            "n_facultad": "Ingeniería",
            "n_carrera": "Ing. Sistemas"
        },
        {
            "n_codigo": "20121020076",
            "n_nombres": "Cristian Felipe",
            "n_apellidos": "Riaño Cardenas",
            "n_facultad": "Ingeniería",
            "n_carrera": "Ing. Sistemas"
        },
        {
            "n_codigo": "20121020109",
            "n_nombres": "Diego Fernando",
            "n_apellidos": "Sanchez",
            "n_facultad": "Ingeniería",
            "n_carrera": "Ing. Sistemas"
        },
    ];

    actividades = [
        {
            "n_actividad": "Archivo",
            "n_tipoActividad": "Administrativa",
            "n_responsable": "Gloria Giraldo",
            "n_dependencia": "UIFI"
        },

        {
            "n_actividad": "Monitoria",
            "n_tipoActividad": "Académica",
            "n_responsable": "Jaquelin Castillo",
            "n_dependencia": "Cordinación Sistemas"
        },
        {
            "n_actividad": "Aeropuerto",
            "n_tipoActividad": "Externa",
            "n_responsable": "Alexis Granados",
            "n_dependencia": "CERI"
        }
    ];


    buscar() {
        console.log("Buscar aqui");
    }

    onChange(actividad) {
        console.log(actividad);
        if (actividad === "1: Archivo") {
            this.mostrar();
            document.getElementById('tipo').innerHTML ="Administrativa"; 
            document.getElementById('dependencia').innerHTML ="UIFI"; 
            document.getElementById('responsable').innerHTML ="Gloria Giraldo"; 
            
        }else if(actividad==="2: Monitoria"){
            this.mostrar();
            document.getElementById('tipo').innerHTML ="Académica"; 
            document.getElementById('dependencia').innerHTML ="Coordinación Sistemas"; 
            document.getElementById('responsable').innerHTML ="Jaquelin Castillo"; 
        }else if(actividad==="3: Aeropuerto"){
            this.mostrar();
            document.getElementById('tipo').innerHTML ="Externa"; 
            document.getElementById('dependencia').innerHTML ="CERI"; 
            document.getElementById('responsable').innerHTML ="Alexis Granado"; 
        }else{
            this.ocultar();
        }

    }
    mostrar() {
        document.getElementById('tipo').hidden = false;
        document.getElementById('dependencia').hidden = false;
        document.getElementById('responsable').hidden = false;
        document.getElementById('validar').hidden = false;
    }
    ocultar(){
        document.getElementById('tipo').hidden = true;
        document.getElementById('dependencia').hidden = true;
        document.getElementById('responsable').hidden = true;
        document.getElementById('validar').hidden = true;
    }
    asignar(codigo){
        console.log(codigo);
         this.router.navigate(['/landing']);
    }
}