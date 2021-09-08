const Carrito = require("./Carrito");

class Cliente {
  constructor(id, nombre) {
    this.id = id;
    this.nombre = nombre;
    this.carrito = new Carrito();
  }

  async agregarProducto(producto, cantidad) {
    if (
      producto.verificarUnidadesDisponibles() &&
      producto.unidadesDisponibles >= cantidad
    ) {
      this.carrito.agregarProducto(producto, cantidad);
      return true;
    } else {
      return false;
    }
  }

  //TODO:
  async eliminarProducto(producto, cantidad) {}

  verTotal() {
    return this.carrito.calcularTotal();
  }
}

module.exports = Cliente;
