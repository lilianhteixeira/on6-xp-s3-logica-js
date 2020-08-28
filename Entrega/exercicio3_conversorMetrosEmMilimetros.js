/**
 * Faça um programa que receba um valor em metros e chame uma função que converta em milímetros.
 * 
 * @title Conversor de medida, de metros para milímetros.
 * @author Lílian Teixeira - <lilianhteixeira@gmail.com>
 */

const readline = require('readline-sync');
const tamanho = parseFloat(readline.question("Insira o tamanho em metros: "));

function converteEmMetros(tamanho){
    let conversor = tamanho * 1000;
    return conversor;
}

let medidaConvertida = converteEmMetros(tamanho);
console.log(tamanho + " metros equivale á " + medidaConvertida + " milímetros.");