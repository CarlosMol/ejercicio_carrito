let WE = require("./WE").create();
let EA = require("./EA").create();
let SP = require("./SP").create();

class Item {
  calcularTotalTipo(producto, cantidad) {
    let type = producto.sku.slice(0, 2).toUpperCase();
    let result;
    switch (type) {
      case "EA":
        result = EA.calcularTotal(producto, cantidad);
        break;

      case "WE":
        result = WE.calcularTotal(producto, cantidad);
        break;

      case "SP":
        result = SP.calcularTotal(producto, cantidad);
        break;
    }
    return result;
  }
}

module.exports = {
  create: function () {
    return new Item();
  },
};
