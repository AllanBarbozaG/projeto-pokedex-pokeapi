const recebePoke = 'ditto'
const requisicao = () => fetch(`https://pokeapi.co/api/v2/pokemon/${recebePoke}`)
.then(response => response.json())
.then(data => {
  console.log(data)
  return data
}) 
.catch(error => console.log(error)) 


async function retornaInformacoes() {
  const req = await requisicao()

  const name = document.querySelector('.name')
  name.innerText = `${req.name}`

  const id = document.querySelector('.id')
  id.innerText = `${req.id}`

  const moves = document.querySelector('.moves')
  moves.innerText = `${req.moves}`
  

} 

retornaInformacoes()



