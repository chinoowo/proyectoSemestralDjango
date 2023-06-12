$(function () {
    $("#agregarProductos").validate({
        rules: {
            txtSku: {
                required: true,
                number: true,
            },
            txtNombre: {
                required: true,
                minlength: 3
            },
            txtPrecio: {
                required: true,
                number: true
            },
            txtStock: {
                required: true,
                number: true
            },
            txtImagen: {
                required: true,
            },
            cmbCategoria: {
                required: true,
            },
        }, messages: {
            txtSku: {
                required: "Este campo es obligatorio",
                number: "Este campo debe ser numerico",
            }, txtNombre: {
                required: "Este campo es obligatorio",
                minlength: "Este campo debe tener minimo 3 caracteres"
            }, txtPrecio: {
                required: "Este campo es obligatorio",
                number: "Este campo debe ser numerico"
            }, txtStock: {
                required: "Este campo es obligatorio",
                number: "Este campo debe ser numerico"
            }, txtImagen: {
                required: "Este campo es obligatorio",
            }, cmbCategoria: {
                required: "Este campo es obligatorio",
            }
            
        }
    })

})