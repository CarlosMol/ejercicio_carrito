let Item = require("./Inventario/Item").create();

class Carrito {
  constructor(listaProductos = []) {
    this.listaProductos = listaProductos;
  }

  calcularTotal() {
    try {
      let total = 0;
      this.listaProductos.forEach((el) => {
        el["total"] = Item.calcularTotalTipo(el.producto, el.cantidad);
        total += el["total"];
      });
      return total;
    } catch (error) {
      console.log(error);
    }
  }
  resumenProductos() {
    return this.listaProductos;
  }

  agregarProducto(producto, cantidad) {
    try {
      let pos = this.listaProductos
        .map((obj) => {
          return obj.sku;
        })
        .indexOf(producto.sku);

      pos != -1
        ? (this.listaProductos[pos].cantidad += cantidad)
        : this.listaProductos.push({ producto, cantidad });
    } catch (error) {
      console.log(error);
    }
  }
  //TODO:
  eliminarProducto() {}
}

module.exports = Carrito;
