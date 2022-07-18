import React from 'react';

//Styled
import {TypeTag} from './pokemonData.styled';

//Components
import PokemonStats from './PokemonStats';
import PokemonProfile from './PokemonProfile';

const TYPE_COLORS = {
    bug: '#B1C12E',
    dark: '#4F3A2D',
    dragon: '#755EDF',
    electric: '#FCBC17',
    fairy: '#F4B1F4',
    fighting: '#823551D',
    fire: '#E73B0C',
    flying: '#A3B3F7',
    ghost: '#6060B2',
    grass: '#74C236',
    ground: '#D3B357',
    ice: '#A3E7FD',
    normal: '#C8C4BC',
    poison: '#934594',
    psychic: '#ED4882',
    rock: '#B9A156',
    steel: '#B5B5C3',
    water: '#3295F6'
};

export default function PokemonDetail({
    id, 
    types, 
    img,
    description,
    name, 
    hp, 
    attack, 
    defense, 
    specialA, 
    specialD, 
    speed,
    abilities,
    h,
    w,
    fRate,
    mRate,
    cRate,
    eggGroups,
    hatchSteps,
    gRate,
}) {

    return (
        <div className="col mt-4">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-5">
                            <h5>{id}</h5>
                        </div>
                        <div className="col-7">
                            <div className="float-end">
                                {types?.map((type) => (
                                    <TypeTag key={type} className="badge badge-pill me-2" bg={TYPE_COLORS[type]}>
                                        {type.toUpperCase()}
                                    </TypeTag>  
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row align-items-center">
                        <div className="col-md-3">
                            <img src={img}
                                className="card-img-top rounded mx-auto mt-2"
                                alt={name}
                            />
                        </div>
                        <PokemonStats 
                            name={name}
                            hp={hp}
                            attack={attack}
                            defense={defense}
                            specialA={specialA}
                            specialD={specialD}
                            speed={speed}
                        />
                        <div className="row mt-2">
                            <div className="col">
                                <p className="text-center">{description}</p>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title text-center">Profile</h5>
                    <PokemonProfile 
                        height={h}
                        weight={w}
                        cRate={cRate}
                        fRate={fRate}
                        mRate={mRate}
                        eggGroups={eggGroups}
                        hatchSteps={hatchSteps}
                        abilities={abilities}
                        gRate={gRate}
                    />
                </div>
                <div className="card-footer text-muted">
                    Data from {" "}
                    <a href="https://pokeapi.co/" target="_blank" rel="noreferrer" className="card-link">
                        PokeAPI.co
                    </a>
                </div>
            </div>
        </div>
    );
};
