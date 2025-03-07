export const extraerSrcDeImg = (html: string): string[] | null => {
  const regex = /<img[^>]+src="([^">]+)"/g;
  const matches = html.matchAll(regex);
  const listaSrc = Array.from(matches, (match) => match[1]);

  if (listaSrc.length > 0) {
    return listaSrc;
  } else {
    return null;
  }
};

export const crearFigureConImg = (src: string): HTMLElement => {
  const figure = document.createElement("figure");
  const img = document.createElement("img");
  img.src = src;

  figure.appendChild(img);
  return figure;
};
