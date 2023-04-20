alert("Pasajero, se le recuerda que para abordar el avión debe tener \n" 
+ "en mano su pasaporte y su boleto de embarque. Manténgase \n"
+ "atento a los avisos mediante esta plataforma. \n" )


$(document).ready(function() {
  // Función para actualizar la hora cada segundo
  setInterval(function() {
    // Obtener la hora actual
    var fecha = new Date();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
    // Formatear la hora en un formato legible
    var horaFormateada = hora + ':' +  minutos ;
    // Actualizar el texto del elemento con el id "horaEnEsteMomento"
    $('#horaEnEsteMomento').text(horaFormateada);
  }, 1000); // Actualizar la hora cada segundo (1000 milisegundos)
});



$(document).ready(function() {
  // Función para actualizar la hora cada segundo
  setInterval(function() {
    // Obtener la hora actual
    var fecha = new Date();
    var dia = fecha.getDay();
    var mes = fecha.getMonth();
    var anio = fecha.getFullYear();
    // Formatear la hora en un formato legible
    var fecha  = dia + '-' +  mes + '-' + anio;
    // Actualizar el texto del elemento con el id "horaEnEsteMomento"
    $('#fechaDeEsteMomento').text(fecha);
  }, 1000); // Actualizar la hora cada segundo (1000 milisegundos)
});


// Generar un número aleatorio entre 1 y 2000
var numeroAleatorioDosMil = Math.floor(Math.random() * 2000) + 1;

var numeroAleatorioDies = Math.floor(Math.random() * 10) + 1;

// Obtener el elemento con el id "vueloAleatorio" y actualizar su contenido con el número aleatorio generado
document.getElementById("vueloAleatorio").textContent = numeroAleatorioDosMil;
document.getElementById("terminalAleatorio").textContent = numeroAleatorioDies;