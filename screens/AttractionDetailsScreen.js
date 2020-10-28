import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    ImageBackground, 
    ScrollView,
    FlatList,
    TouchableOpacity,
     Dimensions
} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

import AddToTripButton from '../components/App/AttractionsList/AddToTripButton';
import Rating from '../components/App/AttractionsList/Rating';
import BackButton from '../components/UI/BackButton';
import DefaultText from '../components/UI/DefaultText';
import {ATTRACTIONS_DETAILS} from '../data/dummy-data';
import DirectionsButton from '../components/App/AttractionDetails/DirectionsButton';

const upArrowIcon = <AntDesign name="up" size={16} color="black" />;

const downArrowIcon = <AntDesign name="down" size={16} color="black" />;

const Item = ({ item }) => (
    <View style = {styles.container}>
            <DefaultText> {item[0]}</DefaultText>

            <Rating />

            <DefaultText>
                {item[2]}
            </DefaultText>
        </View>
  );

const AttractionsDetailsScreen = props => {
    const [openingHoursCollapsed, setOpeningHoursCollapsed] = useState(false);

    const attraction = props.navigation.getParam('attraction');
    const attractionDetails = ATTRACTIONS_DETAILS.find(
      detail => detail.name === attraction.name  
    );

    const backNavigatorHandler = () => {
        props.navigation.pop();
    }

    const openingHoursCollapsedHandler = (boo) => {
        setOpeningHoursCollapsed(!boo);
    }

    const renderItem = ({item}) => (
        <Item 
            item = {item}
        />
    );

    const renderOpeningHours = ({item}) => (
        <DefaultText style = {{fontSize: 12}}>
            {item}
        </DefaultText>
    );

    return (
        <View style = {{flex: 1}}>
        <ScrollView 
        >
            <View style = {styles.topContainer}>
                <ImageBackground
                    source = {{uri: attraction.imageUrl}}
                    style = {styles.imageContainer}
                >
                    <View style = {styles.backButtonContainer}>
                        <BackButton onPress = {backNavigatorHandler}/>
                    </View>

                    <View style = {styles.addToTripContainer}>
                        <AddToTripButton style = {styles.addTripBtn}/>
                    </View>
                </ImageBackground>
            </View>

            <View style = {styles.generalInfoContainer}>
                <View style = {styles.nameAddressContainer}>
                    <DefaultText>{attraction.type}</DefaultText>

                    <DefaultText style ={{fontSize: 23}}>
                        {attraction.name}
                    </DefaultText>

                    <DefaultText>{attraction.address}</DefaultText>
                </View>

                <View style = {styles.directionsContainer}>
                    <Rating/>

                    <DirectionsButton style = {styles.directionsButton}/>
                </View>                
            </View>

            <View style = {styles.openingHoursContainer}>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between', marginBottom: '5%'}}>
                    <DefaultText style = {{fontSize: 12}}>Opening Hours</DefaultText>

                    <TouchableOpacity 
                        style = {{paddingRight: '60%'}}
                        onPress = {openingHoursCollapsedHandler.bind(this, openingHoursCollapsed)}
                    >
                        {openingHoursCollapsed ? upArrowIcon : downArrowIcon}
                    </TouchableOpacity>
                </View>

                {openingHoursCollapsed ? 
                // <View>
                // <FlatList 
                //     data = {attractionDetails.openingHours}
                //     renderItem = {renderOpeningHours}
                //     keyExtractor = {item => Math.random().toString()}
                //     style = {{width: '100%'}}
                // />
                // </View>
                // attractionDetails.openingHours.map(day => <DefaultText style = {{fontSize: 12}}>{day}</DefaultText>)
                <View>
                    <DefaultText style = {{fontSize: 12}}>{attractionDetails.openingHours}</DefaultText>
                </View>
                : null}

                <TouchableOpacity style = {{marginTop: openingHoursCollapsed ? '5%' : null}}>
                    <DefaultText 
                        style = {{fontSize: 14, color: '#15DADA', textDecorationLine: 'underline', textDecorationColor: '#15DADA'}}
                    >
                        {attractionDetails.webUrl}
                    </DefaultText>
                </TouchableOpacity>
            </View>

            <View style = {styles.descContainer}>
                <DefaultText style = {{fontSize: 12}}>
                    {attractionDetails.desc}
                </DefaultText>
            </View>

            <View style = {styles.reviewContainer}>
                <DefaultText style = {{fontSize: 16}}>Reviews</DefaultText>

                <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                    <DefaultText style = {{fontSize: 28}}>{attractionDetails.reviewRating}</DefaultText>
                    <DefaultText> out of 5</DefaultText>
                </View>

                <FlatList 
                    data = {attractionDetails.review}
                    renderItem = {renderItem}
                    horizontal = {true}
                    keyExtractor = {item => Math.random().toString()}
                    style = {{height: '20%'}}
                />

            </View>
        </ScrollView>
        </View>
    );
}

const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
    topContainer: {
        width: '100%',
        height: height * 0.3
    },
    
    imageContainer: {
        flex: 1
    },

    backButtonContainer: {
        paddingLeft: '5%',
        paddingTop: '5%'
    },

    addToTripContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingBottom: '3%',
        paddingRight: '5%'
    },

    addTripBtn: {
        height: '17%',
        width: '25%',
        paddingTop: '1.5%'
    },

    generalInfoContainer: {
        flexDirection: 'row',
        padding: '3%',
        height: height * 0.12,
        backgroundColor: 'lightgrey'
    },

    nameAddressContainer: {
        height: '100%',
        width: '70%'
    },

    directionsContainer: {
        height: '100%',
        width: '30%',
        paddingLeft: '3%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    directionsButton: {
        height: '40%',
        width: '95%',
        paddingTop: '3%'
    },

    openingHoursContainer: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '90%',
        marginLeft: '5%'
    },

    descContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: '90%',
        marginLeft: '5%',
        paddingTop: '5%',
        paddingBottom: '5%'
    },

    reviewContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: '90%',
        marginLeft: '5%',
        paddingTop: '5%',
        paddingBottom: '5%'
    },
    container: {
        width: 270,
        height: '100%',
        backgroundColor: '#C3F1FF',
        borderRadius: 20,
        padding: '3%',
        marginRight: 10
    }
});

export default AttractionsDetailsScreen;