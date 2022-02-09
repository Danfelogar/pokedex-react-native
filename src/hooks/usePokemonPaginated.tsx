import { useEffect, useRef, useState } from "react";

import { pokemonApi } from "../api/PokemonApi";
import { PokemonPaginatedResponse, Result, SimplePokemon } from '../interfaces/pokemonInterfaces';

export const usePokemonPaginated = () => {

    const [isLoading, setIsLoading] = useState(true);

    const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([]);

    // alamcenara mi siguiente llamado para la paginacion se espera llamar cuando llege al fondo de mi scroll
    const nextPageUrl = useRef(' https://pokeapi.co/api/v2/pokemon?limit=50');

    const loadPokemons = async() => {
        setIsLoading(true);
        const resp = await pokemonApi.get<PokemonPaginatedResponse>(nextPageUrl.current);
        nextPageUrl.current = resp.data.next;
        mapPokemonList( resp.data.results );
    }

    const mapPokemonList = ( pokemonList: Result[] ) => {
        //forEach() ejecuta la función indicada una vez por cada elemento del array
        // pokemonList.forEach( poke => console.log( poke.name ) )
        // pokemonList.forEach( poke => console.log( poke.url ) )

        const newPokemonList: SimplePokemon[] = pokemonList.map(({ name, url })=>{
            // lo separare por los slash
            const urlParts = url.split('/');
            const id = urlParts[urlParts.length - 2]
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ id }.png`;
            return { id, picture, name }
        })
        //actualizaremos el estado manteniendo todos los pokemones de la lista mas los nuevos para poder hacerun scroll infinito
        setSimplePokemonList([...simplePokemonList, ...newPokemonList]);
        setIsLoading(false);
    }

    useEffect(() => {
        loadPokemons();
    }, []);

    return{
        isLoading,
        simplePokemonList,
        loadPokemons,
    }

};
