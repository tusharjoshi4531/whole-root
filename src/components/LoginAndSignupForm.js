import "./CSS/LoginAndSignupForm.css"

import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const LoginAndSignupForm = ({ login, signup, enterMainPage, events, plan, onLogin, onSignup }) => {

    let navigate = useNavigate()

    // Hooks
    const [LoginCredentials, setLoginCredentials] = useState({email: "", password: ""})
    const [SignUpDetails, setSignUpDetails] = useState({university: "", email: "", password: "", confPassword: ""})

    // Events
    const onLoginSubmit = (e, type) => { 
        
        if (LoginCredentials.email === ""){
            alert("Type email")
            return
        } else if (LoginCredentials.password === ""){
            alert("Type password")
            return
        }

        e.preventDefault()

        axios
            .post("https://test-serverrr.herokuapp.com/login", {
                usertype: type,
                username: LoginCredentials.email,
                pass: LoginCredentials.password,
            })
            .then((res) => {
                console.log(res.data.auth)
                if (res.data.auth === "False"){
                    alert("incorrect credentials")
                    return
                }

                switch (type) {
                    case 'student':
                        navigate('/student')
                        break;

                    case 'teacher':
                        navigate('/teacher')
                        break;
                    
                    case 'institute':
                        navigate('/institute')
                        break;

                    default:
                        break;
                }
                

                // if (events.checkLogin(LoginCredentials)){
                //     login()
                // }
                
                setLoginCredentials({email: "", password: ""})
            })
            .catch((err) => {
                console.log(err)
            });

    }  

    const onSignupSubmit = e => {

        e.preventDefault()

        if (SignUpDetails.password !== SignUpDetails.confPassword || SignUpDetails.confPassword === "") {
            setSignUpDetails({...SignUpDetails, password: "", confPassword: ""})
            return
        }

        if(events.getSignupDetails({plan: plan, university: SignUpDetails.university, email: SignUpDetails.email, password: SignUpDetails.password})){
            login()
        }
    }

    return (
        <div className="form-container">
            <CSSTransition
                in={onLogin.get}
                timeout={500}
                classNames="fade"
                unmountOnExit
                onExited={() => {setLoginCredentials({email: "", password: ""})}}>

                <form action="login" className="main-form" onSubmit={onLoginSubmit}>
                    
                    <label>LOG IN</label>

                    <input type="email" placeholder="Email"
                        value={LoginCredentials.email}
                        onChange={ e => setLoginCredentials({...LoginCredentials, email: e.target.value})} />

                    <input type="password" placeholder="Password" 
                        value={LoginCredentials.password}
                        onChange={ e => setLoginCredentials({...LoginCredentials, password: e.target.value})} />

                    <button type="button" onClick={e => onLoginSubmit(e, 'student')}>STUDENT</button>

                    <button type="button" onClick={e => onLoginSubmit(e, 'teacher')}>TEACHER</button>
                    <button type="button" onClick={e => onLoginSubmit(e, 'institute')}>INSTITUTE</button>

                    <button type="button" onClick={() => enterMainPage()}>Back</button>
                </form>

            </CSSTransition>

            <CSSTransition
                in={onSignup.get}
                timeout={500}
                classNames="fade"
                unmountOnExit
                onExited={() => {setSignUpDetails({name: "", email: "", password: "", confPassword: ""})}}>

                    <form action="signup" className="main-form" onSubmit={onSignupSubmit}>

                        <label>SIGN UP</label>

                        <input type="text" placeholder="University" 
                            value={SignUpDetails.university}
                            onChange={e => setSignUpDetails({...SignUpDetails, university: e.target.value})}/>

                        <input type="email" placeholder="Email" 
                            value={SignUpDetails.email}
                            onChange={e => setSignUpDetails({...SignUpDetails, email: e.target.value})}/>
                        
                        <input type="password" placeholder="Password" 
                            value={SignUpDetails.password}
                            onChange={e => setSignUpDetails({...SignUpDetails, password: e.target.value})}/>
                        
                        <input type="password" placeholder="Confirm Password" 
                            value={SignUpDetails.confPassword}
                            onChange={e => setSignUpDetails({...SignUpDetails, confPassword: e.target.value})}/>

                        <button type="submit">SIGN UP</button>

                        <button type="button" onClick={() => enterMainPage()}>BACK</button>

                    </form>
            </CSSTransition>
        </div>
    )
}

export default LoginAndSignupForm
