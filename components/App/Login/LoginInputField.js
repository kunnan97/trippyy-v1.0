import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const LoginInputField = props => {
    return (
        <TextInput
            {...props} 
            style = {{...styles.input, ...props.style}}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        height: '18%',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 15,
        marginVertical: '3%',
        backgroundColor: 'white',
        paddingLeft: '3%',
        width: '100%'
    }
});

export default LoginInputField;