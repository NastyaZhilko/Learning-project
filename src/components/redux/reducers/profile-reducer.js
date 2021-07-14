import {authApi} from "../../api/api";

const SET_IS_LOGGED_IN = 'SET_IS_LOGGED_IN'
const SET_ERROR = 'SET_ERROR'
const LOADING = 'LOADING'
const initialState = {
    isLoggedIn: false,
    error: null,
    isLoading: false,

}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_LOGGED_IN:
            return {...state, isLoggedIn: action.isLoggedIn}
        case SET_ERROR:
            return {...state, error: action.error}
        case LOADING: {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
};

// api
const setIsLoggedInAC = (isLoggedIn) => ({type: SET_IS_LOGGED_IN, isLoggedIn})
const setErrorAC = (error) => ({type: SET_ERROR, error})
export const loadingAC = (isLoading) => ({type: LOADING, isLoading: isLoading})

// thunks
export const loginTC = (data) => (dispatch) => {
    dispatch(loadingAC(true))
    authApi.login(data)
        .then(res => {
            dispatch(setIsLoggedInAC(true))
            dispatch(setErrorAC(null))
        })
        .catch(err => {
            dispatch(setErrorAC("Some error"))
        })
        .finally(() => {
            dispatch(loadingAC(false))
        })
}
export const authMeTC = () => (dispatch) => {
    dispatch(loadingAC(true))
    authApi.me()
        .then(res => {
            dispatch(setIsLoggedInAC(true))
        })
        .catch(err => {
            dispatch(setErrorAC("Some error"))
        })
        .finally(() => {
            dispatch(setIsLoggedInAC(false))
        })
}
export const logoutTC = () => (dispatch) => {
    dispatch(loadingAC(true))
    authApi.me()
        .then(res => {
            dispatch(setIsLoggedInAC(false))
        })
        .catch(err => {
            dispatch(setErrorAC("Some error"))

        })
        .finally(() => {
            dispatch(setIsLoggedInAC(false))
        })
}