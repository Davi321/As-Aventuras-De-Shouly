function setup() {
  createCanvas(windowWidth, windowHeight);
  botaoGerenciador = new BotaoGerenciador('Jogar', width / 2-50, height / 2);
  botaoGerenciadorGO = new BotaoGerenciador('Tentar Novamente', width / 2-150, height / 2);
  frameRate(30);

  telaInicial = new TelaInicial();
  jogo = new Jogo();
  gameOver = new GameOver();

  cenas = {
    telaInicial,
    jogo,
    gameOver
  };

  jogo.setup();

  //somDoLobby.loop();
}

function keyPressed(key) {
  if (key == 'ArrowUp') {
    personagem.pula()
    somDoPulo.play()
  }
}

function reset(){
  jogo.reset();
  vida.reset();
  pontuacao.reset();
}

function keyPressed() {
  if (key === 'ArrowUp') {
    personagem.pula()
    somDoPulo.play()
  }
  //jogo.keyPressed(key);  
}

function draw() {

  // Criado uma condicional para verificar se a cena está sendo trocada.
  if (cenaAtual != cenaAnterior) {

    // Aciona os processos de carregamento da cena.
    cenas[cenaAtual].load();

    // Se a cena anterior existir.
    if (cenaAnterior.length > 0) {

      // Aciona os processos de fechamento da cena.
      cenas[cenaAnterior].close();
    }
    
    // Reseta o Jogo caso um Game Over tenha acontecido.
    if (cenaAnterior == 'gameOver'){
      reset();
    }
    
    // Atribui a cena atual como anterior para proximo ciclo.
    cenaAnterior = cenaAtual;
    
    
  }

  cenas[cenaAtual].draw();
}