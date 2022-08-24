import React from 'react';
import { useState, useEffect } from 'react'
import { getPokemon } from './helpers';

const FetchPokemon = () => {
    const [pokemon, setPokemon] = useState([])

    const pokemonName = () =>
    {
        getPokemon().then(response=>setPokemon(response))
    }

    useEffect(() => 
    {
        pokemonName()
    })

    return (
        <div>
            <span class="num">Nombre: {pokemon.name}</span>
            <h2>Experiencia: {pokemon.base_experience}</h2>
            <h2>Altura: {pokemon.height}</h2>
            <h2>Peso: {pokemon.weight}</h2>
        </div>
    );
}

export default FetchPokemon;
