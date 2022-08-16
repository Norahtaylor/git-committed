import {useEffect, useState} from 'react'
import TinderCard from 'react-tinder-card'
import SwipeCard from './SwipeCard'
import NavBar from './NavBar'
import MyMatches from './MyMatches'

const SwipePage = ({onLogout, currentUser}) => {
    const [userProfiles, setUserProfiles] = useState([])
    const [errors, setErrors] = useState()
    const [matches, setMatches] = useState([])

    //Fetch user_profiles for swipe cards
    useEffect(() => {
        if (!currentUser) return
        // return means stop excuting this function if currentUser is null. this code makes the currentUser profile not flash on the screen

        fetch('/user_profiles')
        .then(res => {
            if (res.ok) {
                res.json()
                .then(data => {

                    const filtered = data.filter((user) => user.
                        user_account_id !== currentUser.id)

                    console.log("current user id: ",currentUser.id)
                    console.log("swipe card id:", data.id)

                    setUserProfiles(filtered) }) }
            else { 
                res.json().then(data => console.log(data.errors))
            }
    })}, [currentUser])  
    //setting a dependency for currentUser 



    return(
        <>
        <div>
            <NavBar onLogout={onLogout}/>
           <SwipeCard currentUser={currentUser} userProfiles={userProfiles} />
        </div>
        <div>
            {/* <MyMatches /> */}
        </div>
        </>
    )
}

export default SwipePage;