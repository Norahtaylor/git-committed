import React from 'react'
import { useRef, useMemo, useState } from 'react'
import GitCommittedCard from './GitCommittedCard'
import TinderCard from 'react-tinder-card'
import { useRouteMatch } from 'react-router-dom'
import SwipeRightIcon from '@mui/icons-material/SwipeRight';


function SwipeCard({userAccounts, currentUser}) {
    const [lastDirection, setLastDirection] = useState()
    //this is saying which direction someone swiped. 

    const swiped = (direction, nameToDelete) => {
        console.log('removing:' + nameToDelete)
        setLastDirection(direction)
        console.log('direction:', {direction})
    }

    //direction says right or left, so if the direction === 'right' do this thing
    //if the direction === 'left' do another thing
    //how to remove the user that someone swiped on, do i need another column that saves them as already swiped on?

    //record that they swiped yes or no, query filtered that were not swiped on. exclude current user. backend. user 1 swiped on user 2 , true or false. 
    //record yes or no for swipe direction in the match table and then filter out what the currentUser sees on the backend based on that data

    const outOfFrame = (id) => {
        console.log("swiped on user id", id)
        // console.log(id + ' left the screen!')
        //why is id coming through on this function and not 
    }
    
    // const userId = userProfiles.map((user) => {
    //   user.id})

   

   const swipeDirection = (dir, id) => {
    console.log("i swiped:", dir)
    console.log(id)
    console.log("currrnet user", currentUser.id)

    if(dir === 'right')
        fetch('/matches', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                requestor_id: currentUser.id,
                receiver_id: id,
                accepted: true,
                user_account_id: currentUser.id
            })
        })  
        
        else {
            fetch('/matches', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                requestor_id: currentUser.id,
                receiver_id: id,
                user_account_id: currentUser.id,
                accepted: false
            })
        })
        }
  
   }
        
    // function swipeRight() {
    //     fetch('/matches', {
    //         method: "POST", 
    //         headers: {
    //             "Content-Type": "application/json", 
    //         }, 
    //         body: JSON.stringify({
    //             requestor_id: currentUser.id,
    //             receiver_id: userProfiles.user_account_id
    //         })
    //     })

    // }
    //matches POST request to 

    //logic for determining swipe left or right to make a match
    //right swipe make post request with accepted: true

    //left swipe POST request with accepted: false 

    return (
        <div className="card-center">
        
            {/* <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
            <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
            <h1>Git Committed</h1>
            <div className='cardContainer'>
                {userAccounts.map((user) =>
                    <TinderCard className='swipe' 
                    key={user.id} 
                    id={user.id}
                    // onSwipe={() => swiped(user.name)} 
                    onCardLeftScreen={(dir) => swipeDirection(dir, user.id)}
                    >
                        <div style={{ backgroundImage: 'url(' + user.profile_photo + ')' }} className='card'>
                            <h2>{user.name}, {user.age}</h2>
                        </div>
                    </TinderCard>
                )} */}
                
            {/* </div> */}
            <SwipeRightIcon className="swipe-right"/>
            {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
        </div>
    )
} 

export default SwipeCard