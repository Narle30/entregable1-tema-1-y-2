// Declara dos variables booleanas
let esMayorDeEdad = true;
let tieneLicencia = false;

// Uso de operadores lógicos para determinar si puede conducir
let puedeConducir = esMayorDeEdad && tieneLicencia;
console.log("¿Puede conducir?", puedeConducir);

// Concatenación de strings y template literals
let saludo = "¡Bienvenido " + nombre + "!";
console.log(saludo);

// Usando template literals
let mensaje = `Hola ${nombre}, tu edad es ${edad} años y es ${esEstudiante ? "estudiante" : "no estudiante"}.`;
console.log(mensaje);
