import React from 'react'
import { useRoutes } from 'react-router-dom'
import DashBoard from "./layout/DashBoard";
import PokemonData from './pokemonDetails/PokemonData';

export default function Routes() {
    const element = useRoutes([
        {path: '/', element: <DashBoard/> },
        {path: 'pokemon/:pokemonIndex', element: <PokemonData/> }

    ]);

    return element;
}