import { estaBienFormadoElIban, esUnIbanValido } from "./validaciones";
import {
  obtenerNombreBanco,
  extraerCodigoSucursal,
  extraerDigitoDeControl,
  extraerNumeroDeCuenta,
} from "./helpers";

const resultadoDiv = document.querySelector(".resultado-buscador");

const mostrarMensajeIbanBienFormado = (iban: string): void => {
  if (resultadoDiv && resultadoDiv instanceof HTMLDivElement) {
    const mensaje = estaBienFormadoElIban(iban)
      ? `<p>✅ El IBAN está bien formado</p>`
      : `<p>❌ El IBAN no está bien formado</p>`;

    resultadoDiv.innerHTML = mensaje;
  }
};

const mostrarMensajeIbanValido = (iban: string): void => {
  if (resultadoDiv && resultadoDiv instanceof HTMLDivElement) {
    const mensaje = esUnIbanValido(iban)
      ? `<p>✅ El IBAN es válido</p>`
      : `<p>❌ El IBAN no es válido</p>`;

    resultadoDiv.innerHTML += mensaje;
  }
};

const mostrarIbanDesglosado = (iban: string): void => {
  const nombreBanco = obtenerNombreBanco(iban);
  const codigoSucursal = extraerCodigoSucursal(iban);
  const digitoControl = extraerDigitoDeControl(iban);
  const numeroCuenta = extraerNumeroDeCuenta(iban);

  if (
    estaBienFormadoElIban(iban) &&
    esUnIbanValido(iban) &&
    resultadoDiv &&
    resultadoDiv instanceof HTMLDivElement
  ) {
    resultadoDiv.innerHTML += `
    <p><strong>Banco:</strong> ${nombreBanco}<p>
    <p><strong>Código sucursal:</strong> ${codigoSucursal}<p>
    <p><strong>Dígito de control:</strong> ${digitoControl}<p>
    <p><strong>Número de cuenta:</strong> ${numeroCuenta}<p>
    `;
  }
};

const buscadorIban = document.querySelector(".buscador-iban");
const ibanIntroducido = document.querySelector("#iban-input");

if (
  buscadorIban &&
  buscadorIban instanceof HTMLFormElement &&
  ibanIntroducido &&
  ibanIntroducido instanceof HTMLInputElement
) {
  buscadorIban.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const iban = ibanIntroducido.value.trim();

    mostrarMensajeIbanBienFormado(iban);
    mostrarMensajeIbanValido(iban);
    mostrarIbanDesglosado(iban);
  });
}
