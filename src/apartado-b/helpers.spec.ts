import { extraerSrcDeImg } from "./helpers";

describe("extraerSrcDeImg", () => {
  it("Si no encuentra ninguna etiqueta img, devuelve null", () => {
    // Arrange
    const html = "<h1>Personajes de Moradelo y Filemón</h1>";
    const resultadoEsperado = null;

    // Act
    const resultado = extraerSrcDeImg(html);

    // Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Si encuentra una etiqueta img, devuelve el contenido de su src en un array", () => {
    // Arrange
    const html = '<img src="http://localhost:3000/./mortadelo.webp" />';
    const resultadoEsperado = ["http://localhost:3000/./mortadelo.webp"];

    // Act
    const resultado = extraerSrcDeImg(html);

    // Assert
    expect(resultado).toEqual(resultadoEsperado);
  });

  it("Si encuentra varias etiquetas img, devuelve el contenido de sus src en un array", () => {
    // Arrange
    const html =
      '<img src="http://localhost:3000/./mortadelo.webp" /><img src="http://localhost:3000/./filemon.webp" /> ';
    const resultadoEsperado = [
      "http://localhost:3000/./mortadelo.webp",
      "http://localhost:3000/./filemon.webp",
    ];

    // Act
    const resultado = extraerSrcDeImg(html);

    // Assert
    expect(resultado).toEqual(resultadoEsperado);
  });
});
