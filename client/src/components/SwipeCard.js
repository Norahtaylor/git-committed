import React from 'react'
import { useRef, useMemo, useState } from 'react'
import GitCommittedCard from './GitCommittedCard'
import TinderCard from 'react-tinder-card'
import { useRouteMatch } from 'react-router-dom'
import SwiperIcon from './SwiperIcon'
import ErrorPage from './ErrorPage'

function SwipeCard({userProfiles, currentUser}) {
    const [lastDirection, setLastDirection] = useState()
    //this is saying which direction someone swiped. 
    const [isShown, setIsShown] = useState(false)
    //Tinder card hover

    const swiped = (direction, nameToDelete) => {
        console.log('removing:' + nameToDelete)
        setLastDirection(direction)
        console.log('direction:', {direction})
    }

    //how to remove the user that someone swiped on, do i need another column that saves them as already swiped on?

    //record that they swiped yes or no, query filtered that were not swiped on. exclude current user. backend. user 1 swiped on user 2 , true or false. 
    //record yes or no for swipe direction in the match table and then filter out what the currentUser sees on the backend based on that data

    const outOfFrame = (id) => {
        console.log("swiped on user id", id)
        // console.log(id + ' left the screen!')
        //why is id coming through on this function and not 
    }
    

   const swipeDirection = (dir, id) => {
    console.log("i swiped:", dir)
    console.log("current user", currentUser.id)

    if(dir === 'right')
        fetch('/matches', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                requestor_id: currentUser.id,
                receiver_id: id,
                status: 'pending',
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
        

    //logic for determining swipe left or right to make a match
    //right swipe make post request with accepted: true

    // how to share that we ran out of matches? and display the error page?

    return (
        <>
        <h1 
        // className='h1-card'
            className='form-box-h5'
        >
            Git Committed</h1>
            <div className="card-center"
            >

            <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
            <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
           
            <div className='cardContainer'>
                { userProfiles.length > 0 ? userProfiles.map((user) =>
                <div>
                    <TinderCard className='swipe' 
                    key={user.id} 
                    id={user.id}
                    preventSwipe={['up', 'down']}
                    // onSwipe={() => swiped(user.name)} 
                    onCardLeftScreen={(dir) => swipeDirection(dir, user.id)}
                    >
                        <div style={{ backgroundImage: 'url(' + user.profile_photo + ')' }} className='card'>
                            <h2>{user.first_name}, {user.age}</h2>
                        </div>
                    </TinderCard>
                    {/* <TinderCard 
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                        className='swipe'
                            key={user.id}
                            id={user.id}
                            preventSwipe={['up', 'down']}
                    >
                        {isShown ? (
                                <div >
                                    <h2 >{user.bio}</h2>
                                </div>
                        ) : null }
                       

                    </TinderCard> */}
                    </div>
                ) : 
                <h5>
                    oops! you're out of people in the area 
                    </h5>  } 
                
            </div>
            <SwiperIcon />
{/* 
            {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />} */}
        </div>
        </>
    )
} 

export default SwipeCard