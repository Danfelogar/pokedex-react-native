import { useState, useEffect } from 'react';

import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { pokemonApi } from '../api/PokemonApi';


export const usePokemon = ( id: string ) => {

    const [isLoading, setIsLoading] = useState(true)
    //se coloca el "as ...." por si se va a leer una propidedad que no se tiene entonce para que no marque error se inicializa como un objeto vacio, para tener al inicio un valor "undefined" y no un error
    const [pokemon, setPokemon] = useState<PokemonFull>({} as PokemonFull)

    const loadPokemon = async( ) => {

        const resp = await pokemonApi.get<PokemonFull>(` https://pokeapi.co/api/v2/pokemon/${ id }`);

        setPokemon( resp.data );
        setIsLoading( false );
    }

    useEffect(() => {
        loadPokemon();
    }, [])

  return {
    isLoading,
    pokemon,
  }
}
