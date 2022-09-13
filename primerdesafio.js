// Genero una función simple que calcule el factorial de un número, considerando que el dato ya fue validado
function factorial(valor) {
    let resultado;
    resultado = valor;

    if (valor > 0) {
        for (let i = resultado; i > 1; i--) {
            resultado = resultado * (i - 1);
            // console.log("mayor");
        }
    } else if (valor == 0) {
        resultado = 1;
        // console.log("cero");
    } else {
        resultado = null;
        // console.log("no existe");
    }
    // console.log(resultado);
    return resultado;
}

// Genero una función que pida el valor a calcular, y haga una validación de datos
function mostrarFactorial() {
    let valor;

    do {
        valor = prompt("Ingrese un número para calcular su factorial.");
        if (isNaN(valor)) {
            alert("Sólo se admiten valores numéricos positivos.")
        }
    } while (isNaN(valor));

    valor = parseInt(valor);

    if (valor >= 0) {
        console.log(`El factorial de ${valor} es ${factorial(valor)}`);
        alert(`El factorial de ${valor} es ${factorial(valor)}`);
    } else if (!isNaN(valor)) {
        console.log("El factorial de un número negativo no existe. Por favor, ingresar un número entero positivo.");
        alert("El factorial de un número negativo no existe. Por favor, ingresar un número entero positivo.");
    }
}

// Inicializo la variable en un string, para después comprobar el cambio de tipo de dato
let continuar = "";

do {
    mostrarFactorial();
    continuar = prompt("Si desea calcular un nuevo factorial, presione cualquier tecla. En caso contrario, presione la tecla ESC.");
} while (typeof (continuar) != 'object');


/*
DE ESTA MANERA ME DI CUENTA QUE AL PRESIONAR LA TECLA "ESC",
EL TIPO DE DATO DEVUELTO ERA UN OBJETO

let tecla = prompt();
console.log(isNaN(tecla));
console.log(typeof(tecla));
*/