import React from 'react';
import {
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import DefaultTextBold from '../UI/DefaultTextBold';

const ContinueButton = props => {
    const screenToGo = props.screenToGo;

    return (
        <TouchableOpacity 
            style = {{...styles.button, ...props.style}}
            onPress = {
                () => {
                    props.nav.navigate({
                        routeName: screenToGo
                    });
                }
            }
            activeOpacity = {0.7}
        >
            <DefaultTextBold style = {styles.textContinue}>
                Continue
            </DefaultTextBold>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#2C1DFF',
        borderColor: 'black',
        borderWidth: 1.5,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textContinue: {
        color: 'white',
        fontSize: 20
    }
});

export default ContinueButton;