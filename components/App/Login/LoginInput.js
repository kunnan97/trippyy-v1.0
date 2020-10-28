import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import DefaultTextBold from '../../UI/DefaultTextBold';
import LoginInputField from './LoginInputField'
import ContinueButton from '../../UI/ContinueButton';

const LoginInput = props => {
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');


    return (
        <View style = {styles.inputField}>
            <LoginInputField 
                autoCorrect = {false}
                keyboardType = "email-address"
                clearButtonMode = 'while-editing'
                placeholder = 'Email'
                placeholderTextColor = 'grey'
                underlineColorAndroid = 'white'
                autoCapitalize = "none"
            />

            <LoginInputField
                autoCorrect = {false}
                clearButtonMode = 'while-editing'
                placeholder = 'Password'
                placeholderTextColor = 'grey'
                secureTextEntry = {true}
                underlineColorAndroid = 'white'
                autoCapitalize = "none"
            />

            <ContinueButton
                nav = {props.nav}
                screenToGo = 'GetStarted'
                style = {styles.button}
            />

            <View style = {styles.signUp}>
                <DefaultTextBold style = {styles.textSignUp}>
                    Not a member? {'  '}
                </DefaultTextBold>

                <TouchableOpacity
                    hitSlop = {{top: 45, bottom: 45, left: 50, right: 50}}
                >
                    <DefaultTextBold style = {
                        {
                            ...styles.textSignUp, 
                            textDecorationLine: 'underline',
                            fontSize: 14
                        }
                    }>
                        Sign Up!
                    </DefaultTextBold>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        marginTop: '3%',
        height: '18%'
    },

    textContinue: {
        color: 'white',
        fontSize: 20
    },

    signUp: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingTop: '10%'
    },

    textSignUp: {
        color: 'white',
        fontSize: 13,
        
    },

    inputField: {
        justifyContent: 'center'
    }
});

export default LoginInput;