class SP {
  calcularTotal(producto, unidades) {
    let total = 0;
    let precio = unidades * producto.precioUnitario;

    unidades >= 3 && unidades < 6
      ? (total = precio - precio * 0.2)
      : unidades >= 6 && unidades < 9
      ? (total = precio - precio * 0.4)
      : unidades >= 9
      ? (total = precio - precio * 0.5)
      : "";
    return total;
  }
}
module.exports = {
  create: function () {
    return new SP();
  },
};
