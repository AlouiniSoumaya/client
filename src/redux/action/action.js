import {ADD_NEW_USER, LOGIN, CURRENT, UPDATE_USER} from '../action-type/actionType';
import axios from 'axios';

export const addNewUser = (user) => async (dispatch) => {
    try {
        const data = await axios.post('http://localhost:5000/api/signUp', user)
        dispatch({
            type: ADD_NEW_USER,
            payload : data
        })
    } catch (error) {
        console.log(error)
    }
}

export const login = (user,Navigate) => async (dispatch) => {
    try {
        const res = await axios.post('http://localhost:5000/api/signIn', user)
        dispatch({
            type: LOGIN,
            payload : res.data
        })
        localStorage.setItem('token', res.data.token)
        dispatch(current(Navigate))
    } catch (error) {
        console.log(error)
    }
}

export const current = (Navigation) => async (dispatch) => {
    const config = {
        headers:{
            Authorization:localStorage.getItem('token')
        }
    }
    try {
        const {data} = await axios.post('http://localhost:5000/api/current', config)
        dispatch({
            type: CURRENT,
            payload : data
        })
        localStorage.setItem('token', data.token)
        Navigation ('/profile')
    } catch (error) {
        console.log(error)
    }
}

export const updateUser = (user) => async (dispatch)=>{
    try {
        const res = await axios.post('http://localhost:5000/api/updateUser', user)
        dispatch({
            type: UPDATE_USER,
            payload : res.data
        })
        localStorage.setItem('user', JSON.stringify(res.data.user))
    } catch (error) {
        console.log(error)
    }
}