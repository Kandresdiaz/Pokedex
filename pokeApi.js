const api = "https://pokeapi.co/api/v2/pokemon/"
const container =document.getElementById('container')

//crear las cartas de los pokemons 
async function fetchpokemon (pokemon){ 

    const respuesta = await fetch(api+pokemon)

    if(respuesta == 404){
        container.innerHTML=`<h2> el pokemon ${pokemon.toUpperCase()} no se encuentra </h2>`
    }else if(respuesta.status == 200){ 
        const carta =document.createElement('div')
        carta.id="carta"   
        container.appendChild(carta)     
        const data = await respuesta.json()  
        if (data.types[0].type.name === "electric") {
            carta.className+="electric"
        } 
        if (data.types[0].type.name === "water") {
            carta.className+="water"
        }
        if (data.types[0].type.name === "fire") {
            carta.className+="fire"
        }
        if (data.types[0].type.name === "normal") {
            carta.className+="normal"
        }
        if (data.types[0].type.name === "grass") {
            carta.className+="grass"
        }
        if (data.types[0].type.name === "poison") {
            carta.className+="poison"
        }
        if (data.types[0].type.name === "rock") {
            carta.className+="rock"
        }

        carta.innerHTML= `
        <h2> ${data.name.toUpperCase()}</h2>
        <div> <img src="${data.sprites.front_default}" alt="" /> </div>
        <div> tipo: ${data.types[0].type.name}</div>
        <div> img tipo:<img src="${data.types[0].type.url}" /></div>
        
        `
        console.log(data);
    }
}

// function llenar (a,b){
// a.innerHTML=b
// }

//console.log(fetchpokemon("pupitar"));

//buscar pokemon 
let boton =document.getElementById('boton')

boton.addEventListener("click",()=>{
    const pokemon =document.getElementById('buscar').value.toLowerCase();   
    // return fetchpokemon(pokemon);
    console.log(fetchpokemon(pokemon));
})

// for (let i = 0; i < 53; i++) {
//     fetchpokemon(i)
// }

