import React from 'react'
import { useRef, useMemo, useState } from 'react'
import GitCommittedCard from './GitCommittedCard'
import TinderCard from 'react-tinder-card'
import { useRouteMatch } from 'react-router-dom'
import NavBar from './NavBar'


function SwipeCard({userProfiles}) {
    const [lastDirection, setLastDirection] = useState()
 

    const swiped = (direction, nameToDelete) => {
        console.log('removing:' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + 'left the screen!')
    }

    return (
        <div>
        
            <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
            <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
            <h1>Git Committed</h1>
            <div className='cardContainer'>
                {userProfiles.map((user) =>
                    <TinderCard className='swipe' key={user.name} onSwipe={(dir) => swiped(dir, user.name)} onCardLeftScreen={() => outOfFrame(user.name)}>
                        <div style={{ backgroundImage: 'url(' + user.profile_photo + ')' }} className='card'>
                            <h2>{user.name}, {user.age}</h2>
                        </div>
                    </TinderCard>
                )}
            </div>
            {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
        </div>
    )
} 

export default SwipeCard