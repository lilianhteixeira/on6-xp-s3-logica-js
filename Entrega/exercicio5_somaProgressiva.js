/**
 *Crie uma função que receba um número e devolva uma soma progressiva. Por exemplo, recebendo o 
 * número 5, a função deve retornar 15, ou seja, o resultado de 1 + 2 + 3 + 4 + 5.
 * 
 * @title Soma progressiva do valor informado.
 * @author Lílian Teixeira - <lilianhteixeira@gmail.com>
 */

const readline = require('readline-sync');
const valor = parseFloat(readline.question("Insira o valor a ser somado: "));

function somaProgressiva(valor){
    let soma = 0;
    for(let contador = valor; contador >= 1; contador--){
        soma += contador;
    }
    return soma;
}

 console.log("O valor da soma progressiva do número " + valor + " é igual a " + somaProgressiva(valor) + ".");