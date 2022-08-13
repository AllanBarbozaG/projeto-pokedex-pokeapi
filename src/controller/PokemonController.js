async function consultarStats() {
  const req = await requisicao();
  
  const reqMoves = req.moves
  console.log(reqMoves[0] )

  const moves = []
  for (let i = 0; i <= 2; i++) {
    moves.push(req.moves[i].move.name)
  } // consertar bug que não reconhece o pokemon ditto, por ter apenas 1 movimento.
  console.log(moves)
         
  const hp = await req.stats[0].base_stat;
  const atk = await req.stats[1].base_stat;
  const def = await req.stats[2].base_stat;
  const spd = await req.stats[5].base_stat;

  const gif = req.sprites.versions['generation-v']['black-white'].animated.front_default;
  const imgDefault = req.sprites.front_default;

  try {
    if (gif) {
      reqMoves.length == 1 ? 
      retornaInformacoes(gif, [hp, atk, def, spd], [reqMoves[0].move.name]) :
      retornaInformacoes(gif, [hp, atk, def, spd], moves);
    } else if (!gif) {
      retornaInformacoes(imgDefault, [hp, atk, def, spd], moves );
    } else {
      throw new Error('Pokemon não possui imagem padrão a ser exibida.');
    }
  } catch (error) {
    console.log(error);
  }
}







