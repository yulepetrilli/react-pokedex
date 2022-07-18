import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

//Components
import PokemonDetail from "./PokemonDetail";


export default function PokemonData() {
    const [pokemon, setPokemon] = useState();
    const [species, setSpecies] = useState();

    //Conseguir id de pokemon a traves de la url
    const params = useParams();

    //Get api urls
    const pokemonDataUrl = `https://pokeapi.co/api/v2/pokemon/${params.pokemonIndex}`;
    const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${params.pokemonIndex}/`;

    const fetchData = async () => {
        const pokemonRes = await fetch(pokemonDataUrl);
        const pokemonData = await pokemonRes.json();
        setPokemon(pokemonData);

        const speciesRes = await fetch(pokemonSpeciesUrl);
        const speciesData = await speciesRes.json();
        setSpecies(speciesData);
    }
    
    useEffect(() => {
        fetchData()
    }, []);

    //Nombre
    const name = pokemon?.name
        .toLowerCase().split("-")
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");

    //Imagen
    const img = pokemon?.sprites?.front_default;

    //Datos de los stats
    let [hp, attack, defense, specialAttack, specialDefense, speed] = "";
    pokemon?.stats?.map((stat) => {
        switch(stat.stat.name){
            case 'hp':
                hp = stat['base_stat'];
            break;
            case 'attack':
                attack = stat['base_stat'];
            break;
            case 'defense':
                defense = stat['base_stat'];
            break;
            case 'special-attack':
                specialAttack = stat['base_stat'];
            break;
            case 'special-defense':
                specialDefense = stat['base_stat'];
            break;
            case 'speed':
                speed = stat['base_stat'];
            break;

        }  
    });

    //Altura de decimetros a metros
    const height = pokemon?.height / 10; 

    //Peso de hectogramos a kilogramos
    const weight = pokemon?.weight / 10;

    //Tipos
    const types = pokemon?.types?.map((type) => (type.type.name));

    //Habilidades
    const abilities = pokemon?.abilities?.map((ability) => {
        return ability.ability.name
            .toLowerCase().split("-")
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" ");
    }).join(", ");

    //Descripcion
    let description = "";
    species?.flavor_text_entries?.map((flavor) => {
        if(flavor.language.name === "en"){
            description = flavor.flavor_text;
            return;
        }
    });

    //% de genero
    const femaleRate =  species?.gender_rate * 12.5;
    const maleRate =  12.5 * (8 - species?.gender_rate);

    //% de captura
    const captureRate = Math.round((100 / 255) * species?.capture_rate);

    //Grupo huevo
    const eggGroups = species?.egg_groups?.map(group => {
        return group.name
            .toLowerCase().split("-")
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" ");
    }).join(", ");

    //Pasos de incubacion
    const hatchSteps = 255 * (species?.hatch_counter + 1);

    const growthRate = species?.growth_rate?.name.replace(/(^|\/|-)(\S)/g, s=>s.toUpperCase());

    return (
        <PokemonDetail 
            id={params.pokemonIndex}
            types={types}
            name={name}
            img={img}
            description={description}
            hp={hp}
            attack={attack}
            defense={defense}
            specialA={specialAttack}
            specialD={specialDefense}
            speed={speed}
            abilities={abilities}
            h={height}
            w={weight}
            fRate={femaleRate}
            mRate={maleRate}
            cRate={captureRate}
            eggGroups={eggGroups}
            hatchSteps={hatchSteps}
            gRate={growthRate}
        />
    )
};
