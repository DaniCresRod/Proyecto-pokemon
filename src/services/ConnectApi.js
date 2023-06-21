export default async function ConnectApi(onePokemon){
    
        try{
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+onePokemon);
            const data = await response.json();

            console.log(data);

            return "2";
        }
        catch{
            console.log("That Pokemon Doesn't exist! (yet)");
            return "1"
        }
    
}