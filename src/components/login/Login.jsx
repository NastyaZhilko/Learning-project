import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../redux/reducers/login-reducer";
import {Redirect} from "react-router-dom";
import Loading from "../common/loading/Loading";

const Login = () => {

    const dispatch = useDispatch()

    const isLoggedIn = useSelector(state => state.login.isLoggedIn)
    const error = useSelector(state => state.login.error)
    const isLoading = useSelector(state => state.login.isLoading)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)
    const [validateError, setValidateError] = useState(null)


    const onChangeEmail = (e) => setEmail(e.currentTarget.value)
    const onChangePassword = (e) => setPassword(e.currentTarget.value)
    const onChangeRememberMe = (e) => setRememberMe(e.currentTarget.checked)

    const onClickLogin = () => {
        if (email === "" || password === "") {
            setValidateError("Email or password required")
            return
        }
        dispatch(loginTC(email, password, rememberMe))
    }

    if (isLoggedIn) {
        return <Redirect to={'/profile'}/>
    }
    if (isLoading) {
        return <Loading/>
    }

    return (
        <div>
            <div className='component-container'>

                <h3>Sign in</h3>
                <div>
                    <input
                        placeholder={"Email"}
                        name={"email"}
                        value={email}
                        onChange={onChangeEmail}
                    />
                    <input
                        placeholder={"Password"}
                        name="password"
                        value={password}
                        onChange={onChangePassword}
                    />

                </div>
                <div>
                    <div>
                        <input className="checkbox"
                               type="checkbox"
                               checked={rememberMe}
                               onChange={onChangeRememberMe}
                        />
                        <span>Remember Me</span>
                    </div>
                    <div>
                        <button onClick={onClickLogin} className='btn'>Log IN</button>
                    </div>
                </div>
                 {error ? <div>{error}</div> : null}
                {validateError ? <div>{validateError}</div> : null}
            </div>
        </div>
    )
}
export default Login