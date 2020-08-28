/**
 * Faça um programa que receba uma temperatura em Fahrenheit e chame uma função que converta 
 * para Celsius. 
 * C = F-32 * 5 / 9
 * 
 * @title Conversor de temperatura - Fahrenheit para Celsius
 * @author Lílian Teixeira - <lilianhteixeira@gmail.com>
 */

const readline =  require('readline-sync');
const temperatura = parseFloat(readline.question("Insira a temperatura em Fahrenheit: "));

function converteCelsius(temperatura){
    let conversor = (temperatura - 32) * 5 / 9;
    return conversor;
}

let temperaturaConvertida = converteCelsius(temperatura);
console.log("A temperatura em Fahrenheit é " + temperatura + " e a temperatura em Celsius é " + temperaturaConvertida + ".");