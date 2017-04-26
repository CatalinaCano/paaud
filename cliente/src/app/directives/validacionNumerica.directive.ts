import {Directive} from '@angular/core'
import {AbstractControl, NG_VALIDATORS} from '@angular/forms';


function verificarMayor(control: AbstractControl): {[key: string]: any} {
    if (control.value != null && typeof control.value === 'number') {
      return this.isLegitimateStark(control.value) ? null : { 'stark': true };
    } else {
      return null;
    }
  }

function verificarEspacios(control:AbstractControl){
    if(control.value == null) return null;
    if(control.value.(' ')>=0){
        return {sinEspacios:true}
    }
    return null;
}

@Directive({ selector: '[mayor]' })
export class NameDirective {
    constructor() { }
}