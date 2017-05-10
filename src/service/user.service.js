import axios from "axios";
import {addUser,getAllUser,updateSingleUser,deleteSingleUser} from "../actions";
let api_url = 'http://localhost:3001';
export const addNewUser = (user) => {
    return (dispatch) => {
        //noinspection JSUnresolvedFunction
        return axios.post(api_url + '/insertData', user)
            .then((res) => {
                dispatch(addUser(user));
                return res.data;
            }).catch((e) => {
                alert(e);
            });
    };
};

export const getUsers = () => {
    return (dispatch) => {
        //noinspection JSUnresolvedFunction
        return axios.get(api_url + '/getData')
            .then((res) => {
                dispatch(getAllUser(res.data));
            }).catch((e) => {
                console.log(e)
            });
    };
};

export const updateUser = (user,id) => {
    return (dispatch) => {
        //noinspection JSUnresolvedFunction
        return axios.put(api_url + '/updateData?id='+id,user)
            .then((res) => {
                dispatch(updateSingleUser(res.data));
                return res.data;
            }).catch((e) => {
                console.log(e)
            });
    };
};

export const deleteUser = (id) => {
    return (dispatch) => {
        //noinspection JSUnresolvedFunction
        return axios.delete(api_url + '/deleteData?id='+id)
            .then((res) => {
                return res.data;
            }).catch((e) => {
                console.log(e)
            });
    };
};