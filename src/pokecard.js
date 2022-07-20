import React, {Component} from 'react'
import './pokecard.css'

class Pokecard extends Component{
    render(){
        const {id,name,type,base_experience,} = this.props
        return(
            <div className='pokecard'>
                <h1>{name}</h1>
                <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id<=999?`00${id}`.slice(-3):id}.png`} alt='pok' />
                <p>Type: {type}</p>      
                <p>EXP: {base_experience}</p>      
            </div>
        )
    }

}

export default Pokecard