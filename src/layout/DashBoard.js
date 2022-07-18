import React from 'react';
import PokemonList from "../pokemonList/PokemonList";

export default function DashBoard() {
  return (
    <div className='row'>
        <div className='col'>
            <PokemonList />
        </div>
    </div>
  )
}