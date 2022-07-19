/* Importing the functions from the operations.js file and the readline-sync module. */
const {sumar, restar, multiplicar, dividir, factorial, primoRelativo} = require("./operations");
const readLineSync = require('readline-sync');

/* Defining the text that will be displayed to the user. */
const defaultText = "Escoja una operacion:\n1). Suma\n2). Restar\n3). Multiplicar\n4). Divivir\n5). Factorial\n6). Primos relativos\n0). Salir\nRespuesta: ";
const invalidText = "=================== \n  Numero invalido \n===================";
const exitText = "====================================== \n  Gracias por usar esta calculadora! \n======================================";

/* Declaring a variable called userAns. */
let userAns;

/**
 * It takes a number as an argument and returns an array of two numbers.
 * @param option - The option the user chose from the menu.
 * @returns An array of numbers.
 */
const requestNumbers = (option) => {
    let numbers = [], number1 = 0, number2 = 0;

    if(option != 5){
        number1 = parseInt(readLineSync.question("Escriba un primer numero: ").trim());
        numbers.push(number1);
        number2 = parseInt(readLineSync.question("Escriba un segundo numero: ").trim());
        numbers.push(number2);
    }else{
        number1 = parseInt(readLineSync.question("Escriba un numero: ").trim());
        numbers.push(number1);
    }

    return numbers;
    
}

/* A while loop that will run until the userAns variable is equal to 0. */
while (userAns !== 0) {

    console.log("===============================");

    /* Asking the user to choose an option from the menu. */
    userAns = parseInt(readLineSync.question(defaultText).trim());
    
    /* Checking if the userAns is greater than 0 and less than or equal to 7. If it is, it will run the
    code inside the if statement. If it is not, it will check if the userAns is equal to 0. If it
    is, it will run the code inside the else if statement. If it is not, it will run the code inside
    the else statement. */
    if(userAns > 0 && userAns <= 7){

        /* Calling the requestNumbers function and passing the userAns variable as an argument. */
        let numbers = requestNumbers(userAns);
        /* Declaring two variables called a and b and assigning them the values of the first and second
        elements of the numbers array. */
        let a = numbers[0], b = numbers[1];

        /* A switch statement that checks the value of the userAns variable. */
        switch(userAns){
            case 1:
                console.log(`Resultado de sumar ${a} + ${b}: ${sumar(a,b)}`);
            break;
            case 2:
                console.log(`Resultado de la restar ${a} - ${b}: ${restar(a,b)}`);
            break;
            case 3:
                console.log(`Resultado de multiplicar ${a}x${b}: ${multiplicar(a,b)}`);
            break;
            case 4:
                console.log(`Resultado de dividir ${a}/${b}: ${dividir(a,b)}`);
            break;
            case 5:
                console.log(`Resultado del factorial de ${a}: ${factorial(a)}`);
            break;
            case 6:
                console.log(`¿Son primos relativos ${a} y ${b}?: ${primoRelativo(a,b)}`);
            break;
        }

    }else if(userAns == 0){
        console.log(exitText);
    }else{
        console.log(invalidText);
    }
    
}