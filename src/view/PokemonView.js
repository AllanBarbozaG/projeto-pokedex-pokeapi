async function retornaInformacoes(img_gif, arrayStats, arrayMoves) {
  await consultarStats();

  const hp = document.querySelector('#hp');
  const atk = document.querySelector('#atk');
  const def = document.querySelector('#def');
  const spd = document.querySelector('#spd');
 
  hp.innerText = `HP: ${arrayStats[0]}`;
  atk.innerText = `Atk: ${arrayStats[1]}`;
  def.innerText = `Def: ${arrayStats[2]}`;
  spd.innerText = `Spd: ${arrayStats[3]}`;

  const move1 = document.querySelector('#move1');
  const move2 = document.querySelector('#move2');
  const move3 = document.querySelector('#move3');

  console.log(arrayMoves.length)
  if (arrayMoves.length == 1) {
    console.log(arrayMoves.length)
    move1.innerText = `${arrayMoves[0]}`;
  } else {
    move1.innerText = `${arrayMoves[0]}`;
    move2.innerText = `${arrayMoves[1]}`;
    move3.innerText = `${arrayMoves[2]}`;
  }  

  const img = document.querySelector('#img-div')
  img.innerHTML = `<img id="poke-img" src="${img_gif}">`
  

  



}