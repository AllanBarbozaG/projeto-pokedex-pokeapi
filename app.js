const pesquisar = document.querySelector('#input-usuario-nome-poke');

const requisicao = () => fetch(`https://pokeapi.co/api/v2/pokemon/${pesquisar.value}`)
.then(response => response.json())
.then(data => {
  return data;
}) 
.catch(error => console.log(error));

pesquisar.addEventListener('input', () => retornaInformacoes());











