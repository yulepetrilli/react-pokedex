import React, { useEffect, useState } from "react"

//Components
import PokemonCard from './PokemonCard';
import Pagination from "../layout/Pagination";


export default function PokemonList() {
    const [pokemonList, setPokemonList] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonPerPage] = useState(12);

    const fetchData = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0")
        const data = await response.json()
        setPokemonList(data?.results)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const indexOfLastPokemon = currentPage * pokemonPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
    const currentPokemon = pokemonList?.slice(indexOfFirstPokemon, indexOfLastPokemon);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <>
            <div className='row'>
                {
                    currentPokemon?.map((pokemon) => (
                        <PokemonCard
                            key={pokemon.name} 
                            name={pokemon.name}
                            url={pokemon.url}
                        />
                    ))
                }
            </div>
            <Pagination 
                pokmeonPerPage={pokemonPerPage} 
                total={pokemonList?.length} 
                paginate={paginate}
            />
        </>
    );
};
