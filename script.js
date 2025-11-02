// Funções Nomeadas
function soma(a, b) {
    return a + b;
  }
  
  function subtracao(a, b) {
    return a - b;
  }
  
  function multiplicacao(a, b) {
    return a * b;
  }
  
  function divisao(a, b) {
    if (b === 0) {
      return "Erro: divisão por zero!";
    }
    return a / b;
  }
  
  // Função que manipula arrays
  // Usando arrow function para filtrar números pares
  const filtrarPares = (numeros) => numeros.filter(n => n % 2 === 0);
  
  // Usando função anônima para calcular média
  const calcularMedia = function (numeros) {
    const soma = numeros.reduce((acc, val) => acc + val, 0);
    return soma / numeros.length;
  };
  
  // Função de Callback
  function executarOperacao(a, b, operacao) {
    // "operacao" é umm callback
    return operacao(a, b);
  }
  

  console.log("Soma:", soma(10, 5));
  console.log("Subtração:", subtracao(10, 5));
  console.log("Multiplicação:", multiplicacao(10, 5));
  console.log("Divisão:", divisao(10, 5));
  
  const numeros = [1, 2, 3, 4, 5, 6];
  console.log("Números pares:", filtrarPares(numeros));
  console.log("Média dos números:", calcularMedia(numeros));
  
  // Testando a função callback
  console.log("Callback (usando soma):", executarOperacao(8, 2, soma));
  console.log("Callback (usando multiplicação):", executarOperacao(8, 2, multiplicacao));
  