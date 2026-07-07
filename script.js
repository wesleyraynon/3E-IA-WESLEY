const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
//acima criação das constantes JS dos elementos HTML
const perguntas = [
    {
        enunciado: "A guitarra elétrica possui diversas partes fundamentais que definem a sua afinação, timbre e tocabilidade. Qual é a função principal das tarraxas, peças localizadas no headstock (mão) do instrumento?: [
            {
                texto: "Controlar a tensão das cordas, permitindo afinar o instrumento adequadamente.",
                afirmacao: "Controlar a tensão das cordas, permitindo afinar o instrumento adequadamente. "
            },
            {
                texto: "Captar a vibração mecânica das cordas e transformá-la em sinal elétrico.",
                afirmacao: " Essa definição está incorreta para as tarraxas. A peça responsável por captar o som e gerar o sinal elétrico é o captador."
            }
        ]
    },
    {
        enunciado: " O posicionamento correto da mão e dos dedos no braço da guitarra é crucial para evitar lesões e garantir fluidez. Segundo grandes mestres, qual deve ser o papel e a posição ideal do polegar da mão esquerda (para destros)?",
        alternativas: [
            {
                texto: "icar totalmente escondido e apoiado na parte de trás do braço, servindo de apoio para os outros dedos."
            },
            {
                texto: "Excelente resposta! Manter o polegar relaxado e apoiado atrás do braço garante mais agilidade e evita tensões musculares."
            }
        ]
    },
    {
        enunciado: "Na teoria musical aplicada à guitarra, o campo harmônico é um conceito fundamental para a criação de melodias e acompanhamentos. O que é exatamente o Campo Harmônico?: [
            {
                texto: "Uma linha horizontal de notas tocadas sucessivamente, representando uma única melodia.
                afirmacao: "Essa é a definição de escala. O campo harmônico, por outro lado, é uma estrutura vertical onde as notas são tocadas juntas para formar acordes."
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    }
    
    
let atual = 0; //variavel do inicio da lista de perguntas
let perguntaAtual; //variavel correspondente a pergunta atual selecionada
let historiaFinal = ""; //variavel que guarda os textos das afirmações para formar a frase final da IA

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
//função que verifica se a ordem da pergunta atual é maior ou igual a das outras perguntas da lista. Se j[a foi todas, exibe o texto final]
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
} // codigo que mostra o texto de pergunta atual extraido do item enunciado.

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    } //Para a constante alternativa das alternativas é criado um botão novo com alternativa diferente a cada vez que seleciona uma resposta pelo clique
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
} //uma função seleciona as resposta e que vai juntando as afirmaçÕes delas em uma variavel historiaFinal selecionadas de acordo com as opçÕes selecionadas

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
} //função que mostra o Resultado final iniciando com nov um breve texto na caixa de perguntas e que o resultado do final é inserido com o texto guardado na varivel historiaFInal com um espaçamento vazio criado na caixa de alternativas.

mostraPergunta(); //função geral que mostra a pergunta
