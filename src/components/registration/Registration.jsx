import React, {useState} from "react";
import "./Registration.less"
import {registrationTC} from "../redux/reducers/registration-reducer";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import Loading from "../common/loading/Loading";

const Registration = () => {

    const dispatch = useDispatch()

    //variables from reducer
    const isRegistration = useSelector(state => state.registration.isRegistration)
    const isLoading = useSelector(state => state.registration.isLoading)
    const isError = useSelector(state => {state.registration.isError})
    const titleError = useSelector((state) => state.registration.titleError)

    //local state
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    //isValid of Email, Password, Confirm Password
    const [isValidEmail, setIsValidEmail] = useState(true)
    const [isValidPassword, setIsValidPassword] = useState(true)
    const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true)


    //Error
    const [errorEmail, setErrorEmail] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    const [errorConfirmPassword, setErrorConfirmPassword] = useState(false)

    const onChangeHandlerEmail = (e) => {
        setEmail(e.currentTarget.value)
        if (e.currentTarget.value.length >= 7 && (e.currentTarget.value.indexOf("@") !== -1)) {
            setIsValidEmail(false)
            setErrorEmail(false)
        } else {
            setIsValidEmail(true)
        }
    }
    const onChangeHandlerPassword = (e) => {
        setPassword(e.currentTarget.value)
        if (e.currentTarget.value.length >= 7) {
            setIsValidPassword(false)
            setErrorPassword(false)
        } else {
            setIsValidPassword(true)
        }
    }
    const onChangeHandlerConfirmPassword = (e) => {
        setConfirmPassword(e.currentTarget.value)
        if (e.currentTarget.value.length >= 7) {
            setErrorConfirmPassword(false)
            setIsValidConfirmPassword(false)
        } else {
            setIsValidConfirmPassword(true)
        }
    }

    const blurPassword = (e) => {
        if (e.currentTarget.value.length < 7) {
            setErrorPassword(true)
        }
    }

    const blurEmail = (e) => {
        if (e.currentTarget.value.length < 7 || (e.currentTarget.value.indexOf("@") == -1)) {
            setErrorEmail(true)
        }
    }

    const blurConfirmPassword = (e) => {
        if (e.currentTarget.value.length < 7) {
            setErrorConfirmPassword(true)
        }
    }

    const onSubmitRegistration = () => {
        password === confirmPassword &&
        dispatch(registrationTC({email, password}))
    }


    if (isLoading) {
        return <Loading/>
    }

    if (isRegistration) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div className='component-container'>
            <h2>Registration</h2>
            <div>
                <input
                    placeholder={'E-mail'}
                    onChange={onChangeHandlerEmail}
                    name={'email'}
                    value={email}
                    onBlur={blurEmail}
                />
            </div>
            <div>{errorEmail &&
            <div style={{color: "red"}}>{'Not valid email'}</div>}</div>

            <div>
                <input
                    type={'password'}
                    placeholder={'Password'}
                    onChange={onChangeHandlerPassword}
                    name={'password'}
                    value={password}
                    onBlur={blurPassword}
                />
            </div>
            <div>{errorPassword &&
            <div style={{color: "red"}}>{'Password must be more than 7 characters...'}</div>}</div>
            <div>
                <input
                    type={'password'}
                    placeholder={'Confirm password'}
                    onChange={onChangeHandlerConfirmPassword}
                    name={'confirmPassword'}
                    value={confirmPassword}
                    onBlur={blurConfirmPassword}
                />
            </div>
            <div>{errorConfirmPassword &&
            <div style={{color: "red"}}>{'The password values must be equal to!'}</div>}</div>

            <button onClick={onSubmitRegistration}
                    disabled={isValidEmail || isValidPassword || isValidConfirmPassword}>Send
            </button>
            {isError && <div style={{color: "red"}}>{titleError}</div>}
        </div>
    )
}
export default Registration

