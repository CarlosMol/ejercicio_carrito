class EA {
  calcularTotal(producto, unidades) {
    return producto.precioUnitario * unidades;
  }
}

module.exports = {
  create: function () {
    return new EA();
  },
};
