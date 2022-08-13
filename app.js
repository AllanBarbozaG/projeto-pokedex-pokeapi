const requisicao = () => fetch(`https://pokeapi.co/api/v2/pokemon/${pesquisar.value}`)
.then(response => response.json())
.then(data => {
  console.log(data);
  return data;
}) 
.catch(error => console.log(error));

const pesquisar = document.querySelector('#input-usuario-nome-poke');

pesquisar.addEventListener('input', async () => {
  const req = await requisicao()
  console.log(pesquisar.value)

  const img = document.querySelector('#img')
  img.innerHTML = 
  `
  <img src='${req.sprites.versions['generation-v']['black-white'].animated.front_default}'>
  `

})






async function retornaInformacoes() {
  const req = await requisicao();

  const name = document.querySelector('.name');
  name.innerText = `${req.name}`;

  const id = document.querySelector('.id');
  id.innerText = `${req.id}`;

  const moves = document.querySelector('.moves');
  moves.innerText = `${req.moves[0].move.name}`;

  console.log(req.sprites.versions['generation-v']['black-white'].animated.front_default);
  const img = document.querySelector('#img');
  img.innerHTML =
  `
   <img src='${req.sprites.versions['generation-v']['black-white'].animated.front_default}'>
  `;  
} 




