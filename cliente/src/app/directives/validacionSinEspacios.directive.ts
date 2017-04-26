import {Directive} from '@angular/core'
import {AbstractControl, NG_VALIDATORS} from '@angular/forms';

function verificarEspacios(control:AbstractControl){
    if(control.value == null) return null;
    if(control.value.indexOf(' ')>=0){
        return {sinEspacios:true}
    }
    return null;
}

@Directive({
    selector: '[sin-espacios]',
    providers: [
        {
            provide: NG_VALIDATORS,
            multi:true,
            useValue: verificarEspacios
        }
    ]
})

export class SinEspacios {

}