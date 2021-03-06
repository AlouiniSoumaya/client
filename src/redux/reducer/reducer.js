import {ADD_NEW_USER, LOGIN, UPDATE_USER} from '../action-type/actionType';

const initialize = {
    user:[]
}

const userReducer = (state = initialize, action)=>{
    switch (action.type){
        case ADD_NEW_USER : return {
            ...state,
            user: action.payload
        }
        case LOGIN : return {
            ...state,
            user: action.payload
        }
        case UPDATE_USER : return {
            ...state,
            user: action.payload
        }
        default : return state
    }
}

export default userReducer