// Añadir un evento al boton con id 'add-to-order'
document.getElementById('add-to-order').addEventListener('click', function () {
    // Obtener valores de los elementos del formulario
    var tipoAccesorio = document.getElementById('tipoAccesorio').value;
    var cantidadAccesorios = parseInt(document.getElementById('cantidadAccesorios').value) || 0;
    var decoracion = document.getElementById('decoracion').value;
    var cantidadDecoracion = parseInt(document.getElementById('cantidadDecoracion').value) || 0;
    var tipoPeluche = document.getElementById('tipoPeluche').value;
    var cantidadPeluches = parseInt(document.getElementById('cantidadPeluches').value) || 0;
    var tipoGorro = document.getElementById('tipoGorro').value;
    var cantidadGorros = parseInt(document.getElementById('cantidadGorros').value) || 0;

    // Calcular precios de cada categoría
    var preciosAccesorios = calcularPrecio(tipoAccesorio, "accesorio");
    var precioDecoracion = calcularPrecio(decoracion, "decoracion");
    var precioPeluches = calcularPrecio(tipoPeluche, "peluche");
    var precioGorro = calcularPrecio(tipoGorro, "gorro");

    // Calcular total para cada categoría
    var totalAccesorios = preciosAccesorios * cantidadAccesorios;
    var totalDecoracion = precioDecoracion * cantidadDecoracion;
    var totalPeluches = precioPeluches * cantidadPeluches;
    var totalGorros = precioGorro * cantidadGorros;

    // Calcular el total general
    var total = totalAccesorios + totalDecoracion + totalPeluches + totalGorros;

    // Obtener la lista de pedidos
    var orderList = document.getElementById('order-list');
    // Limpiar la lista de pedidos
    orderList.innerHTML = "";

    // Agregar elementos a la lista de pedidos si la cantidad es mayor a 0
    if (cantidadAccesorios > 0) {
        var accesoriosItem = document.createElement('li');
        accesoriosItem.textContent = `Árbol de Navidad x${cantidadAccesorios}: $${totalAccesorios.toFixed()}`;
        orderList.appendChild(accesoriosItem);
    }

    if (cantidadDecoracion > 0) {
        var decoracionItem = document.createElement('li');
        decoracionItem.textContent = `Decoración x${cantidadDecoracion}: $${totalDecoracion.toFixed()}`;
        orderList.appendChild(decoracionItem);
    }

    if (cantidadPeluches > 0) {
        var peluchesItem = document.createElement('li');
        peluchesItem.textContent = `Peluches x${cantidadPeluches}: $${totalPeluches.toFixed()}`;
        orderList.appendChild(peluchesItem);
    }

    if (cantidadGorros > 0) {
        var gorrosItem = document.createElement('li');
        gorrosItem.textContent = `Gorros x${cantidadGorros}: $${totalGorros.toFixed()}`;
        orderList.appendChild(gorrosItem);
    }

    // Mostrar el total en la pagina
    var totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = `Total: $${total.toFixed()}`;

    // Mostrar el resumen del pedido
    document.getElementById('order-summary').style.display = 'block';
});
// Funcion para calcular el precio segun el tipo y la categoría
function calcularPrecio(tipo, categoria) {
    // Utilizamos una estructura de switch para manejar diferentes casos de categoría y tipo
    switch (categoria) {
        case "accesorio":
            // En el caso de accesorios evaluamos el tipo específico y devolvemos el precio correspondiente
            switch (tipo) {
                case "Árbol de Navidad":
                    return 200;
                case "Guirnalda":
                    return 500;
                case "Adornos":
                    return 300;
                default:
                    return 0; // Si el tipo no coincide con ninguna opcion devolvemos 0
            }
        case "decoracion":
            // En el caso de decoracion evaluamos el tipo específico y devolvemos el precio correspondiente
            switch (tipo) {
                case "Luces":
                    return 800;
                case "Bolas":
                    return 600;
                case "Estrellas":
                    return 1000;
                default:
                    return 0;
            }
        case "peluche":
            // En el caso de peluches evaluamos el tipo específico y devolvemos el precio correspondiente
            switch (tipo) {
                case "Renos":
                    return 900;
                case "Papa Noel":
                    return 700;
                case "Oso":
                    return 1500;
                default:
                    return 0;
            }
        case "gorro":
            // En el caso de gorros evaluamos el tipo específico y devolvemos el precio correspondiente
            switch (tipo) {
                case "Gorro con orejas":
                    return 100;
                case "Gorro con Luces Led":
                    return 150;
                case "Gorro con cuernos":
                    return 200;
                default:
                    return 0;
            }
        default:
            return 0; // Si la categoría no coincide con ninguna opcion devolvemos 0
    }
}
// Añadir un evento al boton con id 'add-to-order'
document.getElementById('add-to-order').addEventListener('click', function () {
    // Obtener los valores de los elementos del formulario
    var tipoAccesorio = document.getElementById('tipoAccesorio').value;
    var cantidadAccesorios = parseInt(document.getElementById('cantidadAccesorios').value) || 0;
    var decoracion = document.getElementById('decoracion').value;
    var cantidadDecoracion = parseInt(document.getElementById('cantidadDecoracion').value) || 0;
    var tipoPeluche = document.getElementById('tipoPeluche').value;
    var cantidadPeluches = parseInt(document.getElementById('cantidadPeluches').value) || 0;
    var tipoGorro = document.getElementById('tipoGorro').value;
    var cantidadGorros = parseInt(document.getElementById('cantidadGorros').value) || 0;

    // Calcular precios de cada categoría
    var preciosAccesorios = calcularPrecio(tipoAccesorio, "accesorio");
    var precioDecoracion = calcularPrecio(decoracion, "decoracion");
    var precioPeluches = calcularPrecio(tipoPeluche, "peluche");
    var precioGorro = calcularPrecio(tipoGorro, "gorro");

    // Calcular total para cada categoría
    var totalAccesorios = preciosAccesorios * cantidadAccesorios;
    var totalDecoracion = precioDecoracion * cantidadDecoracion;
    var totalPeluches = precioPeluches * cantidadPeluches;
    var totalGorros = precioGorro * cantidadGorros;

    // Calcular el total general
    var total = totalAccesorios + totalDecoracion + totalPeluches + totalGorros;

    // Obtener la lista de pedidos
    var orderList = document.getElementById('order-list');
    // Limpiar la lista de pedidos
    orderList.innerHTML = "";

    // Agregar elementos a la lista de pedidos si la cantidad es mayor a 0
    if (cantidadAccesorios > 0) {
        var accesoriosItem = document.createElement('li');
        accesoriosItem.textContent = `Árbol de Navidad x${cantidadAccesorios}: $${totalAccesorios.toFixed()}`;
        orderList.appendChild(accesoriosItem);
    }

    if (cantidadDecoracion > 0) {
        var decoracionItem = document.createElement('li');
        decoracionItem.textContent = `Decoración x${cantidadDecoracion}: $${totalDecoracion.toFixed()}`;
        orderList.appendChild(decoracionItem);
    }

    if (cantidadPeluches > 0) {
        var peluchesItem = document.createElement('li');
        peluchesItem.textContent = `Peluches x${cantidadPeluches}: $${totalPeluches.toFixed()}`;
        orderList.appendChild(peluchesItem);
    }

    if (cantidadGorros > 0) {
        var gorrosItem = document.createElement('li');
        gorrosItem.textContent = `Gorros x${cantidadGorros}: $${totalGorros.toFixed()}`;
        orderList.appendChild(gorrosItem);
    }

    // Mostrar el total en la pagina
    var totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = `Total: $${total.toFixed()}`;

    // Mostrar el resumen del pedido
    document.getElementById('order-summary').style.display = 'block';
});
