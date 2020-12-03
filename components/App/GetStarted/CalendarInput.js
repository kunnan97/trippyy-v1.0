import React, {useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity, Keyboard, Platform
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import {useSelector} from 'react-redux';
import Popover from 'react-native-popover-view';

import DefaultText from '../../UI/DefaultText';
import CalendarSelector from './CalendarSelector';

const calendarIcon = <MaterialCommunityIcons name="calendar" size={30} color="black" />;

const defaultStartText = 
    <DefaultText style = {{color: 'lightgrey'}}>
        Start Date
    </DefaultText>;
const defaultEndText = 
    <DefaultText style = {{color: 'lightgrey'}}>
        End Date
    </DefaultText>;



const CalendarInput = props => {
    const startDate = useSelector(state => state.date.start);
    const endDate = useSelector(state => state.date.end);

    
    const inputStartText = 
        <DefaultText style = {{color: 'black'}}>
            {startDate}
        </DefaultText>;
    const inputEndText = 
        <DefaultText style = {{color: 'black'}}>
            {endDate}
        </DefaultText>;

    const {onStartDateSelected, onEndDateSelected} = props;

    useEffect(() => {
        if (startDate !== '' && endDate !== '') {
        onStartDateSelected();
        onEndDateSelected();
        }
    }, [startDate, endDate])

    if (Platform.OS === 'android') {
        return (
            <View style = {styles.container}>
    
                <View  style = {styles.inputContainer}>
                    {calendarIcon}

                    <TouchableOpacity
                        onPress = {() => {
                            props.onFocus();
                            if (Platform.OS === 'android') {
                                Keyboard.dismiss();
                            }
                        }}
                    >
                        {startDate === '' ? defaultStartText : inputStartText}
                    </TouchableOpacity>
                </View>
    
                <View style = {styles.inputContainer}>
                    {calendarIcon}
    
                    <TouchableOpacity
                        onPress = {() => {
                            props.onFocus();
                            if (Platform.OS === 'android') {
                                Keyboard.dismiss();
                            }
                        }}
                    >
                        {endDate === '' ? defaultEndText : inputEndText}
                    </TouchableOpacity>
                </View>
            </View>
        );
    } else {
        return (
            <View style = {styles.container}>
    
                <View  style = {styles.inputContainer}>
                    {calendarIcon}

                    <Popover
                        from = {(sourceRef, showPopover) => (
                            <View>
                                <TouchableOpacity
                                    onPress = {showPopover}
                                >
                                    <Text ref = {sourceRef}>
                                        {startDate === '' ? defaultStartText : inputStartText}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    >
                        <CalendarSelector/>
                    </Popover> 
                </View>
    
                <View style = {styles.inputContainer}>
                    {calendarIcon}

                    <Popover
                        from = {(sourceRef, showPopover) => (
                            <View>
                                <TouchableOpacity
                                    onPress = {showPopover}
                                >
                                    <Text ref = {sourceRef}>
                                        {endDate === '' ? defaultEndText : inputEndText}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    >
                        <CalendarSelector/>
                    </Popover> 
                </View>
            </View>
        );
    }

    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },

    inputContainer: {
        height: '100%',
        width: '50%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
});

export default CalendarInput;