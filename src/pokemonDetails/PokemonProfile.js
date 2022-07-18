import React from 'react';

//Styled 
import {ProgressBar} from './pokemonData.styled';

export default function PokemonProfile({
    height, 
    weight, 
    cRate, 
    fRate, 
    mRate,
    eggGroups,
    hatchSteps,
    abilities,
    gRate,
}) {

    return (
        <div className="row">
            <div className="col-md-6">
                <div className="row">
                    <div className="col-md-6">
                        <h6 className="float-end">Height: </h6>
                    </div>
                    <div className="col-md-6">
                        <h6 className="float-start">{height} m.</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h6 className="float-end">Weight: </h6>
                    </div>
                    <div className="col-md-6">
                        <h6 className="float-start">{weight} kg.</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h6 className="float-end">Catch Rate: </h6>
                    </div>
                    <div className="col-md-6">
                        <h6 className="float-start">{cRate} %.</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h6 className="float-end">Gender Ratio: </h6>
                    </div>
                    {fRate < 0 && mRate > 100 ?
                        <div className="col-md-6">
                            <h6 className="float-start">No gender.</h6>
                        </div>
                    :
                        <div className="col-md-6">
                            <div className="progress">
                                <ProgressBar   
                                    className="progress-bar" 
                                    role="progressbar"
                                    width={fRate} 
                                    aria-valuenow="15"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    bg={"#DF013A"}
                                >
                                    {fRate} %
                                </ProgressBar>
                                <ProgressBar   
                                    className="progress-bar" 
                                    role="progressbar"
                                    width={mRate} 
                                    aria-valuenow="30"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    bg={"#0101DF"}
                                >
                                    {mRate} %
                                </ProgressBar>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className="col-md-6">
                <div className="row">
                    <div className="col-md-6">
                        <h6 className="float-end">Egg Gropus: </h6>
                    </div>
                    <div className="col-md-6">
                        <h6 className="float-start">{eggGroups}.</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h6 className="float-end">Hatch Steps: </h6>
                    </div>
                    <div className="col-md-6">
                        <h6 className="float-start">{hatchSteps}.</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h6 className="float-end">Abilities: </h6>
                    </div>
                    <div className="col-md-6">
                        <h6 className="float-start">{abilities}.</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h6 className="float-end">Growth Rate: </h6>
                    </div>
                    <div className="col-md-6">
                        <h6 className="float-start">{gRate}.</h6>
                    </div>
                </div>
            </div>
        </div>
    )
};
