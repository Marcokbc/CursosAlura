const numerosPares = [2,4,6];
const numerosImpares = [1,3,5];

const numeros = [...numerosImpares, ...numerosPares];

const [num1,num2, ...outrosNumeros] = [1,2,3,4,5,6,7];

const pessoa = {
    nome: "João",
    idade: 24
}

const pessoaTelefone = {...pessoa, telefone: 123123123};

const {idade} = pessoa;

function imprimirDados({nome,idade}){
    console.log(nome,idade);
}

imprimirDados(pessoa);