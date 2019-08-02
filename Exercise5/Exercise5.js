class Pokemon {

   constructor({id, name, type}) {
        this.id = id;
        this.name = name;
        this.type = type;
     }
     
    Attack(attackname) {
        return `${this.name} used ${attackname} and its super effective!"`;
    }
    
}


const pokemon = new Pokemon({id: 1, name: 'Bulbasaur', type: 'Grass'});

console.log(pokemon.Attack('punch'));

