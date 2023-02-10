const api = "https://pokeapi.co/api/v2/pokemon/"
const container =document.getElementById('container')

//crear las cartas de los pokemons 
async function fetchpokemon (pokemon){ 

    const respuesta = await fetch(api+pokemon)

    if(respuesta == 404){
        container.innerHTML=`<h2> el pokemon ${pokemon.toUpperCase()} no se encuentr </h2>`

    }else if(respuesta.status == 200){ 

        const carta =document.createElement('div')
        carta.id="carta"   
        container.appendChild(carta)     
        const data = await respuesta.json()
        carta.innerHTML= `
        <h2> ${data.name.toUpperCase()}</h2>
        <div> <img src="${data.sprites.front_default}" alt="" /> </div>
        
        `

    }

}

//buscar pokemon 
let boton =document.getElementById('boton')
boton.addEventListener("click",()=>{
    const pokemon =document.getElementById('buscar').value.toLowerCase();   
    return fetchpokemon(pokemon);
})

for (let i = 0; i < 53; i++) {
    fetchpokemon(i)
}


    setTimeout(()=>pintar(),3000)

    function pintar(){
    document.getElementById('luz0').style.background = 'green';
    }