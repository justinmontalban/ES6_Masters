//given these data
var pokemons = [
	{id: 1, name: 'Bulbasaur', type: 'Grass'},
	{id: 2, name: 'Ivaysaur', type: 'Grass'},
	{id: 4, name: 'Charmander', type: 'Fire'},
	{id: 7, name: 'Squirtle',  type: 'Water'},,,
	
];

let findWhere = (pokemons,{ type }) => console.log(pokemons.filter(poke => poke.type == type));

//calling this:
findWhere(pokemons, {type: 'Grass'});
