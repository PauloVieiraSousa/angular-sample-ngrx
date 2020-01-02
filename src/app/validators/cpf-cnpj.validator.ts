import {AbstractControl} from '@angular/forms';
import {CNPJ_QTD_DIGITS, CPF_QTD_DIGITS} from '../constants';
import {CnpjHelper} from '../services/cnpj.helper';
import {CpfHelper} from '../services/cpf.helper';

export function cpfCnpjValidator( control: AbstractControl): { [key: string]: any} | null {

  const cnpjHelper = new CnpjHelper();
  const cpfHelper = new CpfHelper();

  if (control.value === null || control.value === undefined ) { return null; }

  const value = control.value.replace(/\D/g, '');
  let result = {};

  switch (true) {
    case value.length === CPF_QTD_DIGITS:
      result = (!cpfHelper.isValid(value)) ? { cpfcnpjvalidator: true } : null;
      break;
    case value.length === CNPJ_QTD_DIGITS:
      result = (!cnpjHelper.isValid(value)) ? { cpfcnpjvalidator: true } : null;
      break;
    case value.length > CNPJ_QTD_DIGITS:
      result = { cpfcnpjvalidator: true };
      break;
    case (value.length > CPF_QTD_DIGITS && value.length < CNPJ_QTD_DIGITS):
      result = { cpfcnpjvalidator: true };
      break;
    default:
      result = null;
  }
  return result;

}
