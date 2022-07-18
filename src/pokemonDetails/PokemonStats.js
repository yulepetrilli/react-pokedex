import React from 'react';

import {ProgressBar} from './pokemonData.styled';

export default function PokemonStats({name, hp, attack, defense, specialA, specialD, speed}) {
    
    return (
        <div className="col-md-9">
            <h4 className="mx-auto">{name}</h4>
            <div className="row align-items-center">
                <div className="col-12 col-md-3">
                    HP
                </div>
                <div className="col-12 col-md-9">
                    <div className="progress">
                        <ProgressBar   
                            className="progress-bar" 
                            width={hp} 
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                            {hp}
                        </ProgressBar>
                    </div>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12 col-md-3">
                    Attack
                </div>
                <div className="col-12 col-md-9">
                    <div className="progress">
                        <ProgressBar   
                            className="progress-bar" 
                            width={attack} 
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                            {attack}
                        </ProgressBar>
                    </div>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12 col-md-3">
                    Defense
                </div>
                <div className="col-12 col-md-9">
                    <div className="progress">
                        <ProgressBar   
                            className="progress-bar" 
                            width={defense} 
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                            {defense}
                        </ProgressBar>
                    </div>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12 col-md-3">
                    Special Attack
                </div>
                <div className="col-12 col-md-9">
                    <div className="progress">
                        <ProgressBar   
                            className="progress-bar" 
                            width={specialA} 
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                            {specialA}
                        </ProgressBar>
                    </div>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12 col-md-3">
                    Special Defense
                </div>
                <div className="col-12 col-md-9">
                    <div className="progress">
                        <ProgressBar   
                            className="progress-bar" 
                            width={specialD} 
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                            {specialD}
                        </ProgressBar>
                    </div>
                </div>
            </div><div className="row align-items-center">
                <div className="col-12 col-md-3">
                    Speed
                </div>
                <div className="col-12 col-md-9">
                    <div className="progress">
                        <ProgressBar   
                            className="progress-bar" 
                            width={speed} 
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                            {speed}
                        </ProgressBar>
                    </div>
                </div>
            </div>
        </div>
    )
};