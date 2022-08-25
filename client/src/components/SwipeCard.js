import React from 'react'
import { useRef, useMemo, useState } from 'react'
import GitCommittedCard from './GitCommittedCard'
import TinderCard from 'react-tinder-card'
import { useHistory, useRouteMatch } from 'react-router-dom'
import SwiperIcon from './SwiperIcon'
import ErrorPage from './ErrorPage'

function SwipeCard({userProfiles, currentUser}) {
    const [lastDirection, setLastDirection] = useState()
    //this is saying which direction someone swiped. 
    const [isShown, setIsShown] = useState(false)
    //Tinder card hover
    let history = useHistory()

    const swiped = (dir, user) => {
        console.log('removing:', user)
        setLastDirection(dir)
    
    }

    //how to remove the user that someone swiped on, do i need another column that saves them as already swiped on?



    //after refresh, it shows -1
    // if currentIndex < 0 do not refresh and show the cards again

    const outOfFrame = (id) => {
        console.log("swiped on user id", id)
    }

   const swipeDirection = (dir, id) => {
    console.log("i swiped:", dir)
    console.log("current user", currentUser.id)
    console.log("swiped on user id", id)

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
        

    return (
        <>
        <h1 
        
        // className='h1-card'
            className='form-box-h5'
                
        >
            Git Committed</h1>
         
       
            <div 
                
                className="card-center"
            >
                <SwiperIcon />
                <br></br>
            <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
            <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
           <br></br>
           <br></br>

            <div className='cardContainer'>
                { userProfiles.length > 0 ? userProfiles.map((user) =>
                <div>
                    <TinderCard className='swipe' 
                    key={user.id} 
                    id={user.id}
                    preventSwipe={['up', 'down']}
                    onSwipe={(dir) => swiped(dir, user.name)} 
                    onCardLeftScreen={(dir) => swipeDirection(dir, user.id)}
                    >
                        <div 
                        style={{ backgroundImage: 'url(' + user.profile_photo + ')' }} className='card'>
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
                <>
                <h5 
                    className="card-center"
                >
                    oops! you're out of people in the area 
                    </h5>  
                    <br></br>
                     {/* <button
                    onClick={() => history.push('/mymatches')}
                >
                    Take me to my matches</button> */}
               </>
                } 
                
            </div>
           

        </div>
        </>
    )
} 

export default SwipeCard