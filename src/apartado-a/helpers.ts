const eliminarEspaciosYGuionesIban = (iban: string) => {
  return iban.replace(/[\s-]/g, "");
};

const extraerCodigoBanco = (iban: string) => {
  const ibanNormalizado = eliminarEspaciosYGuionesIban(iban);
  return ibanNormalizado.substring(4, 8);
};

export const obtenerNombreBanco = (iban: string) => {
  const codigoBanco = extraerCodigoBanco(iban);

  switch (codigoBanco) {
    case "2080":
      return "Abanca Corporación Bancaria";
    case "0061":
      return "Banca March";
    case "0188":
      return "Banco Alcalá";
    case "0182":
      return "Banco Bilbao Vizcaya Argentaria";
    case "0130":
      return "Banco Caixa Geral";
    case "0234":
      return "Banco Caminos";
    case "2105":
      return "Banco Castilla-La Mancha";
    case "0240":
      return "Banco de Crédito Social Cooperativo";
    case "0081":
      return "Banco de Sabadell";
    case "0487":
      return "Banco Mare Nostrum";
    case "0186":
      return "Banco Mediolanum";
    case "0238":
      return "Banco Pastor";
    case "0075":
      return "Banco Popular Español";
    case "0049":
      return "Banco Santander";
    case "3873":
      return "Banco Santander Totta";
    case "2038":
      return "Bankia";
    case "0128":
      return "Bankinter";
    case "0138":
      return "Bankoa";
    case "0152":
      return "Barclays Bank PLC";
    case "3842":
      return "BNP Paribas Paris";
    case "3025":
      return "Caixa de Credit del Enginyers";
    case "2100":
      return "Caixabank";
    case "2045":
      return "Caja de Ahorros y Monte de Piedad de Ontinyent";
    case "3035":
      return "Caja Laboral Popular CC";
    case "3081":
      return "Caja Rural Castilla-La Mancha";
    case "3058":
      return "Cajamar Caja Rural";
    case "2000":
      return "Cecabank";
    case "1474":
      return "Citibank Europe PLC";
    case "3821":
      return "Commerzbank AG";
    case "3877":
      return "Danske Bank A/S";
    case "0019":
      return "Deutsche Bank SAE";
    case "0239":
      return "EVO Banco";
    case "2085":
      return "Ibercaja Banco";
    case "1465":
      return "ING Bank NV";
    case "2095":
      return "Kutxabank";
    case "2048":
      return "Liberbank";
    case "0131":
      return "Novo Banco";
    case "0073":
      return "Open Bank";
    case "0108":
      return "Société Générale";
    case "2103":
      return "Unicaja Banco";
    default:
      return "Banco desconocido";
  }
};

export const extraerCodigoSucursal = (iban: string) => {
  const ibanNormalizado = eliminarEspaciosYGuionesIban(iban);
  return ibanNormalizado.substring(8, 12);
};

export const extraerDigitoDeControl = (iban: string) => {
  const ibanNormalizado = eliminarEspaciosYGuionesIban(iban);
  return ibanNormalizado.substring(12, 14);
};

export const extraerNumeroDeCuenta = (iban: string) => {
  const ibanNormalizado = eliminarEspaciosYGuionesIban(iban);
  return ibanNormalizado.substring(14, 24);
};
