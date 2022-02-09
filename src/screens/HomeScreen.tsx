import React from 'react';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { styles } from '../theme/appTheme';
import { PokemonCard } from '../components/PokemonCard';

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();

    const { isLoading, simplePokemonList, loadPokemons } = usePokemonPaginated();

    return(
        <>
            {/* tiene que ser de segundo orden para que quede super puesto */}
            <Image
                source={ require('../assets/pokebola.png') }
                style={ styles.pokeballBG }
            />

            <View style={{...styles.globalMargin, alignItems: 'center'}}>
                <FlatList
                    data={ simplePokemonList }
                    keyExtractor={ ( pokemon ) => pokemon.id }
                    showsVerticalScrollIndicator={ false }
                    numColumns={ 2 }
                    //Header
                    ListHeaderComponent={(
                        <Text style={{
                            ...styles.title,
                            ...styles.globalMargin,
                            top: top + 20,
                            marginBottom: top + 20,
                            paddingBottom: 10,
                        }}>Pokedex </Text>
                    )}


                    renderItem={ ({ item }) =>( <PokemonCard pokemon={ item } /> )}

                    //infinite Scroll

                    onEndReached={ () => loadPokemons() }
                    onEndReachedThreshold={ 0.4 }

                    ListFooterComponent={ <ActivityIndicator style={{height: 100 }} size={ 30 } color='orange'/> }
                />
            </View>
        </>
    )
};