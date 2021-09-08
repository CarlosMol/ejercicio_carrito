class Productos {
  constructor(sku, nombre, descripcion, precioUnitario, unidadesDisponibles) {
    this.sku = sku;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precioUnitario = precioUnitario;
    this.unidadesDisponibles = unidadesDisponibles;
  }

  verificarUnidadesDisponibles() {
    return this.unidadesDisponibles > 0 ? true : false;
  }
}

module.exports = Productos;
