const pesquisar = document.querySelector('#input-usuario-nome-poke');

const requisicao = () => fetch(`https://pokeapi.co/api/v2/pokemon/${pesquisar.value}`)
.then(response => response.json())
.then(data => {
  console.log(data);
  return data;
}) 
.catch(error => console.log(error));

async function retornaInformacoes() {
  const req = await requisicao();

  const name = document.querySelector('.name');
  name.innerText = `Nome: ${req.name}`;

  const id = document.querySelector('.id');
  id.innerText = `ID: ${req.id}`;

  const moves = document.querySelector('.moves');
  moves.innerText = `${req.moves[0].move.name}`;

  
} 

pesquisar.addEventListener('input', async () => {
  
  const req = await requisicao()
  console.log(pesquisar.value)

  retornaInformacoes()

  const img = document.querySelector('#img-div')

  try {
    if(req.sprites.versions['generation-v']['black-white'].animated.front_default) {
      img.innerHTML = 
      `
        <img id="poke-img" src='${req.sprites.versions['generation-v']['black-white'].animated.front_default}'>
      `;
      console.log('ok')
    } else if (req.sprites.front_default) {
      img.innerHTML = 
      `
        <img id="poke-img" src='${req.sprites.front_default}'>
      `;
    } else {
      throw new Error('Pokemon não possui imagem padrão a ser exibida.')
    }

  } catch(error) {
    console.log(error)
  }

  
  console.log(req.sprites.front_default)

})











