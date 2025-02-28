import { extraerSrcDeImg } from "./helpers";

const formulario = document.querySelector(".formulario-html");
const htmlIntroducido = document.querySelector("#html-input");
const resultadoDiv = document.querySelector(".resultado-html");

const crearFigureConImg = (src: string): HTMLElement => {
  const figure = document.createElement("figure");
  const img = document.createElement("img");
  img.src = src;

  figure.appendChild(img);
  return figure;
};

if (
  formulario &&
  formulario instanceof HTMLFormElement &&
  htmlIntroducido &&
  htmlIntroducido instanceof HTMLTextAreaElement &&
  resultadoDiv &&
  resultadoDiv instanceof HTMLDivElement
) {
  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const html = htmlIntroducido.value;
    const listaSrc = extraerSrcDeImg(html);

    resultadoDiv.innerHTML = ""; // Limpia el contenido de una vez a la siguiente

    if (listaSrc) {
      listaSrc.forEach((src) => {
        const figure = crearFigureConImg(src);
        resultadoDiv.appendChild(figure);
      });
    } else {
      const p = document.createElement("p");
      p.textContent = "❌ No se han encontrado imágenes";
      resultadoDiv.appendChild(p);
    }
  });
}
