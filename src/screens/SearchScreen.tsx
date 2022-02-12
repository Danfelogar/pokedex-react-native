import React from 'react';
import { View, Text, Platform, FlatList, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SearchInput } from '../components/SearchInput';
import { usePokemonSearach } from '../hooks/usePokemonSearch';
import { styles as globalStyles, styles } from '../theme/appTheme';
import { PokemonCard } from '../components/PokemonCard';
import { Loading } from '../components/Loading';
import { useState, useEffect } from 'react';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {

    const { top } = useSafeAreaInsets();

    const { isFetching, simplePokemonList, } = usePokemonSearach();

    const [pokemonFilltered, setPokemonFilltered] = useState<SimplePokemon[]>([]);

    const [ term, setTerm ] = useState('');

    useEffect(() => {

        if( term.length === 0 ) {
            return setPokemonFilltered([]);
        }
        //sino es un numero hagamos esto
        if( isNaN( Number(term) ) ){
            setPokemonFilltered(
                simplePokemonList.filter(
                    ( poke ) => poke.name.toLowerCase().
                    includes( term.toLocaleLowerCase() )
                )
            );
        } else {
            const pokemonId = simplePokemonList.find( ( poke ) => poke.id === term);
            setPokemonFilltered(
                //los corchetes se colocan para regresar un arreglo puesto que simplePokemon lo requiere pero si colocamos a demas un ! estamos dociendole a typeScript que siempre andamos mandando un valor que confie en nosotros aunque no sea cierto
                // [ simplePokemonList.find( ( poke ) => poke.id === term)! ]

                // solucion que es mejor
                    ( pokemonId ) ? [pokemonId ] : []
            )
        }


    }, [term])


    if( isFetching ) {
        // es necesario el return para que lo detecte como componente y no como funcion
        return  <Loading />
    }

  return (
    <View style={{ flex: 1, marginHorizontal: 20, }}>
        <SearchInput onDebounce={ (value) => setTerm( value ) } style={{ position: 'absolute', zIndex: 3,  width: screenWidth - 40, top: (Platform.OS === 'ios') ? top : top + 30 }}/>

        <FlatList
            data={ pokemonFilltered }
            keyExtractor={ ( pokemon ) => pokemon.id }
            showsVerticalScrollIndicator={ false }
            numColumns={ 2 }
            //Header
            ListHeaderComponent={(
                <Text style={{
                    ...globalStyles.title,
                    ...globalStyles.globalMargin,
                    paddingBottom: 10,
                    marginTop: (Platform.OS === 'ios') ? top + 60 : top + 80,
                }}>{ term } </Text>
            )}

            renderItem={ ({ item }) =>( <PokemonCard pokemon={ item } /> )}
        />
    </View>
  )
}
