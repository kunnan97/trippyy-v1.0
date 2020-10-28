const { SET_START, SET_END } = require("../actions/Date");

const initialState = {
    start: '',
    end: ''
};

const dateReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_START:
            const setStartDate = action.start;

            return {...state, start: setStartDate};
        case SET_END:
            const setEndDate = action.end;

            return {...state, end: setEndDate};
        default:
            return state
    }
};

export default dateReducer;