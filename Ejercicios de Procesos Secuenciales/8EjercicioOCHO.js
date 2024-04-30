//  8. Pedir al usuario su nombre y mostrarlo tres veces en la pantalla.
// Entrada: nombreUsuario=""(leer), nombreRepetido(proceso)
// Proceso: nombreRepetido=nombreUsuario+nombreUsuario+nombreUsuario
// Salida: nombreRepetido

// Algoritmo mostrarNombreTresVeces
//    Declarar nombreUsuario="", nombreRepetido=""
//    Escribir "Ingrese su nombre:"
//    Leer nombreUsuario
//    nombreRepetido=nombreUsuario+nombreUsuario+nombreUsuario
//    Escribir nombreRepetido
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

function mostrarNombreTresVeces() {
   let nombreUsuario = "", nombreRepetido = "",nombrerepetido2 = "", nombrerepetido3
   write("Ingrese su nombre:");
   nombreUsuario = read();
   write("Mostrar tres veces los nombres:");
   nombreRepetido = nombreUsuario 
   nombreRepetido2 = nombreUsuario
   nombreRepetido3 = nombreUsuario
   
   write(nombreRepetido);
   write(nombreRepetido2);
   write(nombreRepetido3);
}


mostrarNombreTresVeces();