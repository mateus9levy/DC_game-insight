  // Preferências do usuário
  const preferenciasUsuario = {
    genero: "Action",
    classificacaoMinima: 7,
    anoPreferido: "2010"
  };
  
  // Função para calcular a contagem de inversões atualizada
  function calcularContagemInversoes(jogo, preferencias) {
    let contagem = 0;
  
    // Comparar gênero
    if (!jogo.genre.includes(preferencias.genero)) {
      contagem++;
    }
  
    // Comparar classificação
    if (parseFloat(jogo.rating) < preferencias.classificacaoMinima) {
      contagem++;
    }
  
    // Comparar ano
    if (jogo.year <= preferencias.anoPreferido) {
      contagem++;
    }
  
    return contagem;
  }
  
  // Função de recomendação de jogos
  export function recomendarJogos(jogos, preferencias) {
    // Calcular contagem de inversões para cada jogo
    const jogosComContagem = jogos.map(jogo => ({
      ...jogo,
      contagemInversoes: calcularContagemInversoes(jogo, preferencias)
    }));
  
    // Ordenar jogos por contagem de inversões (do menor para o maior)
    jogosComContagem.sort((a, b) => a.contagemInversoes - b.contagemInversoes);
  
    // Retornar lista de jogos recomendados
    return jogosComContagem;
  }
  
  // Executar a função de recomendação de jogos e imprimir resultados
  const jogosRecomendados = recomendarJogos(jogos, preferenciasUsuario);
  