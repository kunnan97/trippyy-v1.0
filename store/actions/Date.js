export const SET_START = 'SET_START';
export const SET_END = 'SET_END';

export const setStart = (start) => {
    return {
        type: SET_START,
        start: start
    };
}

export const setEnd = (end) => {
    return {
        type: SET_END,
        end: end
    };
}