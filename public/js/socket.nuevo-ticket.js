//Comando para establecer la conexion

var socket = io();

var label = $('#lblNuevoTicket');

//escuchar suscesos
socket.on('connect', function() {
    console.log('Conectado al servidor');

});

socket.on('disconnect', function() {
    console.log('Perdimos coneccion con el servidor');
});

//on estado Actual
socket.on('estadoActual', function(resp) {
    console.log(resp);
    label.text(resp.actual);
});

$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
})