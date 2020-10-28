import React from 'react';
import {Platform, Text} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'

import LoginScreen from '../screens/LoginScreen';
import GetStartedScreen from '../screens/GetStartedScreen';
import AttractionsScreen from '../screens/AttractionsScreen';
import AttractionsDetailsScreen from '../screens/AttractionDetailsScreen';

const Navigator = createStackNavigator(
    {
        Login: {
            screen: LoginScreen
        },
        

        GetStarted: {
            screen: GetStartedScreen
        },

        Attractions: {
            screen: AttractionsScreen
        },

        AttractionDetails: {
            screen: AttractionsDetailsScreen
        }
    },

    {
        defaultNavigationOptions: () => ({
          headerShown: false  
        })
    }
);

export default createAppContainer(Navigator);