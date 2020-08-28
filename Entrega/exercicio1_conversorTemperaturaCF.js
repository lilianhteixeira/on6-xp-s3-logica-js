/**
 * Faça um programa que receba uma temperatura em Celsius e chame uma função que converta 
 * para Fahrenheit. 
 * F = 9*C/5 + 32
 * 
 * @title Conversor de temperatura - Celsius para Fahrenheit
 * @author Lílian Teixeira - <lilianhteixeira@gmail.com>
 */

const readline =  require('readline-sync');
const temperatura = parseFloat(readline.question("Insira a temperatura em graus Celsius: "));

function converteFahrenheit(temperatura){
    let conversor = 9 * (temperatura/5) + 32;
    return conversor;
}

let temperaturaConvertida = converteFahrenheit(temperatura);
console.log("A temperatura em Celsius é " + temperatura + " e a temperatura em Fahrenheit é " + temperaturaConvertida + ".");