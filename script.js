let numeroSecreto; // O número que o jogaria precisa adivinhar 
let contadorDeChances = 1; // Começa na primeira chance 
const MAX_CHANCES = 10; // Número máximo de chances 

const campoPalpite = document.querySelector('#campoPalpite');
const botaoEnviarPalpite = document.querySelector('#botaoEnviarPalpite');
const botaoReiniciar = document.querySelector('#botaoReiniciar');

const mensagemElement = document.querySelector('.mensagem');
const palpitesAnterioresElement = document.querySelector('.palpites-anteriores');
const dicaElement = document.querySelector('.dica');
const chancesRestantesElement = document.querySelector('#chancesRestantes');

let listaDePalpites = []; // Array para guardar os palpites que o jogador já deu 

function iniciarJogo() {
    // Gerar um novo número secreto (entre 1 e 100)
    // Math.random() gera um número entre 0 (inclusive) e 1 (exclusive)
    // Multiplicamos por 100 para ter entre 0 e 99.99...
    // Adicionamos 1 para ter entre 1 e 100.99...
    // Math.floor() arredonda para o menor inteiro, então teremos entre 1 e 100.
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    console.log('Número Secreto (apenas para teste):', numeroSecreto); // Ajuda no debug!
}

// Resetar o contador de chances
contadorDeChances = 1;
chancesRestantesElement.textContent = MAX_CHANCES; // Mostra o total de chances

// Limpar as mensagens anteriores
mensagemElement.textContent = '';
palpitesAnterioresElement.textContent = '';
dicaElement.textContent = '';
listaDePalpites = [];


mensagemElement.style.color = '#f0f0f0'; // Cor padrão do texto
dicaElement.style.color = '#ffeb3b'; // Cor padrão da dica

// Reativar o campo de palpite e o botão de enviar
campoPalpite.disabled = false;
botaoEnviarPalpite.disabled = false;
campoPalpite.value = ''; // Limpa o campo de entrada
campoPalpite.focus(); // Coloca o cursor no campo para o usuário digitar

// Esconder o botão de reiniciar
botaoReiniciar.classList.add('hidden');
}

// 2. Função para verificar o palpite do jogador
function verificarPalpite() {
    //Pega o valor que o usuário digitou no campo e converte para número inteiro
    //parseInt() é importante porque o valor de um input é sempre uma string!
    const palpitesDoUsuario = parseInt()
}
