/**
 * Función que maneja toda la logica de los historicos
 */
function historicsActionsController() {    
    
    var svg = '<svg height="100%" width=300>';
    var x = 10;
    for(var x of VERSIONES){
        svg += '<text x=50 y='+x+'>Primer texto de prueba</text> '+
        '<circle id="es_1" cx="10" cy="'+x+'" r="7" fill="rgb(64, 191, 64)" title="655c1eaccbed"></circle> '+
        '<path d="M10,60 L10,120" fill="none" stroke-width="3" stroke="rgb(140, 133, 125)"></path>';
        x += 50;
    }

    document.getElementById("TEMP").innerHTML = svg;

}