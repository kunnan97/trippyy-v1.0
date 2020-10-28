import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import DefaultTextBold from '../../UI/DefaultTextBold';
import DefaultText from '../../UI/DefaultText';

import AddToTripButton from './AddToTripButton';
import Rating from './Rating';

const AttractionItem = props => {
    return (
        <TouchableOpacity
            activeOpacity = {0.7}
            onPress = {props.onPress.bind(this, props.item)}
        >
            <View style = {styles.itemContainer}>
                <ImageBackground
                    source = {{uri: props.imageUrl}}
                    style = {{flex: 1}}
                >
                    <View style = {styles.addToTripContainer}>
                        <AddToTripButton 
                            style = {{
                                height: '80%',
                                width: '28%',
                                paddingTop: '2%'
                            }}
                        />
                    </View>

                    <View style = {styles.bottomContainer}>
                        <View>
                            <DefaultText style = {{fontStyle: 'italic', color: 'white'}}>
                                {props.type}
                            </DefaultText>

                            <DefaultTextBold style = {{color: 'white'}}>
                                {props.name}
                            </DefaultTextBold>

                            <DefaultText style = {{color: 'white'}}>
                                {props.address}
                            </DefaultText>
                        </View>

                        <View style = {styles.ratingContainer}>
                        <Rating />
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        height: 150,
        width: '100%',
        borderRadius: 20,
        overflow: 'hidden',
        marginVertical: '1%'
    },

    addToTripContainer: {
        height: '30%',
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: '3%'
    },

    bottomContainer: {
        height: '80%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingBottom: '5%',
        paddingLeft: '3%'
    },

    ratingContainer: {
        flex: 1,
        height: '100%',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: '3%',
        paddingTop: '10%'
    }
});

export default AttractionItem;