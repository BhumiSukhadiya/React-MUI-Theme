import {
    ADD_NEW_USER,UPDATE_USER,GET_ALL_USER,DELETE_USER
} from '../constants/ActionTypes';

const user = (state = null, action) => {
    switch (action.type) {
        case ADD_NEW_USER:
            return {
                ...state,
                current_user: action.user
            }
        case UPDATE_USER:
            return {
                ...state,
                current_user: action.user
            }
        case GET_ALL_USER:
            return {
                ...state,
                users: action.users
            }
        default:
            return state;
    }
}

module.exports = user;