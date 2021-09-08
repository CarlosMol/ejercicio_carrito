const Producto = require("./Inventario/Productos");
const Cliente = require("./Cliente");

class Tienda {
  constructor(productos = [], clientes = []) {
    this.productos = productos;
    this.clientes = clientes;
  }

  cargarProductos(listaProductos = []) {
    let productosInvalidos = [];
    let codigos = ["EA", "SP", "WE"];

    listaProductos.forEach((el) => {
      codigos.includes(el.sku.slice(0, 2).toUpperCase())
        ? this.productos.push(
            new Producto(
              el.sku,
              el.nombre,
              el.descripcion,
              el.precioUnitario,
              el.unidadesDisponibles
            )
          )
        : productosInvalidos.push(el);
    });

    productosInvalidos.length > 0
      ? console.log(
          `Productos con código invalido: ${JSON.stringify(productosInvalidos)}`
        )
      : "";
  }

  modificarCantidadesDisponibles(sku, cantidad, tipo) {
    let pos = this.productos
      .map((obj) => {
        return obj.sku;
      })
      .indexOf(sku);

    tipo == 0
      ? (this.productos[pos].unidadesDisponibles -= cantidad)
      : (this.productos[pos].unidadesDisponibles += cantidad);
  }

  // ----
  async prueba() {
    let lista = [
      {
        sku: "SP001",
        nombre: "Lapicero",
        descripcion: "Lapicero negro kilometrico",
        precioUnitario: 1000,
        unidadesDisponibles: 30,
      },

      {
        sku: "SP002",
        nombre: "saca puntas",
        descripcion: "sacapuntas ultra fino",
        precioUnitario: 8000,
        unidadesDisponibles: 60,
      },

      {
        sku: "SP003",
        nombre: "marcador",
        descripcion: "marcador en agua",
        precioUnitario: 30000,
        unidadesDisponibles: 10,
      },

      {
        sku: "SP004",
        nombre: "Tinta",
        descripcion: "Tinta mojada",
        precioUnitario: 80000,
        unidadesDisponibles: 90,
      },

      {
        sku: "EA001",
        nombre: "Lapiz",
        descripcion: "Lapiz HB 2",
        precioUnitario: 700,
        unidadesDisponibles: 20,
      },
      {
        sku: "WE001",
        nombre: "Bolso",
        descripcion: "bolso impermeable",
        precioUnitario: 50000,
        unidadesDisponibles: 15,
      },

      {
        sku: "WE001",
        nombre: "cartuchera",
        descripcion: "cartuchera doble",
        precioUnitario: 50000,
        unidadesDisponibles: 15,
      },

      {
        sku: "WE001",
        nombre: "Maleta de viaje",
        descripcion: "ruedas retractiles",
        precioUnitario: 50000,
        unidadesDisponibles: 15,
      },

      {
        sku: "WE001",
        nombre: "Tilapia",
        descripcion: "comida congelada",
        precioUnitario: 50000,
        unidadesDisponibles: 15,
      },
      {
        sku: "PAZ001",
        nombre: "SALMON",
        descripcion: "EURO",
        precioUnitario: 999,
        unidadesDisponibles: 99,
      },
    ];

    this.cargarProductos(lista);

    let cliente = new Cliente("1087202741", "JUAN SAMSUNG");

    await cliente.agregarProducto(this.productos[0], 3).then((response) => {
      response
        ? this.modificarCantidadesDisponibles(this.productos[0].sku, 3, 0)
        : "";
    });
    await cliente.agregarProducto(this.productos[1], 3).then((response) => {
      response
        ? this.modificarCantidadesDisponibles(this.productos[0].sku, 3, 0)
        : "";
    });
    await cliente.agregarProducto(this.productos[2], 3).then((response) => {
      response
        ? this.modificarCantidadesDisponibles(this.productos[0].sku, 3, 0)
        : "";
    });

    console.log("Total: ", cliente.verTotal());
    console.log("Lista de productos: ",cliente.carrito.resumenProductos());
  }
}

let objTienda = new Tienda();

objTienda.prueba();
