import React, {useEffect} from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity, Keyboard, Platform
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import {useSelector} from 'react-redux';

import DefaultText from '../../UI/DefaultText';

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