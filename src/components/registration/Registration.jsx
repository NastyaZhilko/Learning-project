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

    //local state
    const [data, setData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })


    const onChangeHandler = (e) => {
        const fieldName = e.target.name
        for (let key in data) {
            if (key === fieldName) {
                setData({...data, [key]: e.currentTarget.value})
            }
        }
    }

    const onSubmitRegistration = () => {
        data.password === data.confirmPassword
        && dispatch(registrationTC({email: data.email, password: data.password}))
        setData({email: '', password: '', confirmPassword: ''})
    }

    if (isLoading) {
        return (
            <Loading/>
        )
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
                    onChange={onChangeHandler}
                    name={'email'}
                    value={data.email}
                />
            </div>

            <div>
                <input
                    type={'password'}
                    placeholder={'Password'}
                    onChange={onChangeHandler}
                    name={'password'}
                    value={data.password}
                />
            </div>

            <div>
                <input
                    type={'password'}
                    placeholder={'Confirm password'}
                    onChange={onChangeHandler}
                    name={'confirmPassword'}
                    value={data.confirmPassword}
                />
            </div>

            <button onClick={onSubmitRegistration}>Send</button>

        </div>
    )
}
export default Registration

