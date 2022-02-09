import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

interface Props {
    pokemon: PokemonFull;
}

export const PokemonDetails = ({ pokemon }: Props) => {



  return (
    <ScrollView showsVerticalScrollIndicator={ false } style={{
        // se usa para tomar dedes el punto inicial para a la hora de hacer scroll y con ayuda del zindex 999 los detalles queden atras de al img
        ...StyleSheet.absoluteFillObject,
    }}>

        {/* los types y peso */}
        <View style={{ ...styles.container, marginTop: 385, }}>
            <Text style={ styles.title }>Types</Text>
            <View style={{ flexDirection: 'row' }}>
                {
                    pokemon.types.map( ({ type })=> (
                        <Text key={ type.name } style={{ ...styles.regularText, marginRight: 10, }}>
                            { type.name }
                        </Text>
                    ))
                }
            </View>

            <Text style={ styles.title }>eight</Text>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ ...styles.regularText, marginRight: 10, }}>
                    { pokemon.weight } kg
                </Text>
            </View>



        </View>
        {/* los sprites */}
        <View style={{ ...styles.container }}>
            <Text style={ styles.title }>Sprites</Text>
        </View>

        <ScrollView horizontal={ true } showsHorizontalScrollIndicator={ false }>
            <FadeInImage uri={ pokemon.sprites.front_default } style={ styles.basicSprite }/>

            <FadeInImage uri={ pokemon.sprites.back_default } style={ styles.basicSprite }/>

            <FadeInImage uri={ pokemon.sprites.front_shiny } style={ styles.basicSprite }/>

            <FadeInImage uri={ pokemon.sprites.back_shiny } style={ styles.basicSprite }/>

        </ScrollView>

        {/* habilidades */}
        <View style={ styles.container }>
            <Text style={ styles.title }>Abilities</Text>
            <View style={{ flexDirection: 'row' }}>
                {
                    pokemon.abilities.map( ({ ability })=> (
                        <Text key={ ability.name } style={{ ...styles.regularText, marginRight: 10, }}>
                            { ability.name }
                        </Text>
                    ))
                }
            </View>
        </View>

        {/* movimientos */}
        <View style={ styles.container }>
            <Text style={ styles.title }>Moves</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {
                    pokemon.moves.map( ({ move })=> (
                        <Text key={ move.name } style={{ ...styles.regularText, marginRight: 10, }}>
                            { move.name } ..//..
                        </Text>
                    ))
                }
            </View>
        </View>

        {/* stast */}
        <View style={ styles.container }>
            <Text style={ styles.title }>Stast</Text>
            <View>
                {
                    pokemon.stats.map( ( stat, idx )=> (
                        <View style={{ flexDirection: 'row', }} key={ stat.stat.name + idx }>
                            <Text style={{ ...styles.regularText, marginRight: 10, width: 150 }}>
                                { stat.stat.name }
                            </Text>

                            <Text style={{ ...styles.regularText, fontWeight: 'bold' }}>
                                { stat.base_stat }
                            </Text>
                        </View>
                    ))
                }
            </View>


            {/* sprite final */}
            <View style={{ marginBottom: 10, alignItems: 'center', }}>
                <FadeInImage uri={ pokemon.sprites.front_default } style={ styles.basicSprite }/>
            </View>
        </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
        marginTop: 20,
    },
    regularText: {
        fontSize: 19,
    },
    basicSprite: {
        height: 200,
        width: 200,
    },
});