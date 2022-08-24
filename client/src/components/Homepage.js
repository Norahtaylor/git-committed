import { useEffect, useState } from 'react'
import { useHistory} from "react-router-dom";
import Footer from './Footer';

const Homepage = ({setUser}) =>  {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [errors, setErrors] = useState([])

    let navigate = useHistory()

    function navigateLogin() {
        navigate.push("/login")
    }

    function handleSubmit(e) {
        e.preventDefault()

        fetch('/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password, 
                last_name: lastName, 
                first_name: firstName
            })
        })
        .then((r) => {
        if (r.ok){
            r.json().then((user) => setUser(user))
            navigate.push('/createprofile')
        } else {
            r.json().then((err) => setErrors(err.errors))
        } 
    })
        setUsername('')
        setPassword('')
        setFirstName('')
        setLastName('')
    }

    return (
        <div className='homepage'>

            <div className="container" id="container">
                <div className="form-container ">
                    <form className="create-container" 
                        onSubmit={handleSubmit}
                    >
                        <h1 className="signup-h1">Create Account</h1>
                    
                        <input className="signup-input" 
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName}
                        type="text" 
                        placeholder="First Name" />
                        
                        <input className="signup-input"
                        type="text" 
                        onChange={e => setLastName(e.target.value)}
                        value={lastName}
                        placeholder="Last Name"
                        // value={formData.lastName}
                         />
                        <input 
                        onChange={e => setUsername(e.target.value)}
                        className="signup-input"
                        type="username"
                        value={username}
                        placeholder="username"
                        // value={formData.username} 
                        />
                        <input 
                        onChange={e => setPassword(e.target.value)}
                        className="signup-input" 
                        type="password" 
                        value={password}
                        // value={formData.password}
                        placeholder="Password" />
                        <button 

                        type="submit" 
                        onSubmit={handleSubmit} 
                      
                        className='button'>
                            Sign Up</button>
                            <br></br>
                        <div style={{color: "red"}}>
                            <br></br>
                            {errors.map(error => (
                                <div key={error}>{error}</div>))}
                        </div>
                    </form>
                </div>

                    <div className="overlay-container">
                            <div className="overlay">
                        <div className="overlay-panel overlay-right">
                            <h1>Git Commit(ted) </h1>
                            <p className="signup-h2"> -m "bringing the hottest and brightest minds of the tech industry together"</p>
                            <p className="signup-p">Already have an account?</p>
                            <button type="button" onClick={navigateLogin} className="ghost" >Login</button>
                        </div>
                    </div>
                </div>
            </div>

           
<Footer />
        </div>
    )
}

export default Homepage; 