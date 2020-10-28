import React from 'react';
import {
    StyleSheet,
    FlatList
} from 'react-native';

import {ATTRACTIONS} from '../../../data/dummy-data';
import AttractionItem from './AttractionItem';
// import AttractionItem from './AttractionItem';

const Item = ({ item, imageUrl, name, type, address, onPress }) => (
    <AttractionItem 
        item = {item}
        imageUrl = {imageUrl}
        name = {name}
        type = {type}
        address = {address}
        onPress = {onPress}
    />
  );

const AttractionList = props => {
    const category = props.category;

    const currSearch = props.search;

    const filteredAttractions = ATTRACTIONS.filter(
        attractions => 
        attractions.category === category &&
        attractions.name.toLowerCase().includes(currSearch.toLowerCase())
    );

    const renderItem = ({item}) => (
        <Item 
            item = {item}
            imageUrl ={item.imageUrl} 
            name = {item.name}
            type = {item.type}
            address = {item.address}
            onPress = {props.onPress}
        />
    );
     

    return (
        <FlatList
            data = {filteredAttractions}
            renderItem = {renderItem}
            keyExtractor={item => item.name.toString()}
            style = {{width: '100%'}}
        />
    );
}

const styles = StyleSheet.create({
    
});

export default AttractionList;