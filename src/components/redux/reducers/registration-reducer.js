import {passwordAPI} from "../../api/api";

const REGISTRATION='REGISTRATION'
const LOADING='LOADING'
const ERROR='ERROR'

const initialState={
    isRegistration: false,
    isLoading: false,
    isError: false,
    titleError: ''
}

//reducer
export const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTRATION: {
            return {...state, isRegistration: action.isRegistration};
        }
        case LOADING: {
            return {...state, isLoading: action.isLoading}
        }
        case ERROR:{
            return {...state, isError: true, titleError: action.titleError}
        }
        default:
            return state;
    }
};

//action creators
export const registrationAC = (isRegistration) => ({type: REGISTRATION, isRegistration})
export const loadingAC = (isLoading) => ({type: LOADING, isLoading})
export const errorAC = (titleError) => ({type: ERROR,  titleError})


//thunk
export const registrationTC = (email, password) => (dispatch) => {
    dispatch(loadingAC(true))
    passwordAPI.registration(email, password)
        .then((data) => {
            dispatch(registrationAC(true))
            dispatch(loadingAC(true))
        })
        .catch(error=>{
            dispatch(errorAC(error.response.data.error))
        })
        .finally(()=>{
            dispatch(loadingAC(false))
        })

}