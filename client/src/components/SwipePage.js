import {useEffect, useState} from 'react'
import TinderCard from 'react-tinder-card'
import SwipeCard from './SwipeCard'
import NavBar from './NavBar'
import MyMatches from './MyMatches'
import Footer from './Footer'

const SwipePage = ({onLogout, currentUser}) => {
    const [userProfiles, setUserProfiles] = useState([])
    const [errors, setErrors] = useState()
   
    useEffect(() => {
        if (!currentUser) return
        // return means stop excuting this function if currentUser is null. this code makes the currentUser profile not flash on the screen

        fetch('/findlove')
        .then(res => {
            if (res.ok) {
                res.json()
                .then(data => {

                    const filtered = data.filter((user) => user.id !== currentUser.id)

                    setUserProfiles(filtered) }) }
            else { 
                res.json().then(data => console.log(data.errors))
            }
    })}, [currentUser])  
    //setting a dependency for currentUser 

    return(
        <div style={{
            backgroundSize: "cover",
            height: "1000px",
        }} 
        
        >
           <SwipeCard currentUser={currentUser} userProfiles={userProfiles} />
           {/* <Footer /> */}
        </div>
    )
}

export default SwipePage;