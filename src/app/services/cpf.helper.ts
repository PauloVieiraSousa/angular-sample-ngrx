import {CPF_BLACKLIST, CPF_QTD_DIGITS, CPF_QTD_DIGITS_VALIDATOR} from '../constants';

export class CpfHelper {

  isValid(value): boolean {

    if (!value || value.length !== CPF_QTD_DIGITS || CPF_BLACKLIST.indexOf(value) >= 0) { return false; }

    let numbers = value.substr(0, 9);
    numbers += this.validateDigit(numbers);
    numbers += this.validateDigit(numbers);

    return numbers.substr(-CPF_QTD_DIGITS_VALIDATOR) === value.substr(-CPF_QTD_DIGITS_VALIDATOR);
  }

  private validateDigit(cpf): number {
    cpf = cpf.split('').map((digit) => parseInt(digit, 10));

    const modulus = cpf.length + 1;

    const multiplied = cpf.map((value, index ) => value * (modulus - index) );
    const mod = multiplied.reduce((buffer, value) => buffer + value) % CPF_QTD_DIGITS;
    return ( (mod < 2) ? 0 : (11 - mod) );
  }
}
