import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Directive } from '@angular/core';
import { cpfCnpjValidator } from '../validators/cpf-cnpj.validator';

@Directive({
  selector: '[cpfCnpjValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CpfCnpjValidatorDirective,
      multi: true
    }
  ]
})
export class CpfCnpjValidatorDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    return cpfCnpjValidator(control);
  }

}
