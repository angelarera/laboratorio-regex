import { estaBienFormadoElIban, esUnIbanValido } from "./validaciones";

describe("estaBienFormadoElIban", () => {
  test.each([
    ["ES21 1465 0100 72 2030876293", true],
    ["ES2114650100722030876293", true],
    ["ES21-1465-0100-72-2030876293", true],
    ["ES6621000418401234567891", true],
    ["ES21_1465_0100_72_2030876293", false],
    ["ES21  1465 0100 72 2030876293", false],
    ["ES21 1465 0100 728 2030876293", false],
    ["ESES 1465 0100 72 2030876293", false],
  ])(
    "Deberia devolver para el IBAN %s el valor %s",
    (valor: string, expected: boolean) => {
      expect(estaBienFormadoElIban(valor)).toBe(expected);
    }
  );
});

describe("esUnIbanValido", () => {
  test.each([
    ["ES9121000418450200051332", true],
    ["ES6621000418401234567891", true],
    ["ES6000491500051234567892", true],
    ["ES1000492352082414205416", true],
    ["ES9121000418450200051333", false],
    ["ES79 2100 0813 6101 2345 6780", false],
    ["ES66 2100 0418 4012 3456 7892", false],
    ["ES1000492352082414205417", false],
  ])(
    "Deberia devolver para el IBAN %s el valor %s",
    (valor: string, expected: boolean) => {
      expect(esUnIbanValido(valor)).toBe(expected);
    }
  );
});
