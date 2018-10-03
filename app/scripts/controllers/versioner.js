/**
 * Función para manejar toda la logica de control de versiones
 */
function versionerActionsController() {
    var usuarios = document.getElementById("usuarios");
    for(x of USUARIOS){
        var opcion = document.createElement("option");
        opcion.value = x.usuario;
        opcion.innerHTML = x.usuario;
        usuarios.appendChild(opcion);
    }

    document.getElementById("commander").onclick = function(){
        var valorComando = document.getElementById("inp-command").value;
        var comando = new Comando();
        var fecha = new Date();

        comando.texto = document.getElementById("ver-text").value;
        comando.comando = valorComando.split("-")[0];
        comando.mensaje = valorComando.substring(valorComando.indexOf('"'));
        comando.fecha = fecha.toLocaleDateString("en-US");
        comando.hora = fecha.getHours()+":"+fecha.getMinutes();
        comando.hash = guid();
        comando.usuario = document.getElementById("usuarios").value;
        VERSIONES.push(comando);

        document.getElementById("inp-command").value = '';
        document.getElementById("ver-text").value = '';
        
        alert("Ok");
        
    };

    function guid() {
        function s4() {
          return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
      }
};
