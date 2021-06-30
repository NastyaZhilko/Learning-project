import {passwordAPI} from "../../actions/api";

const REGISTRATION='REGISTRATION'
const LOADING='LOADING'

const initialState={
    isRegistration: false,
    isLoading: false
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
        default: return state;
    }
};

//action creators
export const registrationAC = (isRegistration) => ({type: REGISTRATION, isRegistration})
export const loadingAC = (isLoading) => ({type: LOADING, isLoading})

//thunk
export const registrationTC = (data) => (dispatch) => {
    dispatch(loadingAC(true))
    passwordAPI.registration(data)
        .then((data) => {
            dispatch(registrationAC(true))
        })
        .catch(error=>{
            alert(error)
        })
        .finally(()=>{
            dispatch(loadingAC(false))
        })

}