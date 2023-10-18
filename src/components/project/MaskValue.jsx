function MaskValue(texto) {
  texto = texto.replace(/D/, "");
  texto = texto.replace(/(\D)(\D)(\D)(\D)/g, "$$1.$2$3$4.00)");

  return texto;
}

export default MaskValue;
