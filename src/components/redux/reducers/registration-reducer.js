import {passwordAPI} from "../../actions/api";

const REGISTRATION='REGISTRATION'
const LOADING='LOADING'
const ERROR='ERROR'

const initialState={
    isRegistration: false,
    isLoading: false,
    isError: false,
    titleError:''
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
export const errorAC = (titleError) => ({type: ERROR, titleError})


//thunk
export const registrationTC = (data) => (dispatch) => {
    dispatch(loadingAC(true))
    passwordAPI.registration(data)
        .then((data) => {
            dispatch(registrationAC(true))
        })
        .catch(error=>{
            dispatch(errorAC(error))
        })
        .finally(()=>{
            dispatch(loadingAC(false))
        })

}