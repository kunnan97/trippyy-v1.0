import React from 'react';
import {
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import DefaultText from '../../UI/DefaultText';

const CategoryItem = props => {
    let color = 'black';
    let fontSize = 12;
    if (props.label === props.category) {
        color = '#15DADA';
        fontSize = 14;
    }
    return (
        <TouchableOpacity
            style = {styles.itemContainer}
            onPress = {props.onPress.bind(this, props.label)}
        >
            <DefaultText style = {{color: color, fontSize: fontSize}}
            >
                {props.label}
            </DefaultText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        width: 80,
        height: '100%',
        marginHorizontal: 10
    }
});

export default CategoryItem;