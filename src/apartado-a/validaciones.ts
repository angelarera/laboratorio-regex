import * as ibantools from "ibantools";

export const estaBienFormadoElIban = (value: string): boolean => {
  const patron = /^ES\d{2}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{2}[\s-]?\d{10}$/;

  return patron.test(value);
};

export const esUnIbanValido = (value: string): boolean => {
  if (!estaBienFormadoElIban(value)) {
    return false;
  }

  return ibantools.isValidIBAN(value);
};
