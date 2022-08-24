import {useRef, useMemo, useState} from 'react'
import TinderCard from 'react-tinder-card'
import { useHistory } from 'react-router-dom'
import SwiperIcon from './SwiperIcon'
import ErrorPage from './ErrorPage'


function PendingApprovalCard({ pendingApproval, user }) {
    const history = useHistory()
    const [lastDirection, setLastDirection] = useState()

    const swipeDirection = (dir, id) => {

        if (dir === 'right')
            fetch(`/matches/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
  
                    status: 'accepted',
                    accepted: true

                })
            })

        else {
            fetch(`/matches/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
       
                    accepted: false,
                    status: 'denied'
                })
            })
        }

    }

  return (
    <>

          <h5 className='form-box-h5'
          >  People who swiped right on me </h5>
          <label className='label'>
              
          </label>
            <div className="card-center"
            >
              <SwiperIcon />
              <br></br>
            
            <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
            <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
           
            <div className='cardContainer'>
                  { pendingApproval.length > 0 ? pendingApproval.map((match) =>
                    <TinderCard className='swipe' 
                    key={match.id} 
                    id={match.id}
                    preventSwipe={['up', 'down']}
                    // onSwipe={() => swiped(user.name)} 
                    onCardLeftScreen={(dir) => swipeDirection(dir, match.id)}
                    >
                        <div 
                        style={{ backgroundImage: 'url(' + match.requestor.profile_photo + ')' }} className='card'>
                            <h2>{match.requestor.first_name}, {match.requestor.age}</h2>
                        </div>
                    </TinderCard>
                ) : 
                <div 
                className='card-center'
                // overflow:"hidden"
                >
                   <h5></h5>
                <button
                    onClick={() => history.push('/swipe')}
                >
                    Take me to find love</button>
                </div>
            } 
            </div>
                

            {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
        </div>

{/*     
    <div>
            <h5 className='form-box-h5'
              >  Matches Pending Your Approval </h5>
              <label className='label'>
                  They swiped right on you! 
                  <br></br>Swipe right to match with them or left to say goodbye.
              </label>
            </div>
          <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"

          }}>

              <ImageList
                  sx={{
                      width: 900, height: 700,
                      borderRadius: "5px",
                      borderColor: "#EB0F59"
                  }}
              >
                  <ImageListItem key="header"

                      cols={5}>
                      <ListSubheader
                          //   sx={{ color: "white",
                          //   backgroundColor: "#EB0F59" 
                          // }}
                          component="div"
                      >
                     
                  {pendingApproval.length === 0 ? <h1>
                    you have no pending approvals
                  </h1> : null }
                      </ListSubheader>
                  </ImageListItem>
                  {pendingApproval.length > 0 ? pendingApproval.map((match) => (

                      <ImageListItem

                          key={match.id}
                      >
                          <img
                              src={`${match.requestor.profile_photo}?w=248&fit=crop&auto=format`}
                              srcSet={`${match.requestor.profile_photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
                              alt={match.requestor.name}
                              loading="lazy"
                          />
                          <ImageListItemBar
                              title={`${match.requestor.first_name}, ${match.requestor.age}`}
                              subtitle={match.requestor.bio}

                          //   actionIcon={
                          //       <IconButton
                          //           sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                          //           aria-label={`info about ${item.title}`}
                          //       >
                          //           <InfoIcon />
                          //       </IconButton>
                          //   }
                          />
                      </ImageListItem>
                  )
                  ) : null
                  }
              </ImageList>

          </div> */}
</>
  )
}

export default PendingApprovalCard