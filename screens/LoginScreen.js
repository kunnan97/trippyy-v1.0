import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    ImageBackground,
    Image,
    TouchableWithoutFeedback,
    Keyboard,
    Platform, KeyboardAvoidingView, Button
} from 'react-native';

import LoginButton from '../components/App/Login/LoginButton';

const LoginScreen = props => {
    const [pressed, setPressed] = useState();
    const [keyboardIsShown, setKeyboardIsShown] = useState(false);

    const handlePressEvent = (type) => {
        setPressed(type);
    }

    useEffect(() => {
        const handler = () => {
            setKeyboardIsShown(true);
        }

        Keyboard.addListener('keyboardDidShow', handler)
        return () => {
            Keyboard.removeListener('keyboardDidShow', handler)
        }
    }, [])

    return (
        <KeyboardAvoidingView
            behavior = {Platform.OS === 'ios' ? "padding" : ''}
            style = {{flex: 1}}
        >
            <TouchableWithoutFeedback 
                onPress = {
                    () => {
                        if (keyboardIsShown) {
                            Keyboard.dismiss();
                            setKeyboardIsShown(false);
                            return;
                        }
                        handlePressEvent(null);
                        
                    }
                }
                style = {{flex: 1}}
            >
                <ImageBackground
                    source = {require('../assets/images/home-screen.png')}
                    style = {styles.loginBackgroundImg}
                >
                    <View style = {styles.imageContainer}>
                        <Image
                            source = {require('../assets/images/logo.png')}
                        />
                    </View>

                    <View 
                        style = {
                            {
                                ...styles.loginBtnContainer,
                                paddingBottom: pressed === null ? '20%'
                                : '10%'
                            }
                        }
                    >
                        <LoginButton 
                            label = "Sign in with FaceBook"
                            type = 'facebook'
                            onPress = {handlePressEvent}
                            pressed = {''}
                            nav = {props.navigation}
                        />

                        <LoginButton 
                            label = "Sign in with Google"
                            type = 'google'
                            onPress = {handlePressEvent}
                            pressed = {''}
                            nav = {props.navigation}
                        />

                        <LoginButton 
                            label = "Sign in with Email"
                            type = 'email'
                            onPress = {handlePressEvent}
                            pressed = {pressed}
                            nav = {props.navigation}
                        />
                    </View>
                </ImageBackground>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    loginBackgroundImg: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    
    loginBtnContainer: {
        width: '80%',
        height: '60%',
        justifyContent: 'flex-end'
    },

    imageContainer: {
        height: '40%',
        justifyContent: 'flex-end',
        paddingBottom: '10%'
    },
});

export default LoginScreen;