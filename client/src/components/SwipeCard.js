import React from 'react'
import { useRef, useMemo, useState } from 'react'
import GitCommittedCard from './GitCommittedCard'
import TinderCard from 'react-tinder-card'
import { useRouteMatch } from 'react-router-dom'

const db = [
    {
        name: 'Richard Hendricks',
        url: './img/richard.jpg'
    },
    {
        name: 'Erlich Bachman',
        url: './img/erlich.jpg'
    },
    {
        name: 'Monica Hall',
        url: './img/monica.jpg'
    },
    {
        name: 'Jared Dunn',
        url: './img/jared.jpg'
    },
    {
        name: 'Dinesh Chugtai',
        url: './img/dinesh.jpg'
    }
]

function SwipeCard({userProfiles}) {
    const [lastDirection, setLastDirection] = useState()
    const characters = db
    const userCards = userProfiles 

    const swiped = (direction, nameToDelete) => {
        console.log('removing:' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + 'left the screen!')
    }

    {
   



  return (
    <div>
          <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
          <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
        <h1 className='h1'>React Tinder Card</h1>
        <div className='cardContainer'>
            {userProfiles.map((user) => 
                <TinderCard className="swipe" key={user.id} onSwipe={
                    (dir) => swiped(dir, user.name)} onCardLeftScreen={() => outOfFrame(user.name)}>
                <div style={{backgroundImage: (user.profile_id)}} className='card'>
                    <div className='cardContent'>
                            Name: {user.name}
                    </div>
                   
                </div>
                </TinderCard>
            )}
            </div>
     
            <div>
                  {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
            </div>

            <button>hello i am button</button>

            {/* {
                  userProfiles.map((item) => {
                     <GitCommittedCard 
                          key={item.id}
                          name={item.name}
                          userAccountId={item.user_account_id}
                          location={item.location}
                          photo={item.profile_photo}
                          hometown={item.hometown}
                          age={item.age}
                          birthday={item.birthdate}
                          education={item.education}
                          gender={item.gender}
                          interestedIn={item.interested_in}
                          bio={item.bio}
                        />
                  })
            } */}

 

    </div>
  )
} }

export default SwipeCard