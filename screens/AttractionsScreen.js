import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView, 
    Platform,
    TouchableWithoutFeedback, Keyboard
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'; 
import Constants from 'expo-constants';

import BackButton from '../components/UI/BackButton';
import CategoryList from '../components/App/AttractionsList/CategoryList';
import AttractionList from '../components/App/AttractionsList/AttractionList';

const searchIcon = <Feather name="search" size={30} color="black" />;

const AttractionsScreen = props => {
    const [category, setCategory] = useState('General');
    const [search, setSearch] = useState('');

    const backNavigatorHandler = () => {
        props.navigation.pop();
    }

    const onPressCategoryHandler = (category) => {
        setCategory(category);
    }

    const onPressAttractionHandler = (attraction) => {
        props.navigation.navigate({
            routeName: 'AttractionDetails',
            params: {
                attraction: attraction
            }
        })
    }

    const searchHanlder = (currInput) => {
        setSearch(currInput);
    }

    const body =
    <TouchableWithoutFeedback 
        style = {{flex: 1}}
        onPress = {Keyboard.dismiss}
    >
        <View style = {{flex: 1}}>
            <View style = {styles.topBar}>
                <BackButton 
                    onPress = {backNavigatorHandler}
                    style = {{marginLeft: '5%'}}
                />

                {/* <DefaultText style = {{fontSize: 30}}>
                    Search
                </DefaultText> */}
            </View>

            <View style = {styles.searchBarContainer}>
                {searchIcon}

                <View style = {styles.searchInput}>
                    <TextInput
                        onChangeText = {searchHanlder}
                    />
                </View>
            </View>

            <View style = {styles.categoriesListContainer}>
                <CategoryList
                    category = {category} 
                    onPress = {onPressCategoryHandler}
                />
            </View>

            <View style = {styles.attractionsContainer}>
                <AttractionList
                    category = {category}
                    search = {search}
                    onPress = {onPressAttractionHandler}
                />
                
            </View>
        </View>
    </TouchableWithoutFeedback>;


    if (Platform.OS === 'android') {
        return (
            <View style = {{flex: 1}}>
                <View style = {{
                    height: Constants.statusBarHeight
                }}/>

                {body}
            </View>
        );
    }

    return (
        <SafeAreaView style = {{flex: 1}}>
            {body}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    topBar: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    searchBarContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'lightgrey',
        borderRadius: 10,
        height: '6%',
        width: '90%',
        marginHorizontal: '5%',
        paddingLeft: '3%'
    },

    searchInput: {
        flex: 1,
        marginLeft: '5%',
        height: '100%',
        justifyContent: 'center'
    },

    categoriesListContainer: {
        height: '6%',
        alignItems: 'center'
    },

    attractionsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '3%'
    }
});

export default AttractionsScreen;