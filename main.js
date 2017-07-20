const URLIMAGENCAMISETA = "http://www.gasoilonline.com/images/CAMI%20ROJA.jpg";

class Producto{
	constructor(nombre, precio, descripcion, urlImagen){
		this._nombre = nombre;
		this._precio = precio;
		this._descripcion = descripcion;
		this._urlImagen = urlImagen;
		this.idProducto = 0;
	}
	getRowForTable(index){
		console.log(this.idProducto);
		let fila = '<tr><td><img class ="img-small" src="' + this._urlImagen + '"></td><td>' + this._nombre + '</td><td>' + this._precio + '</td><td>' + this._descripcion + '</td><td><button class="button-main" onclick="miTienda.removeProductoById('+this.idProducto+')">Borrar</button></td></tr>';
		return fila;
	}
}

class Tienda{
	constructor(nombre, direccion, urlTienda){
		this._nombre = nombre;
		this._direccion = direccion;
		this._urlTienda = urlTienda;
		this._productos = [];
		this._contadorProductos = 0;
	}

	addProducto(producto){
		producto.idProducto = this._contadorProductos;
		this._contadorProductos++;
		this._productos.push(producto);
		this.pintarProductos();
	}

	addAndCreateProducto(nombre, precio, descripcion, urlImagen){
		var producto = new Producto(nombre, precio, descripcion, urlImagen);
		this._productos.push(producto);
	}

	// Para que Vlai no se enfade
	removeProductoById(idProducto){
		let producto = null;
		for (var i = 0; i < this._productos.length; i++) {
			if(this._productos[i].idProducto == idProducto){
				producto = this._productos[i];
			}
		}
		let indice = this._productos.indexOf(producto);
		this.removeProductoAtIndex(indice);
	}

	removeProductoAtIndex(index){
		this._productos.splice(index, 1);
		this.pintarProductos();
	}

	getProductDataAndCreate(){
		let producto = null;
		let nombre = document.getElementById("nombre").value;
		let precio = document.getElementById("precio").value;
		let descripcion = document.getElementById("descripcion").value;
		let urlImagen = document.getElementById("urlImagen").value;

		producto = new Producto(nombre, precio, descripcion, urlImagen);

		return producto;

	}
	getProductAndInsert(event){
		event.preventDefault();
		event.stopPropagation();
		var producto = this.getProductDataAndCreate();
		this.addProducto(producto);
	}
	pintarProductos(){
		document.getElementById("tbodyproductos").innerHTML = '';

		var tbodyInner = "";
		
		for(var i=0; i<this._productos.length; i++){
			let producto = this._productos[i];
			tbodyInner = tbodyInner + producto.getRowForTable();
		}
		document.getElementById("tbodyproductos").innerHTML = tbodyInner;
	}
}

let miTienda = new Tienda("Tienda de Fran", "Calle Gral..", "google.es");
let prod1 = new Producto("Camiseta", "10€", "De algodón", URLIMAGENCAMISETA);
let prod2 = new Producto("Camiseta 2", "12€", "De lino", URLIMAGENCAMISETA);

console.log(miTienda);























