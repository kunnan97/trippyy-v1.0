import React from 'react';
import {
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

import DefaultText from '../../UI/DefaultText';
import LoginInput from './LoginInput';

const facebookIcon = <Entypo name="facebook-with-circle" size={28} color="black" />;
const googleIcon = <MaterialCommunityIcons name="google" size={28} color="black" />;
const emailIcon = <MaterialCommunityIcons name="email" size={28} color="black" />

const LoginButton = props => {    
    const type = props.type;

    const pressed = props.pressed;

    if (pressed !== null && pressed === 'email') {
        return (
            <LoginInput 
                nav = {props.nav}/>
        );
    }
    
    return (
        <TouchableOpacity 
            activeOpacity = {0.9}
            style = {styles.buttonContainer}
            onPress = {props.onPress.bind(this, type)}
        >
            {type === 'facebook' ? facebookIcon
            : type === 'google' ? googleIcon
            : emailIcon}

            <DefaultText style = {styles.text}>
                {props.label}
            </DefaultText>        
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: '3%',
        backgroundColor: 'white',
        marginVertical: '3%',
        textAlign: 'center',
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 25,
        // overflow: "hidden",
        width: '100%',
        height: '12%',
        // shadowColor: 'black',
        // shadowRadius: 25,
        // shadowOpacity: 0.4,
        // shadowOffset: {width: 0, height: 2},
        // elevation: 10
    },

    text: {
        marginLeft: 50,
        fontSize: 16
    }
});

export default LoginButton;