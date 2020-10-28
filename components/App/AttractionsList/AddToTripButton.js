import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import DefaultText from '../../UI/DefaultText';

import { AntDesign } from '@expo/vector-icons'; 

const heartIcon = <AntDesign name="heart" size={16} color="black" />;

const AddToTripButton = props => {
    return (
        <View style = {{...styles.buttonContainer, ...props.style}}>
           <TouchableOpacity>
                <View style = {styles.container}>
                    <DefaultText style = {{fontSize: 14}}>
                        Add to Trip
                    </DefaultText>

                    {heartIcon}
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

export default AddToTripButton;