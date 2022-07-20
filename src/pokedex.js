import React, {Component} from 'react'
import Pokecard from './pokecard'
import './pokedex.css'


class Pokedex extends Component{
    static defaultProps = {
        pokemon : [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ]
    }
    render(){
        const {pokemon,total,iswinner}= this.props
        return(    
            <div className='pokedex'>
                <h1>Pokedex!  </h1>
                <p>Total Experience: {total}</p>
                <p>{iswinner?"Winner":"Loser"}</p>
                <div className='poke'>
                    {pokemon.map(pokeman=>{
                        return <Pokecard key={pokeman.id} id={pokeman.id} name={pokeman.name} type={pokeman.type} base_experience={pokeman.base_experience}/>  
                    })}
                </div>
            </div>
        )
            
            
        
    }

}

export default Pokedex