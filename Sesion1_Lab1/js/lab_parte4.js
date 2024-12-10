// Solicitar entrada del usuario
let nombreUsuario = prompt("Ingrese su nombre:");
let edadUsuario = parseInt(prompt("Ingrese su edad:"));
let esEstudianteUsuario = prompt("¿Es estudiante? (sí/no)").toLowerCase() === "sí";

// Verificar si el usuario es mayor de edad
let esMayorDeEdadUsuario = edadUsuario >= 18;

// Determinar si tiene derecho a descuento por ser estudiante
let tieneDescuento = esEstudianteUsuario;

// Mostrar mensaje personalizado
let mensajeFinal = `${nombreUsuario}, tienes ${edadUsuario} años.`;
if (esMayorDeEdadUsuario) {
    mensajeFinal += " Eres mayor de edad.";
} else {
    mensajeFinal += " No eres mayor de edad.";
}

if (tieneDescuento) {
    mensajeFinal += " Tienes derecho a descuento por ser estudiante.";
} else {
    mensajeFinal += " No tienes derecho a descuento por no ser estudiante.";
}

console.log(mensajeFinal);
