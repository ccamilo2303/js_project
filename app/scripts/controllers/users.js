/**
 * Función para agregar toda la logica de la administración 
 * usuarios
 */

function usersActionsController() {
    

    document.getElementById("btnGuardar").onclick = function (){
        var nombre = document.getElementById("nombre").value;
        var usuario = document.getElementById("usuario").value;
        var clave = document.getElementById("clave").value;
    
        USUARIOS.push({'nombre' : nombre, 'usuario': usuario, 'clave' : clave});
        var temp = "<table border='1'><tr><td>Nombre</td><td>Usuario</td><td>Clave</td></tr>";
        for(let a of USUARIOS){
            console.log(a);
            let x = a;
            temp+="<tr><td>"+x.nombre+"</td><td>"+x.usuario+"</td><td>"+x.clave+"</tr>"
        }
        temp += "</table>"
        document.getElementById("tablaTemp").innerHTML = temp;
    
        document.getElementById("nombre").value = '';
        document.getElementById("usuario").value = '';
        document.getElementById("clave").value = '';
    }

}

