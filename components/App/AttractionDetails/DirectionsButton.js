import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import DefaultText from '../../UI/DefaultText';

import { FontAwesome5 } from '@expo/vector-icons'; 

const directionsIcon = <FontAwesome5 name="map-marker-alt" size={16} color="black" />;

const DirectionsButton = props => {
    return (
        <View style = {{...styles.buttonContainer, ...props.style}}>
           <TouchableOpacity>
                <View style = {styles.container}>
                    <DefaultText style = {{fontSize: 16}}>
                        Directions
                    </DefaultText>

                    {directionsIcon}
                </View>
            </TouchableOpacity> 
        </View>
        
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#15DADA',
        borderRadius: 20
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }
});

export default DirectionsButton;