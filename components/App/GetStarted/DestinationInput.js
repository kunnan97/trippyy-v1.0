import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { API_KEY } from '../../../assets/Google/API-KEY';

const airplaneIccon = <MaterialCommunityIcons name="airplane-takeoff" size={30} color="black" />;

const DestinationInput = props => {
    return (
        <View style = {styles.container}>
            <View style = {{marginLeft: '5%', marginRight: '13%'}}>
            {airplaneIccon}
            </View>

            <GooglePlacesAutocomplete 
                placeholder = "Enter Destination City"
                listViewDisplayed = 'auto'
                fetchDetails = {true}
                onPress = {(data, details = null) => {
                    //console.log(data, details);
                }}
                query = {{
                    key: API_KEY,
                    language: 'en',
                    types: '(cities)'
                }}
                styles = {{
                    textInputContainer: {
                        backgroundColor: 'white'
                    }
                }}
                enablePoweredByContainer = {false}
                onPress = {props.onSelected}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black'
    }
});

export default DestinationInput;