/* eslint-disable default-case */
import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
}
    from './constants';

const initialState = {
    searchField: ''
};

export const searchRobots = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return /*Object.assign({}, state, { searchField: action.payload });*/ { ...state, searchField: action.payload };
        default:
            return state;
    }
};

export const requestRobots = (state = initialState, action = {}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true });
        case REQUEST_ROBOTS_SUCCESS:
            return { ...state, robots: action.payload, isPending: false };
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false });
    }
};