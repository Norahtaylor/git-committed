import {useEffect, useState} from 'react'
import TinderCard from 'react-tinder-card'
import SwipeCard from './SwipeCard'
import NavBar from './NavBar'

const SwipePage = ({onLogout}) => {
    const [userProfiles, setUserProfiles] = useState([])
    const [errors, setErrors] = useState()

    useEffect(() => {
        fetch('/user_profiles')
        .then(res => {
            if (res.ok) {
                res.json().then(data => setUserProfiles(data)) }
            else { 
                res.json().then(data => console.log(data.errors))
            }
    })}, []) 


    
    return(
        <div>
            <NavBar onLogout={onLogout}/>
           <SwipeCard userProfiles={userProfiles} />
        </div>
    )
}

export default SwipePage;