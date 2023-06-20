import gameData from "./data/data";

/// Função para calcular o número de inversões entre duas classificações
function countInversions(arr1, arr2) {
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
      if (!arr2.includes(arr1[i])) {
        count++;
      }
    }
    return count;
  }
  
  // Função para recomendar jogos com base nas preferências do usuário
  function recommendGames(preferences, games) {
    // Array para armazenar as inversões de cada jogo
    let inversions = [];
  
    // Calcula as inversões para cada jogo
    for (let i = 0; i < games.length; i++) {
      let game = games[i];
      let gameGenres = game.genre;
      let gameRating = parseFloat(game.rating);
      let gameYear = parseInt(game.year);
  
      // Exemplo de cálculo de inversões baseado nas preferências do usuário
      let genreInversions = countInversions(preferences.genre, gameGenres);
      let ratingInversions = Math.abs(preferences.rating - gameRating);
      let yearInversions = Math.abs(preferences.year - gameYear);
  
      // Soma as inversões e armazena no array
      let totalInversions = genreInversions + ratingInversions + yearInversions;
      inversions.push({ game: game, inversions: totalInversions });
    }
  
    // Ordena os jogos com base no número de inversões (do menor para o maior)
    inversions.sort((a, b) => a.inversions - b.inversions);
  
    // Retorna apenas os jogos recomendados (com menor número de inversões)
    let recommendedGames = inversions.filter((game) => game.inversions === inversions[0].inversions);
    return recommendedGames.map((game) => game.game);
  }
  
  
  // Exemplo de uso
  const preferences = {
    genre: ["Crime","Comedy"],
    rating: 7.3,
    year: 2020
  };
  
  const games = [
    {
      name: "Stargunner",
      genre: ["Action", "Sci-Fi"],
      rating: "",
      year: "1996",
      image: "https://m.media-amazon.com/images/M/MV5BZWE3ZDc3ZDYtOGU2Yi00ZGNjLTlmZmYtOWUwYjA5NjI0Njk2XkEyXkFqcGdeQXVyNTM2MDQ5NTU@._V1_UY98_CR8,0,67,98_AL_.jpg"
    },
    // Adicione outros jogos aqui
  ];
  export function exec(){  const recommendedGames = recommendGames(preferences, gameData);
    console.log(recommendedGames);}
