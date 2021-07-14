import {authApi} from "../../api/api";

const SET_IS_LOGGED_IN = 'SET_IS_LOGGED_IN'
const ERROR = 'ERROR'
const LOADING = 'LOADING'
const initialState = {
    isLoggedIn: false,
    isError: false,
    titleError: '',
    isLoading: false
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_LOGGED_IN:
            return {...state, isLoggedIn: action.isLoggedIn}
        case ERROR: {
            return {...state, isError: true, titleError: action.titleError}
        }
        case LOADING: {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
};

// api
const setIsLoggedInAC = (isLoggedIn) => ({type: SET_IS_LOGGED_IN, isLoggedIn})
const setErrorAC = (titleError) => ({type: ERROR, titleError})
export const loadingAC = (isLoading) => ({type: LOADING, isLoading: isLoading})


// thunks
export const loginTC = (email, password, rememberMe) => (dispatch) => {
    dispatch(loadingAC(true))
    authApi.login(email, password, rememberMe)
        .then(res => {
            dispatch(setIsLoggedInAC(true))
            dispatch(setErrorAC(null))
            dispatch(loadingAC(false))
        })
        .catch(error => {
            dispatch(setErrorAC(error.response.data.error))
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
        .catch(error => {
            dispatch(setErrorAC(error.response.data.error))

        })
        .finally(() => {
            dispatch(loadingAC(false))
        })
}

