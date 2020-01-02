import {Directive, HostListener} from '@angular/core';
import {NgModel} from "@angular/forms";
import { CnpjHelper } from '../services/cnpj.helper';
import {CpfHelper} from "../services/cpf.helper";
import {CNPJ_QTD_DIGITS} from "../constants";

@Directive({
  selector: '[maskCpfCnpj]',
  providers: [NgModel]
})
export class CpfCnpjDirective {

  private cnpjHelper;
  private cpfHelper;

  constructor(private model: NgModel) {
    this.cnpjHelper = new CnpjHelper();
    this.cpfHelper = new CpfHelper();
  }

  @HostListener('input', ['$event']) onInput(event) {
    if (!event.target.value)
      return;

    const str = event.target.value.toString();
    const digitos = str.replace(/\D/g, '');
    const value = this.maxLength(digitos);
    this.model.valueAccessor.writeValue (
     this.parseCpfCnpj(value)
    );
  }

  parseCpfCnpj(value) {
    return (value.length >= 0 && value.length <= 11) ? this.maskCpf(value) : this.maskCnpj(value);
  }

  private maskCpf( value ) {
    let cpf;
    switch (true) {
      case (value.length >= 4 && value.length <= 6):
        cpf = value.replace(/(\d+)(\d{3})/, '$1.$2');
        break;
      case (value.length >= 7 && value.length <= 9):
        cpf = value.replace(/(\d+)(\d{3})(\d{3})/, '$1.$2.$3');
        break;
      case (value.length >= 10 && value.length <= 11):
        cpf = value.replace(/(\d+)(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        break;
      default:
        cpf = value;
    }
    return cpf;
  }

  private maskCnpj(value) {
    let cnpj;
    if (value.length === 12){
      cnpj = value.replace(/(\d+)(\d{3})(\d{3})(\d{4})/, '$1.$2.$3/$4');
    } else {
      cnpj =  cnpj = value.replace(/(\d+)(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }
    return cnpj;
  }

  private maxLength(value) {
    return (value.length > CNPJ_QTD_DIGITS) ? value.substring(0, CNPJ_QTD_DIGITS) : value;
  }

}
