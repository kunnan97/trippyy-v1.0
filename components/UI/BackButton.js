import React from 'react';
import {
    TouchableOpacity
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 

const BackButton = props => {
    return (
        <TouchableOpacity 
            hitSlop = {{top: 50, bottom: 50, left: 50, right: 50}}
            onPress = {props.onPress}
            style = {props.style}
        >
            <Ionicons name="ios-arrow-back" size={40} color="black" />
        </TouchableOpacity>
    );
}

export default BackButton;