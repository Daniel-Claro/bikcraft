// Ativar Links do Menu, em console.log(link) dentro do link tenho a inforamção do Href, e TENHO A INFORMAÇÃO NO MEU SITE, DO BROWSER EM GERAL, A URL. ENTÃO QUERO VERIFICAR SE ESSA URL CONTÉM A INFORMAÇÃO bicicletas.html no caso é o href do link. INCLUDES É UM METODO DA STRING
//console.log('javascript'.includes(java)); <- Exemplo

const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href; // Esse objeto tá dentro do window. qualquer obj tipo window pd acessar assim
  const href = link.href;
  if (url.includes(href)) { // AQUI TEMOS DUAS FORMAS, veja abaixo: / METODO INCLUDES EM TD String
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);


//const parametros = location.search;
//console.log(parametros); Apareceu os parametros da URL, tenho q ter uma forma de Extrair isso.

/**Ativar Items do Orçamento. PRIMEIRA INFORMAÇÃO DA PÁG Q QUERO PUXAR, É MEU URL, PARA SEPARAR OS PARAMETROS. dentro de location é um Objeto com diversas informações, umas delas é o search uma propriedade de busca.*/

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);




//  Perguntas Frequentes
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) { // TO DENTRO DE EVENTO TENHO SEMPRO ACESSO AO PARAMETRO Event
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls"); // PUXAR VALOR DE UM ATRIBUTO
  const resposta = document.getElementById(controls);
  //const resposta = document.querySelector('#' + controls); Posso fazer assim também...
  
  resposta.classList.toggle("ativa"); //POSSO COLOCAR RESPOSTA ACIMA
 //const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa); //SETO O ATT Q QUERO MODIFICAR, E PASSO O NOVO VALOR
}                                                //ADC 1X problema qnd clico dnv n some, só tá adc 1x, true
                                                 //no att set n tenho toggle só seto um Valor, DUAS FORMAS
function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);




 // Galeria de Bicicletas, DENTRO DO WINDOW TENHO METODO matchMedia, como é window, posso escrever puro, matches verifica se a mediaquerie é verdade ou falsa se tá min de 1000px ou não

 const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches; 
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

// Animação

if (window.SimpleAnime) {
  new SimpleAnime();
}


if (window.ClipboardJS) {
  new ClipboardJS(".introducao-conteudo p");
}






//Passo o link para ver qual link é igual a url, O problema disso é quando clico em contato vou no Formulário e aperto Enviar Mensagem, aparece parametros na url, continuo na pág contato, Mas o Url em si não é mais igual, msm com esses parametros, quero que funcione, como? Acima:

/** if (url === href) {
 console.log(link);
 
 } 
 

function ativarProduto(parametro) {
  //console.log(parametro); Já tenho extraido os dois nomes seguro e prata, e cm esses nomes, vou no html e
verico quais elementos possui seguro e prata como nome, e a partir dai ativo eles ou não. 

*/