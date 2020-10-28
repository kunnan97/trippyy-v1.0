import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';

import CategoryItem from './CategoryItem';

const categories = ['General', 'Food', 'Outdoors', 'Art & Culture', 'Beaches', 'Musuem', 'Amusement Parks', 'Local Favourites'];

const CategoryList = props => {
    return (
        <View>
            <ScrollView 
                contentContainerStyle = {styles.container}
                horizontal = {true}
            >
                {categories.map(
                    category => 
                        {return <CategoryItem 
                            label = {category}
                            key = {category}
                            category = {props.category}
                            onPress = {props.onPress}
                        />}
                )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: '3%'
    }
});

export default CategoryList;