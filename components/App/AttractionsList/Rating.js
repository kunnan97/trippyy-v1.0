import React from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';

const Rating = props => {
    return (
        <View style = {styles.container}>
            <Image 
                source = {require('../../../assets/images/ionic-ios-star.png')}
            />

            <Image 
                source = {require('../../../assets/images/ionic-ios-star.png')}
            />

            <Image 
                source = {require('../../../assets/images/ionic-ios-star.png')}
            />

            <Image 
                source = {require('../../../assets/images/ionic-ios-star.png')}
            />

            <Image 
                source = {require('../../../assets/images/ionic-ios-star-half.png')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    }
});

export default Rating;