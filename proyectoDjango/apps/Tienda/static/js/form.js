document.getElementById("valRut").style.display="none";
document.getElementById("valNombre").style.display="none";
document.getElementById("valCorreo").style.display="none";
document.getElementById("valDonacion").style.display="none";
document.getElementById("valPassword").style.display="none";

function validarFormulario() {
    let rut = document.getElementById("txtRut").value;
    let nombre = document.getElementById("txtNombre").value;
    let correo = document.getElementById("txtCorreo").value;
    let donacion = document.getElementById("numberDonacion").value;
    let password = document.getElementById("txtContraseña").value;



    if (rut.length == 0) {
        document.getElementById("valRut").style.display = "inline";
        document.getElementById("txtRut").classList.add("is-invalid")

    } else {
        document.getElementById("valRut").style.display = "none";
        document.getElementById("txtRut").classList.remove("is-invalid")
        document.getElementById("txtRut").classList.add("is-valid")
    }




    if (nombre.length == 0) {
        document.getElementById("valNombre").style.display = "inline";
        document.getElementById("txtNombre").classList.add("is-invalid")

    } else {
        document.getElementById("valNombre").style.display = "none";
        document.getElementById("txtNombre").classList.remove("is-invalid")
        document.getElementById("txtNombre").classList.add("is-valid")
    }




    if (correo.length == 0) {
        document.getElementById("valCorreo").style.display = "inline";
        document.getElementById("txtCorreo").classList.add("is-invalid")

    } else {
        document.getElementById("valCorreo").style.display = "none";
        document.getElementById("txtCorreo").classList.remove("is-invalid")
        document.getElementById("txtCorreo").classList.add("is-valid")
    }


    if (donacion.length == 0) {
        document.getElementById("valDonacion").style.display = "inline";
        document.getElementById("numberDonacion").classList.add("is-invalid")

    } else {
        document.getElementById("valDonacion").style.display = "none";
        document.getElementById("numberDonacion").classList.remove("is-invalid")
        document.getElementById("numberDonacion").classList.add("is-valid")
    }

    if (password.length == 0) {
        document.getElementById("valPassword").style.display = "inline";
        document.getElementById("txtContraseña").classList.add("is-invalid")

    } else {
        document.getElementById("valPassword").style.display = "none";
        document.getElementById("txtContraseña").classList.remove("is-invalid")
        document.getElementById("txtContraseña").classList.add("is-valid")
    }
}