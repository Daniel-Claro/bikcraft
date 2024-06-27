const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) { 
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls"); 
  const resposta = document.getElementById(controls);
  

  //QND CLICO NO ELEMENTO E INSPECIONO, A PERGUNTA CONTINUA COM ARIA EXPANDED FALSE, TEM Q MUDAR ESSE VALOR PARA TRUE, SETO O ATT Q QUERO MODIFICAR, E PASSO O NOVO VALOR, CLIQUEI MUDOU PARA TRUE clico dnv  ESCONDE E CONTINUA TRUE, Pq só tá mudando para true, classList tenho toggle no setAttribute não, nele só seto um valor especifico, oq fazer? 01 FORMA É ADC resposta.classList acima, e posso verificar se resposta contém ativo ou não, se sim, adc true pq tá expandido, se n conter, false. 
                                             

  resposta.classList.toggle("ativa"); //POSSO COLOCAR RESPOSTA ACIMA
 const ativa = resposta.classList.contains("ativa"); // VERIFICAR SE TEM ATIVA
  pergunta.setAttribute("aria-expanded", ativa); 
}                                             
                                                
function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);
