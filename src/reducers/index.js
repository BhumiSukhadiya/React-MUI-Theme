import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import settings from './settings';
import user from './users'

const reducers = {
    routing: routerReducer,
    settings: settings,
    user_data:user
};

module.exports = combineReducers(reducers);
