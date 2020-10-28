import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { MaterialIcons } from '@expo/vector-icons'; 
import moment from 'moment';
import {useDispatch} from 'react-redux';

import {setEnd, setStart} from '../../../store/actions/Date';

const previousIcon = <MaterialIcons name="navigate-before" size={34} color="black" />;
const nextIcon = <MaterialIcons name="navigate-next" size={34} color="black" />;

const CalendarSelector = props => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    
    const dispatch = useDispatch();

    const saveStart = () => {
        dispatch(setStart(startDate));
    }

    const saveEnd = () => {
        dispatch(setEnd(endDate));
    }

    useEffect(() => {
        saveStart();
    }, [startDate]);

    useEffect(() => {
        saveEnd();
    }, [endDate])

    const dateChangeHandler = (date, type) => {
        const convertedDate = moment(date).format('DD/MM/YYYY')
        if (type === 'END_DATE') {
            setEndDate(convertedDate);
        } else {
            setStartDate(convertedDate);
        }
    }

    return (
        <View style = {styles.calendar}>
            <CalendarPicker 
                allowRangeSelection = {true}
                allowBackwardRangeSelect = {true}
                previousComponent = {previousIcon}
                nextComponent = {nextIcon}
                startFromMonday = {true}
                showDayStragglers = {true}
                onDateChange = {dateChangeHandler}
                selectedDayColor = '#6FB5AB'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    calendar: {
        backgroundColor: 'white',
        height: 350
    }
});

export default CalendarSelector;