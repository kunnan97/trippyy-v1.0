import React, {useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback, 
    ImageBackground, 
    Image,
    Keyboard, 
    KeyboardAvoidingView, 
    Platform
} from 'react-native';
import {useDispatch} from 'react-redux';
import BottomSheet from 'reanimated-bottom-sheet'

import DefaultTextBold from '../components/UI/DefaultTextBold';
import BackButton from '../components/UI/BackButton';
import CalendarInput from '../components/App/GetStarted/CalendarInput';
import DestinationInput from '../components/App/GetStarted/DestinationInput';
import CalendarSelector from '../components/App/GetStarted/CalendarSelector';
import { setEnd, setStart } from '../store/actions/Date';
import ContinueButton from '../components/UI/ContinueButton';

const GetStartedScreen = props => {
    const [keyboardShown, setKeyboardShown] = useState(false);
    const [destinationSelected, setDestinationSelected] = useState(false);
    const [startDateSelected, setStartDateSelected] = useState(false);
    const [endDateSelected, setEndDateSelected] = useState(false);

    const renderHeader = () => (<View
        style={{
            width: '100%',
            backgroundColor: 'white',
            height: 45,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            justifyContent: 'center',
            alignItems: 'center'

        }}>
        <View
            style = {styles.dragUp}
        />
        </View>
    );

    useEffect(() => {
        const handler = () => {
            Platform.OS === 'android' ? sheetRef.current.snapTo(3) : null;
        }

        Keyboard.addListener('keyboardDidShow', handler)
        return () => {
            Keyboard.removeListener('keyboardDidShow', handler);
            Platform.OS === 'android' ? sheetRef.current.snapTo(2) : null;
        }
    }, [])
    
    const backNavigatorHandler = () => {
        props.navigation.pop();
        removeDataHandler();
    }

    const pressOnInputHandler = () => {
        sheetRef.current.snapTo(0);
    }

    const dismiss = () => {
        Keyboard.dismiss();
        setKeyboardShown(false)
        Platform.OS === 'android' ? sheetRef.current.snapTo(2) : null;
    }

    const dispatch = useDispatch();

    const removeDataHandler = () => {
        dispatch(setStart(''));
        dispatch(setEnd(''));
    }

    const onSelectionHandler = () => {
        setDestinationSelected(true);
    }

    const onStartDateSelected = () => {
        setStartDateSelected(true);
    }

    const onEndDateSelected = () => {
        setEndDateSelected(true);
    }

    const toNextScreen = () => {
        props.navigation.navigate({
            routeName: 'attractions'
        })
    }

    const sheetRef = React.useRef(null);

    return (
        <KeyboardAvoidingView 
            behavior = {Platform.OS === 'ios' ? "padding": null} 
            style = {{flex: 1}}
        >
            <TouchableWithoutFeedback 
                onPress = {dismiss}
            >
                <ImageBackground
                    source = {require('../assets/images/get-started-screen.png')}
                    style = {styles.backGroundImage}
                >
                    <View style = {{
                        height: '5%'
                    }}/>

                    <View style = {styles.header}>
                        <BackButton 
                            onPress = {backNavigatorHandler}
                        />
                    </View>

                    <TouchableWithoutFeedback onPress = {dismiss}>
                        <View style = {styles.imageContainer}>
                            <Image
                                source = {require('../assets/images/logo.png')}
                            />
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress = {dismiss}>
                        <View style = {styles.textContainer}>
                            <DefaultTextBold style = {{fontSize: 28}}>
                                Get Started
                            </DefaultTextBold>
                        </View>
                    </TouchableWithoutFeedback>

                    <View style = {{
                        height: '5%'
                    }}/>

                    <View style = {styles.calendarInputContainer}>
                        <CalendarInput 
                            onFocus = {pressOnInputHandler}
                            onStartDateSelected = {onStartDateSelected}
                            onEndDateSelected = {onEndDateSelected}
                        />
                    </View>

                    <View style = {{
                        height: '3%'
                    }}/>

                    <View style = {styles.destinationInputContainer}>
                        <DestinationInput onSelected = {onSelectionHandler}/>

                        {
                            destinationSelected && startDateSelected && endDateSelected ?
                            <ContinueButton 
                                nav = {props.navigation}
                                style = {styles.button}
                                screenToGo = 'Attractions'
                            /> 
                            :
                            null
                        }
                                              
                    </View>

                    {Platform.OS === 'android' ? 
                    <BottomSheet
                        snapPoints={['43%', '20%', 45, 0]}
                        renderContent = {keyboardShown ? renderEmpty : () => (<CalendarSelector/>)}
                        initialSnap = {2}
                        renderHeader = {keyboardShown ? renderEmpty : renderHeader}
                        ref = {sheetRef}
                        enabledContentTapInteraction = {false}

                    />
                    :
                    null}
                </ImageBackground>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    backGroundImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    header: {
        height: '5%',
        width: '100%',
        alignItems: 'flex-start',
        paddingLeft: '5%',
        justifyContent: 'center'
    },

    imageContainer: {
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    textContainer: {
        width: '100%',
        height: '6%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    calendarInputContainer: {
        height: '6%',
        width: '80%',
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        paddingRight: '5%',
        // overflow: 'visible'
    },
    destinationInputContainer: {
        width: '80%',
        height: '43%'
    },

    dragUp: {
        height: '30%',
        width: '20%',
        borderRadius: 20,
        backgroundColor: 'lightgrey'
    },

    button: {
        marginTop: '18%',
        height: '14%'
    },

    buttonContainer: {
        width: '80%',
        height: '10%'
    }
});

export default GetStartedScreen;