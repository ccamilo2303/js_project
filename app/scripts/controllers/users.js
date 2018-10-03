/**
 * Función para agregar toda la logica de la administración 
 * usuarios
 */

function usersActionsController() {

    for (let a of USUARIOS) {
        agregarFila(a);
    }
    

    document.getElementById("btnGuardar").onclick = function () {

        var usuario = new Usuario();
        usuario.usuario = document.getElementById("usuario").value;
        usuario.nombre = document.getElementById("nombre").value;
        usuario.clave = document.getElementById("clave").value;
        USUARIOS.push(usuario);
                
        agregarFila(usuario);

        document.getElementById("nombre").value = '';
        document.getElementById("usuario").value = '';
        document.getElementById("clave").value = '';
    }

    function agregarFila(x){
        var tabla = document.getElementById("tablaTemp");
        var fila = tabla.insertRow();
        fila.insertCell(0).innerHTML = x.usuario;
        fila.insertCell(1).innerHTML = x.nombre;
        fila.insertCell(2).innerHTML = x.clave;
    }

}
