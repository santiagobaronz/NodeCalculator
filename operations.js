/**
 * The function takes two numbers and returns the result of the operation.
 * @param num1 - The first number to be used in the operation.
 * @param num2 - The second number to be used in the operation.
 */
const sumar = (num1, num2) => num1 + num2;
const restar = (num1, num2) =>  num1 - num2;
const multiplicar = (num1, num2) =>  num1 * num2;
const dividir = (num1, num2) => num1 / num2;

/**
 * It takes a number, multiplies it by all the numbers below it, and returns the result.
 * @param num - The number you want to find the factorial of.
 * @returns The factorial of the number passed as an argument.
 */
const factorial = (num) => {
    let resultado = 1;
    for (let i = 2; i <= num; i++) {
        resultado = resultado*i;
    }
    return resultado;
}

/**
 * It takes two numbers and checks if they are prime relative to each other
 * @param num1 - The first number to be checked
 * @param num2 - The second number to be checked
 * @returns A string.
 */
const primoRelativo = (num1,num2) => {
    let nMenor;
    (num1 < num2) ? nMenor = num1 : nMenor = num2;
    for(let i = 2; i < nMenor; i++){
        if(num1 % i == 0 && num2 % i == 0){
            return "No, no son primos relativos";
        }
    }
    return "Si, si son primos relativos";
}

/* Exporting the functions to be used in other files. */
module.exports = {
    sumar,
    restar,
    multiplicar,
    dividir,
    factorial,
    primoRelativo
}