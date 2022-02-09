import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

const windowWidth = Dimensions.get('window').width;

interface Props {
    pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
    return(
        <TouchableOpacity activeOpacity={ 0.9 }>
            <View style={{
                ...styles.cardContainer,
                width: windowWidth * 0.4,
            }}>
                {/* Nombre del pokemon y ID */}
                <View>
                    <Text style={ styles.name }>
                        { pokemon.name }
                        { `\n# ${pokemon.id}` }
                    </Text>
                </View>

                <View style={ styles.pokemonContainer }>
                    <Image
                        source={require('../assets/pokebola-blanca.png')}
                        style={ styles.pokeball }
                    />
                </View>

                <FadeInImage
                    uri={ pokemon.picture }
                    style={ styles.pokemonImg }
                />
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        backgroundColor: 'red',
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10
    },
    pokeball:{
        height: 100,
        width: 100,
        position: 'absolute',
        bottom: -20,
        right: -20,
    },
    pokemonImg: {
        height: 120,
        width: 120,
        position: 'absolute',
        right: -8,
        bottom: -5,
    },
    pokemonContainer: {
        height: 100,
        width: 100,
        position: 'absolute',
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        opacity: 0.5,
    },
});
