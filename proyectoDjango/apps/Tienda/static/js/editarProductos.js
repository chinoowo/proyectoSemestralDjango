$(function () {
    $("#editarProductos").validate({
        rules: {
            txtIdProducto: { 
                required: true, 
                number: true, },
            txtNombreProducto: { 
                required: true, 
                minlength: 3 },
            txtPrecioProducto: { 
                required: true, 
                number: true },
        }, messages: {
            txtIdProducto: {
                required: "Este campo es obligatorio",
                number: "Este campo debe ser numerico"
            },txtNombreProducto: {
                required: "Este campo es obligatorio", 
                minlength: "Este campo debe tener minimo 3 caracteres" 
            },txtPrecioProducto: {
                required: "Este campo es obligatorio", 
                number: "Este campo debe ser numerico" 
            }
        }
    })

})