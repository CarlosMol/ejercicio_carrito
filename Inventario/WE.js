class WE {
  calcularTotal(producto, peso) {
    return producto.precioUnitario * peso;
  }
}

module.exports = {
  create: function () {
    return new WE();
  },
};
