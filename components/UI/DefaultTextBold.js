import React from 'react';
import {
    Text,
    StyleSheet
} from 'react-native';

const DefaultTextBold = props => {
    return (
        <Text style = {{...props.style, ...styles.text}}>
            {props.children}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'open-sans-bold'
    }
});

export default DefaultTextBold;