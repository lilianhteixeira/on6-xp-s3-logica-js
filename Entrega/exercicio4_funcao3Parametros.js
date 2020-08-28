/**
 * Crie uma função com as seguintes características:
 *  - A função deve receber 3 parâmetros
 *  - Se somente um argumento for passado, retorne o valor do argumento
 *  - Se dois parâmetros forem passados, retorne a soma dos dois parâmetros
 *  - Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, e o resultado
 * dividido pelo terceiro.
 *  - Se nenhum argumento for passado, retorne "não recebeu parâmetro".
 * 
 * @title Função que recebe 3 parâmetros
 * @author Lílian Teixeira - <lilianhteixeira@gmail.com>
 */

 const readline = require('readline-sync');
 const valor1 = parseFloat(readline.question("Insira o primeiro valor: "));
 const valor2 = parseFloat(readline.question("Insira o segundo valor: "));
 const valor3 = parseFloat(readline.question("Insira o terceiro valor: "));

 function recebe3parametros(valor1, valor2, valor3){

    if(!valor1 && !valor2 && !valor3){
        return "Não recebemos nenhum parâmetro.";
    } else if(valor1 && !valor2 && !valor3){
        return "A função recebeu esse valor: " + valor1;
    } else if(!valor1 && valor2 && !valor3){
        return "A função recebeu esse valor: " + valor2;
    } else if(!valor1 && !valor2 && valor3){
        return "A função recebeu esse valor: " + valor3;
    } else if(valor1 && valor2 && !valor3){
        let soma = valor1 + valor2;
        return "A função recebeu esses valores: " + valor1 + " e " + valor2 + ". A soma desses valores é: " + soma;
    } else if(valor1 && !valor2 && valor3){
        let soma = valor1 + valor3;
        return "A função recebeu esses valores: " + valor1 + " e " + valor3 + ". A soma desses valores é: " + soma;
    } else if(!valor1 && valor2 && valor3){
        let soma = valor2 + valor3;
        return "A função recebeu esses valores: " + valor2 + " e " + valor3 + ". A soma desses valores é: " + soma;
    } else {
        let calculoParametros = (valor1 + valor2) / valor3;
        return "A função recebeu todos os valores, que são: " + valor1 + ", " + valor2 + " e " + valor3 + 
        ". A soma do primeiro e segundo valor, dividido pelo terceiro é: " + calculoParametros + ".";
    }
 }

  console.log(recebe3parametros(valor1, valor2, valor3));
