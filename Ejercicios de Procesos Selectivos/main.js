function calcularRaizCuadrada(num, iteraciones) {
    let x0 = num / 2; // Aproximación inicial
    let resultado = x0;

    for (let i = 0; i < iteraciones; i++) {
        resultado = 0.5 * (resultado + num / resultado); // Fórmula de Newton-Raphson
    }

    return resultado;
}

const numero = 25; // Número del cual se quiere calcular la raíz cuadrada
const iteraciones = 5; // Número de iteraciones

const raiz = calcularRaizCuadrada(numero, iteraciones);
console.log(`La raíz cuadrada de ${numero} es aproximadamente ${raiz}`);
