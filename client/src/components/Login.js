import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import NavBar from './NavBar';


function Login({setUser}) {
    let navigate = useHistory()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function navigateLogin() {
        navigate.push("/")
    }

    function handleSubmit(e){
        e.preventDefault(e)
        fetch('/login', {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                username: username,
                password: password })
        })
        .then((res) => res.json())
        .then((user) => setUser(user))
        setUsername('')
        setPassword('')
        navigate.push('/swipe')
    }

    return(
        
        <div className='homepage'>
           

            <div className="container" id="container">
                <div className="form-container ">
                    <form onSubmit={handleSubmit}className="sign-in-container" action="#">
                        <h1 className="signup-h1">Login</h1>
                        <input className="signup-input" type="text" placeholder="First Name" />
                        <input className="signup-input" 
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        type="username" 
                        placeholder="username" />
                        <input className="signup-input" 
                        value={password}
                        onChange={e=> setPassword(e.target.value)}
                        type="password" 
                        placeholder="Password" />
                        <button className='button'>Login</button>
                    </form>
                </div>

                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-right">
                            <h1>Git Commit(ted) </h1>
                            <p className="signup-h2"> -m "bringing the hottest and brightest minds of the tech industry together"</p>
                            <p className="signup-p">Don't have an account?</p>
                            <button onClick={navigateLogin} type="button" className="ghost" >Signup</button>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
//   return (
//     <div>
//           <div className="container" id="container">
//               <div className="form-container ">
//           <div className="sign-in-container">
//               <form action="#">
//                   <h1>Sign in</h1>

//                   <span>or use your account</span>
//                   <input type="email" placeholder="Email" />
//                   <input type="password" placeholder="Password" />
//                   <a href="#">Forgot your password?</a>
//                   <button>Sign In</button>
//               </form>
//           </div>
//           </div>
//           </div>

//           <div className="overlay-container">
//               <div className="overlay">
//                   <div className="overlay-panel">
//                       <h1>Welcome Back!</h1>
//                       <p>To keep connected with us please login with your personal info</p>
//                       <button className="ghost" id="signIn">Sign In</button>
//                   </div>
//                 </div>
//                 </div>
//     </div>
  
}

export default Login