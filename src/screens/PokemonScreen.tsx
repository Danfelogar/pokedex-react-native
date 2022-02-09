import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { RootStackParams } from '../navigator/Navigator';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetails } from '../components/PokemonDetails';
//extendemos para tomar las caracteristicas de StackScreenProps,  tipado como root... y especificnado que es de pokemonScreen
interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {};

export const PokemonScreen = ( { route, navigation }: Props ) => {
    const { simplePokemon, color } = route.params;

    const { name, id, picture } = simplePokemon;

    const { top } = useSafeAreaInsets();

    const { isLoading, pokemon } = usePokemon( id );

    return(
        <View style={{ flex: 1 }}>
            {/* header  container */}
            <View style={{
                ...styles.headerContainer,
                backgroundColor: color,
            }}>
                <TouchableOpacity onPress={ () => navigation.goBack() } activeOpacity={0.8} style={{ ...styles.backBtn, top: top + 5 }}>
                    <Icon name='arrow-back-outline' color='white' size={ 30 }/>
                </TouchableOpacity>

                {/* nombre del pokemon */}

                <Text style={{ ...styles.pokemonName, top: top + 40 }}> { name + '\n' } #{ id } </Text>

                {/* pokeball blanca */}
                <Image
                    source={ require('../assets/pokebola-blanca.png') }
                    style={ styles.pokeball }
                />

                {/* img del pokemon */}
                <FadeInImage
                    uri={ picture }
                    style={ styles.pokemonImg }
                />
            </View>
                {/* Detalles y loading */}

                {
                    isLoading ?
                    (
                        <View style={ styles.loadingIndicator }>
                            <ActivityIndicator color={ color } size={ 50 }/>
                        </View>
                    )
                    :
                        <PokemonDetails pokemon={ pokemon } />
                }

        </View>
    )
};

const styles = StyleSheet.create({
    headerContainer: {
        height: 370,
        zIndex: 999,
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
    },
    backBtn: {
        position: 'absolute',
        left: 20,
    },
    pokemonName: {
        color: 'white',
        fontSize: 40,
        alignSelf: 'flex-start',
        left: 20,
    },
    pokeball :{
        height: 250,
        width: 250,
        bottom: -20,
        opacity: 0.7,
    },
    pokemonImg: {
        height: 250,
        width: 250,
        position: 'absolute',
        bottom: -20,
    },
    loadingIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});