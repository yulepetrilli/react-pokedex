import React, { useState } from "react"

//Styled
import {Sprite, Card, StyledLink, Loader} from './pokemonCard.styled';

//Components
import pokeball from './pokeball.gif';

export default function PokemonCard({name, url}) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const pokemonIndex = url.split("/")[url.split('/').length - 2];
    const pokemonName = name.split(' ').map(letter => 
        letter.charAt(0).toUpperCase() + letter.substring(1)
    ).join("");
    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`

    return (
        <div className="col-md-3 col-sm-6 mt-4 mb-4">
            <StyledLink to={`pokemon/${pokemonIndex}`}>
                    <Card className="card">
                        <div className="card-header">
                            <h2>{pokemonIndex}</h2>
                        </div>
                        {loading && <Loader src={pokeball} className="card-img-top rounded mx-auto d-block mt-2"/>}
                        <Sprite 
                            className='card-img-top rounded mx-auto mt-2' 
                            src={img}
                            onLoad={()=>setLoading(false)}
                            onError={()=>setError(true)}
                            style={
                                error ? {display: "none"} :
                                loading ? {display: "none"} : {display: "block"}
                            }
                        />
                        {error && <h6 className="mx-auto"><span className=" badge bg-danger mt-2">Error loading data</span></h6>}
                        <div className="card-body mx-auto">
                            <h5 className="card-title">{pokemonName}</h5>
                        </div>
                    </Card>
            </StyledLink>
        </div>
    )
}